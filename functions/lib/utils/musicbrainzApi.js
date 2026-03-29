"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRecordings = exports.getNewReleases = exports.getCoverArt = exports.getReleaseGroupById = exports.searchReleaseGroups = void 0;
const axios_1 = __importDefault(require("axios"));
const MB_BASE_URL = 'https://musicbrainz.org/ws/2';
const COVER_ART_BASE_URL = 'https://coverartarchive.org';
const USER_AGENT = 'BeatMeter/1.0.0 ( contact@beatmeter.com )';
// Helper to add delay to respect rate limits (1 req/sec)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
/**
 * Search for release groups (albums)
 */
const searchReleaseGroups = async (query, limit = 20) => {
    try {
        const response = await axios_1.default.get(`${MB_BASE_URL}/release-group`, {
            params: {
                query: `${query} AND primarytype:album`,
                limit,
                fmt: 'json',
            },
            headers: { 'User-Agent': USER_AGENT },
        });
        const releaseGroups = response.data['release-groups'] || [];
        // Use optimistic Cover Art Archive URLs for all results
        // This avoids rate limits and ensures all items have a potential image
        const resultsWithArt = releaseGroups.map((rg) => {
            return {
                ...rg,
                images: [
                    { url: `https://coverartarchive.org/release-group/${rg.id}/front` },
                ],
            };
        });
        return {
            albums: {
                items: resultsWithArt.map(transformToSpotifyFormat),
            },
        };
    }
    catch (error) {
        console.error('Error searching MusicBrainz:', error);
        throw error;
    }
};
exports.searchReleaseGroups = searchReleaseGroups;
/**
 * Get release group details by ID
 */
const getReleaseGroupById = async (id) => {
    try {
        const response = await axios_1.default.get(`${MB_BASE_URL}/release-group/${id}`, {
            params: {
                inc: 'artists+releases',
                fmt: 'json',
            },
            headers: { 'User-Agent': USER_AGENT },
        });
        const data = response.data;
        // Use optimistic URL for details page too, to avoid backend bottleneck
        const coverArtUrl = `https://coverartarchive.org/release-group/${id}/front`;
        // We need track list. Release Group doesn't have tracks. We need to pick a Release.
        // Pick the first release in the list.
        let tracks = [];
        if (data.releases && data.releases.length > 0) {
            const releaseId = data.releases[0].id;
            tracks = await getTracksForRelease(releaseId);
        }
        const transformed = transformToSpotifyFormat({
            ...data,
            images: [{ url: coverArtUrl }],
        });
        transformed.tracks = { items: tracks };
        return transformed;
    }
    catch (error) {
        console.error('Error getting MusicBrainz release group:', error);
        throw error;
    }
};
exports.getReleaseGroupById = getReleaseGroupById;
/**
 * Get tracks for a specific release
 */
const getTracksForRelease = async (releaseId) => {
    try {
        await delay(1100); // Rate limit
        const response = await axios_1.default.get(`${MB_BASE_URL}/release/${releaseId}`, {
            params: {
                inc: 'recordings',
                fmt: 'json',
            },
            headers: { 'User-Agent': USER_AGENT },
        });
        const media = response.data.media || [];
        const tracks = [];
        media.forEach((m) => {
            if (m.tracks) {
                m.tracks.forEach((t) => {
                    tracks.push({
                        id: t.id,
                        name: t.title,
                        duration_ms: t.length,
                        track_number: t.number,
                        artists: t['artist-credit']?.map((ac) => ({
                            id: ac.artist.id,
                            name: ac.artist.name,
                        })) || [],
                    });
                });
            }
        });
        return tracks;
    }
    catch (error) {
        console.error('Error getting tracks:', error);
        return [];
    }
};
/**
 * Get cover art URL from Cover Art Archive
 */
const getCoverArt = async (mbid) => {
    try {
        // Cover Art Archive doesn't strictly enforce rate limits but good to be nice
        const response = await axios_1.default.get(`${COVER_ART_BASE_URL}/release-group/${mbid}`);
        if (response.data.images && response.data.images.length > 0) {
            return response.data.images[0].image;
        }
        return null;
    }
    catch (error) {
        // 404 is common if no art exists
        return null;
    }
};
exports.getCoverArt = getCoverArt;
/**
 * Transform MusicBrainz data to match Spotify's structure partially
 * to minimize frontend breakage.
 */
const transformToSpotifyFormat = (mbItem) => {
    return {
        id: mbItem.id,
        name: mbItem.title,
        artists: mbItem['artist-credit']?.map((ac) => ({
            id: ac.artist.id,
            name: ac.artist.name,
        })) || [],
        images: mbItem.images || [],
        release_date: mbItem['first-release-date'],
        total_tracks: mbItem.count || 0,
        type: 'album',
        uri: `spotify:album:${mbItem.id}`, // Fake URI to prevent crashes if used
    };
};
/**
 * Get "New Releases" - mocked by searching for recent year
 */
const getNewReleases = async (limit = 20) => {
    const currentYear = new Date().getFullYear();
    // Search for albums from current year
    // Note: MusicBrainz search syntax is specific
    return (0, exports.searchReleaseGroups)(`date:${currentYear}`, limit);
};
exports.getNewReleases = getNewReleases;
/**
 * Search for recordings (tracks)
 */
const searchRecordings = async (query, limit = 20) => {
    try {
        const response = await axios_1.default.get(`${MB_BASE_URL}/recording`, {
            params: {
                query,
                limit,
                fmt: 'json',
            },
            headers: { 'User-Agent': USER_AGENT },
        });
        const recordings = response.data.recordings || [];
        // Transform to match Spotify track format
        return recordings.map((rec) => ({
            id: rec.id,
            name: rec.title,
            duration_ms: rec.length,
            artists: rec['artist-credit']?.map((ac) => ({
                id: ac.artist.id,
                name: ac.artist.name,
            })) || [],
            album: rec.releases?.[0]
                ? {
                    id: rec.releases[0].id,
                    name: rec.releases[0].title,
                    images: [
                        {
                            url: `https://coverartarchive.org/release/${rec.releases[0].id}/front`,
                        },
                    ],
                }
                : null,
        }));
    }
    catch (error) {
        console.error('Error searching MusicBrainz recordings:', error);
        throw error;
    }
};
exports.searchRecordings = searchRecordings;
//# sourceMappingURL=musicbrainzApi.js.map