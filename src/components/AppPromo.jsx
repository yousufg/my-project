export default function AppPromo() {
  return (
    <section className="app-promo">
      <div className="container promo-grid">
        <div>
          <h2>1 Platform for All Tutors</h2>
          <p>Download our app and manage tutoring easily</p>
          <div className="store-buttons">
            <button className="btn-primary">Play Store</button>
            <button className="btn-outline">App Store</button>
          </div>
        </div>

        <div className="qr-box">
          <div className="qr-placeholder">QR CODE</div>
        </div>
      </div>
    </section>
  );
}
