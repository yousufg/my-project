import { locations } from "../data/locations";

export default function Locations() {
  return (
    <section className="section">
      <h2 className="section-title">Live Tuition Jobs</h2>
      <div className="container tags">
        {locations.map((city, i) => (
          <span key={i} className="tag">{city}</span>
        ))}
      </div>
    </section>
  );
}
