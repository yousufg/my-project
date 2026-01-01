import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const categories = [
  {
    title: "Bangla Medium",
    image:
      "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Bangla.png",
    comment: "Primary Bangla medium books",
  },
  {
    title: "English Version",
    image:
      "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/English_Version.png",
    comment: "English version courses",
  },
  {
    title: "English Medium",
    image:
      "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/English_Medium.png",
    comment: "English medium resources",
  },
  {
    title: "Religious Studies",
    image:
      "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Arabic.png",
    comment: "Islamic education materials",
  },
  {
    title: "Admission Test",
    image:
      "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Admmission.png",
    comment: "Admission exam preparation",
  },
  {
    title: "Arts",
    image:
      "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Arts.png",
    comment: "Arts & creative subjects",
  },
  {
    title: "Language Learning",
    image:
      "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Language.png",
    comment: "Foreign language courses",
  },
  {
    title: "Test Preparation",
    image:
      "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Test_Preparation.png",
    comment: "Competitive exam prep",
  },
  {
    title: "Professional Skill Development",
    image:
      "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Professional_Skill.png",
    comment: "Career skill improvement",
  },
  {
    title: "Special Skill Development",
    image:
      "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special_Skill.png",
    comment: "Soft skills & niche learning",
  },
  {
    title: "University Help",
    image:
      "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Uni_help.png",
    comment: "University support materials",
  },
  {
    title: "Madrasa Medium",
    image:
      "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Madrasa.png",
    comment: "Madrasa curriculum",
  },
  {
    title: "Special Child Education",
    image:
      "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/category/Special%20_Child.png",
    comment: "Resources for special needs children",
  },
];

export default function Categories() {
  return (
    <section className="bg-light py-8">
      <h2 className="text-lg md:text-2xl font-bold text-center mb-6">
        Serving Categories
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={15}
        breakpoints={{
          0: { slidesPerView: 1 }, // mobile
          480: { slidesPerView: 2 }, // small phones
          768: { slidesPerView: 3 }, // tablets
          1024: { slidesPerView: 4 }, // desktop
          1280: { slidesPerView: 4 }, // large desktop
        }}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-sm p-3 text-center flex flex-col items-center hover:shadow-md transition-shadow duration-200">
              {/* Responsive image */}
              <div className="w-full flex items-center justify-center mb-2">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="rounded-lg"
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "5%", // customize radius here
                  }}
                />
              </div>

              <h2
                className="fw-bold text-black mb-1"
                style={{ fontSize: "120%" }}
              >
                {cat.title.split(" ").length >= 3
                  ? cat.title
                  : [...cat.title.split(" "), "Category", "Item"]
                      .slice(0, 3)
                      .join(" ")}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
