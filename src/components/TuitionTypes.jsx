export default function TuitionTypes() {
  const types = [
    { title: "Home Tutoring", desc: "Learn at your own home." },
    { title: "Group Tutoring", desc: "Affordable group learning." },
    { title: "Online Tutoring", desc: "Learn from anywhere." },
    { title: "Package Tutoring", desc: "Time-bound learning plans." },
    { title: "Shadow Tutoring", desc: "Daily academic assistance." },
  ];

  return (
    <section className="section">
      <h2 className="section-title">Tuition Types</h2>
      <div className="container grid">
        {types.map((t, i) => (
          <div key={i} className="card">
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
