import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Categories() {
  const categories = [
    { name: "Bangla Medium", img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special%20_Child.png" },
    { name: "English Version", img:  "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special%20_Child.png" },
    { name: "English Medium", img:  "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special%20_Child.png" },
    { name: "Religious Studies", img:  "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special%20_Child.png" },
    { name: "Admission Test", img:  "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special%20_Child.png" },
    { name: "Arts", img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special%20_Child.png"},
    { name: "Language Learning", img:  "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special%20_Child.png" },
    { name: "Test Preparation", img:  "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special%20_Child.png" },
    { name: "Professional Skill Development", img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special%20_Child.png"},
    { name: "Special Skill Development", img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special%20_Child.png" },
    { name: "University Help", img:  "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special%20_Child.png" },
    { name: "Madrasa Medium", img:  "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special%20_Child.png" },
    { name: "Special Child Education", img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special%20_Child.png" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <section className="section bg-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Serving Categories</h2>

        <Slider {...settings}>
          {categories.map((cat, index) => (
            <div key={index} className="px-3">
              <div className="category-card border rounded-lg bg-white text-center flex flex-col items-center p-4 hover:shadow-lg transition-transform duration-300 hover:scale-105">
                
{/* Category Image */}
<img
  src={cat.img}
  alt={cat.name}
  className="img-fluid rounded"
  style={{
    maxHeight: '20rem',  // base height (~24 in Tailwind)
  }}
/>



                {/* Category Name */}
                <span className="mt-3 font-medium text-base text-center">{cat.name}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
