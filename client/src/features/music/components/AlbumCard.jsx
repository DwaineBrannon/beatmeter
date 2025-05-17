function AlbumCard({ album }) {
  return (
    <div style={{
      minWidth: 180,
      maxWidth: 200,
      background: "#1a1a1a",
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
          color: "#fff"
        }}>{album.title}</div>
        <div style={{
          color: "rgba(255,255,255,0.7)"
        }}>{album.artist}</div>
      </div>
    </div>
  );
}

export default AlbumCard;