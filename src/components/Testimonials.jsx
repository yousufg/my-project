import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ariful Islam",
      role: "Engineer",
      text: "Dependable and supportive platform. Highly recommended for one-on-one lessons.",
      img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/upload/testimonial_user_image/original/LanaKhan,%20Programme%20Manager,%20ATN%20Bangla_parent_1679915333018.jpeg"
    },
    {
      name: "Zakaria Habib",
      role: "Businessman",
      text: "Safe and secure tutoring solution. Highly recommended for one-on-one lessons.",
      img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/upload/testimonial_user_image/original/LanaKhan,%20Programme%20Manager,%20ATN%20Bangla_parent_1679915333018.jpeg"
    },
    {
      name: "Nafisa Rahman",
      role: "Student",
      text: "Highly recommended for one-on-one lessons. Excellent tutors and platform support.",
      img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/upload/testimonial_user_image/original/LanaKhan,%20Programme%20Manager,%20ATN%20Bangla_parent_1679915333018.jpeg"
    }
  ];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,      // Show 2 slides at a time
  slidesToScroll: 1,    // Scroll only 1 slide per scroll
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  adaptiveHeight: true,
  responsive: [         // Optional: make it responsive for mobile
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1, // Show 1 slide on smaller screens
        slidesToScroll: 1
      }
    }
  ]
};


  return (
    <section className="section bg-gray-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What People Say</h2>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-4">
              <div className="testimonial-card bg-white rounded-2xl shadow-lg p-8 text-center max-w-md mx-auto flex flex-col items-center">
                
                {/* Avatar */}
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-blue-400">
                  <img className="block mx-auto"
                    src={t.img}
                    alt={t.name}
                    style={{ width: "30%", height: "30%",textAlign:"center",border:"2px solid green",padding:"2px", borderRadius: "50%", objectFit: "cover" }}
                  />
               

                {/* Name */}
                <strong className="block text-xl">{t.name}</strong>
                
                {/* Role */}
                <span className="text-gray-500 mb-4">{ t.role}</span>
                
                {/* Testimonial Text */}
                <p className="text-lg italic">{t.text}</p>
                 </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
