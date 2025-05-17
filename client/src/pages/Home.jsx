import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../features/common/components/NavBar";
import Carousel from "../features/common/components/Carousel";
import AlbumCard from "../features/music/components/AlbumCard";
import SongCard from "../features/music/components/SongCard";

function Home() {
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const res = await axios.get("http://localhost:3001/api/spotify/top-albums");
      setAlbums(res.data.albums);
    };

    const fetchSongs = async () => {
      const res = await axios.get("http://localhost:3001/api/spotify/top-songs");
      setSongs(res.data.songs);
    };

    fetchAlbums();
    fetchSongs();
  }, []);

  return (
    <div>
      <NavBar />
      <div style={{
        height: 320,
        background: "#222",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 32,
        position: "relative"
      }}>
        <div style={{
          background: "rgba(74, 144, 182, 0.04)",
          color: "#fff",
          padding: "32px 48px",
          borderRadius: 16,
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          boxShadow: "0 4px 24px rgba(0,0,0,0.3)"
        }}>
          Track your favorite music.<br />
          Rate your favorite music.<br />
          Show off your taste.
        </div>
      </div>

      {/* Top Albums Carousel */}
      {/*header that shows "Top Albums" on the left side of the page, above the carousel*/} 
      <h2 style={{ marginLeft: 32 }}>Top Albums</h2>
      {/* Carousel for albums */}
      {/* The carousel should be full width and centered on the page */}
      <div style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        overflow: "hidden"
      }}>
        <Carousel
          items={albums}
          renderItem={(album, idx) => (
            <AlbumCard key={idx} album={album} />
          )}
        />
      </div>

      {/* Popular Songs Carousel */}
      <h2 style={{ marginLeft: 32, marginTop: 40 }}>Top Songs</h2>
      <div style={{ 
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        overflow: "hidden" 
      }}>
        <Carousel
          items={songs}
          renderItem={(song, idx) => (
            <SongCard key={idx} song={song} />
          )}
        />
      </div>
    </div>
  );
}

export default Home;