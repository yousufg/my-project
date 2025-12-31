export default function Hero() {
  return (
    <section className="hero bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        
        {/* Hero Image */}
        {/* <div className="hero-image flex-1">
          <img
            src="https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/banners/01.png"
            alt="Tutoring banner"
            className="w-full max-w-md mx-auto md:mx-0"
          />
        </div> */}

        {/* Text Content */}
        <div className="hero-content flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Hire the Right Tutor Today</h1>
          <p className="text-lg mb-6">Book one-on-one lessons with verified tutors in your area</p>

          <div className="hero-actions flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="btn-primary bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Hire a Tutor
            </button>

            <div className="hero-secondary text-sm text-gray-700">
              <span>Want to become a Tutor? </span>
              <a href="#" className="text-blue-600 hover:underline">Sign Up Now</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
