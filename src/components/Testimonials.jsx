import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Ariful Islam",
    role: "Engineer",
    location: "Khilkhet, Dhaka",
    text: "They are dependable and supportive at all times. They really help me in finding the best tutor. This platform has gained my 100% satisfaction. About their service, I'll recommend everyone.",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/upload/testimonial_user_image/original/ArifulIslam, Engineer _parent_1666774318672.jpeg"
  },
  {
    name: "Zakaria Habib",
    role: "Businessman",
    location: "Anderkilla, Chattogram",
    text: "I found this platform very safe & secure. I've already got three tutors by using this platform and feeling like they are being part of our family. Best wishes to the Caretutors family.",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/upload/testimonial_user_image/original/ZakariaHabib, Businessman_parent_1677499278156.jpeg"
  },
  {
    name: "Afsana Akter Rupa",
    role: "Service Holder",
    location: "Shahjadpur, Dhaka",
    text: "My experience with Caretutors has always been very good. Through this platform I found good tutors according to my needs. Thanks to Caretutors.",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/upload/testimonial_user_image/original/AfsanaAkter Rupa, Private Service Holder_parent_1689503452095.jpeg"
  },
  {
    name: "Md. Ashrafuzzaman",
    role: "Service Holder",
    location: "Khilkhet, Dhaka",
    text: "I really appreciate the initiative taken by Caretutors. I'm currently going with two tutors whom I found through Caretutors. Both of them are caring & sincere. Besides, Birthday greetings from Caretutors made us so happy. I wish their successful effort.",
    img: "https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/upload/testimonial_user_image/original/Md.Ashrafuzzaman, Government Service Holder_parent_1689503381032.jpeg"
  }
];

const QuoteIcon = ({ size = "40px", color = "#0675c1" }) => (
  <svg 
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth="0" 
    viewBox="0 0 512 512" 
    height="1em" 
    width="1em" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ 
      width: size, 
      height: size,
      color: color
    }}
  >
    <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
  </svg>
);

export default function Testimonials() {
  const swiperRef = useRef(null);
  const primaryColor = "#0675c1";
  
  return (
    <section className="section bg-light">
      <div className="container">
        <h2 className="section-title text-center mb-5">What People Say</h2>
        
        <div className="position-relative">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            speed={600}
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="row justify-content-center">
                  <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                    <div className="card testimonial-card border-0 shadow-lg">
                      <div className="card-body p-4 p-md-5">
                        {/* User Info Section */}
                        <div className="row align-items-center mb-4">
                          <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
                            <div className="position-relative d-inline-block">
                              <img
                                src={testimonial.img}
                                alt={testimonial.name}
                                className="rounded-circle img-fluid"
                                style={{
                                  width: "120px",
                                  height: "120px",
                                  objectFit: "cover",
                                  border: `4px solid ${primaryColor}`
                                }}
                                loading="lazy"
                              />
                            </div>
                          </div>
                          
                          <div className="col-12 col-md-8 text-center text-md-start">
                            <h3 className="h4 fw-bold mb-2 text-primary">
                              {testimonial.name}
                            </h3>
                            <p className="mb-2 text-primary">
                              {testimonial.role}
                            </p>
                            <p className="mb-0 text-muted">
                              <i className="fas fa-map-marker-alt me-2"></i>
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                        
                        {/* Quote Icon */}
                        <div className="text-center mb-4">
                          <QuoteIcon size="40px" color={primaryColor} />
                        </div>
                        
                        {/* Testimonial Text */}
                        <div className="mb-4">
                          <p className="text-center px-0 px-md-3 fst-italic fs-5">
                            "{testimonial.text}"
                          </p>
                        </div>
                        
                        {/* Rating */}
                        <div className="text-center">
                          <div className="mb-2">
                            {[...Array(5)].map((_, i) => (
                              <i 
                                key={i}
                                className="fas fa-star mx-1 text-warning"
                                style={{ fontSize: "1.2rem" }}
                              ></i>
                            ))}
                          </div>
                          <span className="text-muted">
                            Verified Customer • 5.0 Rating
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Desktop Navigation Arrows */}
          <div className="d-none d-lg-flex align-items-center justify-content-between position-absolute top-50 start-0 end-0"
            style={{ 
              height: "0",
              zIndex: 10,
              transform: "translateY(-50%)"
            }}
          >
            <button
              className="btn btn-light rounded-circle shadow-sm border-0"
              style={{
                width: "50px",
                height: "50px"
              }}
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="btn btn-light rounded-circle shadow-sm border-0"
              style={{
                width: "50px",
                height: "50px"
              }}
              onClick={() => swiperRef.current?.swiper?.slideNext()}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="d-flex justify-content-center mt-4">
          <div className="swiper-pagination position-relative"></div>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="d-flex d-lg-none justify-content-center align-items-center mt-4 gap-3">
          <button
            className="btn btn-outline-primary rounded-circle"
            style={{ width: "45px", height: "45px" }}
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="btn btn-outline-primary rounded-circle"
            style={{ width: "45px", height: "45px" }}
            onClick={() => swiperRef.current?.swiper?.slideNext()}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}