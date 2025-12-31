export default function Discounts() {
  const offers = [
    { brand: "Khaas Food", discount: "Up to 10%" },
    { brand: "Paragon Hotel & Resort", discount: "58%" },
    { brand: "Watches World", discount: "20%" },
    { brand: "Crossfit Gym", discount: "Up to 35%" },
    { brand: "Praava Health", discount: "20%" },
    { brand: "Chuti Aronnobash", discount: "Up to 40%" },
    { brand: "Grand Palace Hotel & Resorts", discount: "Up to 50%" },
  ];

  return (
    <section className="section bg-light">
      <h2 className="section-title">Exclusively Yours</h2>

      <div className="container grid">
        {offers.map((offer, i) => (
          <div key={i} className="offer-card">
            <h3>{offer.discount}</h3>
            <p>@{offer.brand}</p>
            <button className="btn-outline">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
