import Carousel from "./Carousel";

const sampleItems = [
  { img: "https://via.placeholder.com/180x180?text=1", title: "Item 1", artist: "Artist A" },
  { img: "https://via.placeholder.com/180x180?text=2", title: "Item 2", artist: "Artist B" },
  { img: "https://via.placeholder.com/180x180?text=3", title: "Item 3", artist: "Artist C" },
];

export default {
  title: "Components/Carousel",
  component: Carousel,
};

export const Default = () => (
  <Carousel
    items={sampleItems}
    renderItem={(item, idx) => (
      <div key={idx} style={{
        minWidth: 180,
        maxWidth: 200,
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        overflow: "hidden",
        textAlign: "center"
      }}>
        <img src={item.img} alt={item.title} style={{ width: "100%", height: 180, objectFit: "cover" }} />
        <div style={{ padding: 12 }}>
          <div style={{ fontWeight: "bold" }}>{item.title}</div>
          <div style={{ color: "#555" }}>{item.artist}</div>
        </div>
      </div>
    )}
  />
);