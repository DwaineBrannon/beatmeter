import { useState } from 'react';

function SongCard({ song, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'none',
        boxShadow: 'none',
        border: 'none',
        margin: '0 12px'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={song.img}
        alt={song.title}
        draggable={false}
        style={{
          width: 160,
          height: 160,
          borderRadius: 16,
          boxShadow: hovered
            ? '0 0 24px 4px #48BB78'
            : '0 4px 16px 0 rgba(128, 90, 213, 0.15)',
          transition: 'box-shadow 0.3s, transform 0.3s',
          objectFit: 'cover',
        }}
      />
      <div style={{ marginTop: 12, textAlign: 'center' }}>
        <div style={{
          fontWeight: 700,
          color: '#fff',
          fontSize: 18,
          fontFamily: "'Inter', system-ui, sans-serif",
          textShadow: hovered
            ? '0 2px 8px #805AD5, 0 4px 16px #48BB78'
            : 'none',
          letterSpacing: '-0.5px',
          transition: 'text-shadow 0.3s'
        }}>
          {song.title}
        </div>
        <div style={{
          color: '#fff',
          fontSize: 15,
          fontFamily: "'Inter', system-ui, sans-serif",
          textShadow: hovered
            ? '0 2px 8px #48BB78, 0 4px 16px #805AD5'
            : 'none',
          opacity: 0.95,
          transition: 'text-shadow 0.3s'
        }}>
          {song.artist}
        </div>
      </div>
    </div>
  );
}

export default SongCard;