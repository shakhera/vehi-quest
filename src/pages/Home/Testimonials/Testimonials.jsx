import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const result = await axios("/testimonials.json");
      setTestimonials(result.data);
    };
    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show two testimonials at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="container mx-auto p-4 mb-12">
      <h2 className="text-3xl mb-4 font-semibold text-center">
        || Customer Testimonials ||
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="border p-4 flex flex-col items-center text-center"
          >
            <h3 className="text-xl">{testimonial.name}</h3>
            <p className="mt-2">{testimonial.testimonial}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
