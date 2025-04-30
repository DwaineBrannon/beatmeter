import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import Carousel from "../Components/Carousel";

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
      <h2 style={{ marginLeft: 32 }}>Popular this week!</h2>
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
      <div key={idx} style={{
        minWidth: 180,
        maxWidth: 200,
        background: "#1a1a1a", // Dark background
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        overflow: "hidden",
        textAlign: "center",
        margin: "0 12px"
      }}>
        <img src={album.img} alt={album.title} style={{ width: "100%", height: 180, objectFit: "cover" }} />
        <div style={{ padding: 12 }}>
          <div style={{ 
            fontWeight: "bold",
            color: "#fff" // White text
          }}>{album.title}</div>
          <div style={{ 
            color: "rgba(255,255,255,0.7)" // Semi-transparent white
          }}>{album.artist}</div>
        </div>
      </div>
    )}
  />
</div>

      {/* Popular Songs Carousel */}
      <h2 style={{ marginLeft: 32, marginTop: 40 }}>Popular songs this week</h2>
      <Carousel
        items={songs}
        renderItem={(song, idx) => (
          <div key={idx} style={{
            minWidth: 180,
            maxWidth: 200,
            background: "#1a1a1a", // Dark background
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            overflow: "hidden",
            textAlign: "center"
          }}>
            <img src={song.img} alt={song.title} style={{ width: "100%", height: 180, objectFit: "cover" }} />
            <div style={{ padding: 12 }}>
              <div style={{ 
                fontWeight: "bold",
                color: "#fff" // White text
              }}>{song.title}</div>
              <div style={{ 
                color: "rgba(255,255,255,0.7)" // Semi-transparent white
              }}>{song.artist}</div>
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default Home;