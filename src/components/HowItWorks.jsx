export default function HowItWorks() {
  const steps = [
    "Submit Your Requirement",
    "Shortlist Applied Tutors",
    "Take Trial Classes",
    "Confirm Hiring",
  ];

  return (
    <section className="section bg-light">
      <h2 className="section-title">How It Works</h2>
      <div className="container grid">
        {steps.map((step, i) => (
          <div key={i} className="step-card">
            <span>{i + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
