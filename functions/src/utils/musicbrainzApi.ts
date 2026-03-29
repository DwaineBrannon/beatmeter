import axios from 'axios';

const MB_BASE_URL = 'https://musicbrainz.org/ws/2';
const COVER_ART_BASE_URL = 'https://coverartarchive.org';
const USER_AGENT = 'BeatMeter/1.0.0 ( contact@beatmeter.com )';

// Helper to add delay to respect rate limits (1 req/sec)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface MusicBrainzImage {
  url: string;
  height: number;
  width: number;
}

export interface MusicBrainzArtist {
  id: string;
  name: string;
}

export interface MusicBrainzReleaseGroup {
  id: string;
  title: string;
  'primary-type': string;
  'first-release-date': string;
  'artist-credit': { artist: MusicBrainzArtist }[];
  images?: MusicBrainzImage[]; // We will add this manually
}

/**
 * Search for release groups (albums)
 */
export const searchReleaseGroups = async (
  query: string,
  limit: number = 20
) => {
  try {
    const response = await axios.get(`${MB_BASE_URL}/release-group`, {
      params: {
        query: `${query} AND primarytype:album`, // Filter for albums
        limit,
        fmt: 'json',
      },
      headers: { 'User-Agent': USER_AGENT },
    });

    const releaseGroups = response.data['release-groups'] || [];

    // Use optimistic Cover Art Archive URLs for all results
    // This avoids rate limits and ensures all items have a potential image
    const resultsWithArt = releaseGroups.map((rg: any) => {
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
  } catch (error) {
    console.error('Error searching MusicBrainz:', error);
    throw error;
  }
};

/**
 * Get release group details by ID
 */
export const getReleaseGroupById = async (id: string) => {
  try {
    const response = await axios.get(`${MB_BASE_URL}/release-group/${id}`, {
      params: {
        inc: 'artists+releases', // Include artists and releases
        fmt: 'json',
      },
      headers: { 'User-Agent': USER_AGENT },
    });

    const data = response.data;
    // Use optimistic URL for details page too, to avoid backend bottleneck
    const coverArtUrl = `https://coverartarchive.org/release-group/${id}/front`;

    // We need track list. Release Group doesn't have tracks. We need to pick a Release.
    // Pick the first release in the list.
    let tracks: any[] = [];
    if (data.releases && data.releases.length > 0) {
      const releaseId = data.releases[0].id;
      tracks = await getTracksForRelease(releaseId);
    }

    const transformed: any = transformToSpotifyFormat({
      ...data,
      images: [{ url: coverArtUrl }],
    });
    transformed.tracks = { items: tracks };

    return transformed;
  } catch (error) {
    console.error('Error getting MusicBrainz release group:', error);
    throw error;
  }
};

/**
 * Get tracks for a specific release
 */
const getTracksForRelease = async (releaseId: string) => {
  try {
    await delay(1100); // Rate limit
    const response = await axios.get(`${MB_BASE_URL}/release/${releaseId}`, {
      params: {
        inc: 'recordings',
        fmt: 'json',
      },
      headers: { 'User-Agent': USER_AGENT },
    });

    const media = response.data.media || [];
    const tracks: any[] = [];

    media.forEach((m: any) => {
      if (m.tracks) {
        m.tracks.forEach((t: any) => {
          tracks.push({
            id: t.id,
            name: t.title,
            duration_ms: t.length,
            track_number: t.number,
            artists:
              t['artist-credit']?.map((ac: any) => ({
                id: ac.artist.id,
                name: ac.artist.name,
              })) || [],
          });
        });
      }
    });

    return tracks;
  } catch (error) {
    console.error('Error getting tracks:', error);
    return [];
  }
};

/**
 * Get cover art URL from Cover Art Archive
 */
export const getCoverArt = async (mbid: string): Promise<string | null> => {
  try {
    // Cover Art Archive doesn't strictly enforce rate limits but good to be nice
    const response = await axios.get(
      `${COVER_ART_BASE_URL}/release-group/${mbid}`
    );
    if (response.data.images && response.data.images.length > 0) {
      return response.data.images[0].image;
    }
    return null;
  } catch (error) {
    // 404 is common if no art exists
    return null;
  }
};

/**
 * Transform MusicBrainz data to match Spotify's structure partially
 * to minimize frontend breakage.
 */
const transformToSpotifyFormat = (mbItem: any) => {
  return {
    id: mbItem.id,
    name: mbItem.title,
    artists:
      mbItem['artist-credit']?.map((ac: any) => ({
        id: ac.artist.id,
        name: ac.artist.name,
      })) || [],
    images: mbItem.images || [],
    release_date: mbItem['first-release-date'],
    total_tracks: mbItem.count || 0, // Release group doesn't always have track count
    type: 'album',
    uri: `spotify:album:${mbItem.id}`, // Fake URI to prevent crashes if used
  };
};

/**
 * Get "New Releases" - mocked by searching for recent year
 */
export const getNewReleases = async (limit: number = 20) => {
  const currentYear = new Date().getFullYear();
  // Search for albums from current year
  // Note: MusicBrainz search syntax is specific
  return searchReleaseGroups(`date:${currentYear}`, limit);
};

/**
 * Search for recordings (tracks)
 */
export const searchRecordings = async (query: string, limit: number = 20) => {
  try {
    const response = await axios.get(`${MB_BASE_URL}/recording`, {
      params: {
        query,
        limit,
        fmt: 'json',
      },
      headers: { 'User-Agent': USER_AGENT },
    });

    const recordings = response.data.recordings || [];

    // Transform to match Spotify track format
    return recordings.map((rec: any) => ({
      id: rec.id,
      name: rec.title,
      duration_ms: rec.length,
      artists:
        rec['artist-credit']?.map((ac: any) => ({
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
  } catch (error) {
    console.error('Error searching MusicBrainz recordings:', error);
    throw error;
  }
};
