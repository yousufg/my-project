export default function Stats() {
  const stats = [
    { value: "467k+", label: "Active Tutors" },
    { value: "3k+", label: "Live Tuition Jobs" },
    { value: "128k+", label: "Happy Students" },
    { value: "4.8/5", label: "Average Tutor Rating" },
  ];

  return (
    <section className="stats">
      <div className="container grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <h2>{s.value}</h2>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
