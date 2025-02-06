import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const testimonialList = [
  {
    author: {
      fullName: "Akshay Kumar",
      picture: "https://cdn.easyfrontend.com/pictures/users/user28.jpg",
      designation: "Founder / CEO",
    },
    rating: 3.5,
    description:
      "Beginning upon signs. Own I lights in itself all fifth. Winged great male they're made bring open void creeping living cattle day over. Image won't may to unto you all dry divide hath together be may divided moveth you'll firmament i rule forth man creepeth male waters were us were.",
  },
  {
    author: {
      fullName: "Raima Sen",
      picture: "https://cdn.easyfrontend.com/pictures/users/user4.jpg",
      designation: "Founder / CEO",
    },
    rating: 4,
    description:
      "Sea signs seas you're beginning. Bearing over fowl cattle first spirit sea creeping thing. Great forth moving isn't so lights thing sea upon in beast behold creature wherein us our doesn't his deep, lesser light in. Good said midst face greater the evening can't blessed deep first saw wherein own.",
  },
  {
    author: {
      fullName: "Arjun Kapur",
      picture: "https://cdn.easyfrontend.com/pictures/users/user25.jpg",
      designation: "Founder / CEO",
    },
    rating: 5,
    description:
      "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!",
  },
  {
    author: {
      fullName: "Deepika Padukone",
      picture: "https://cdn.easyfrontend.com/pictures/users/user10.jpg",
      designation: "Designer",
    },
    rating: 4.5,
    description:
      "Every bit of this service was wonderful. They made my vision come alive. Highly recommend!",
  },
  {
    author: {
      fullName: "Ranveer Singh",
      picture: "https://cdn.easyfrontend.com/pictures/users/user15.jpg",
      designation: "Actor",
    },
    rating: 5,
    description: "Absolutely outstanding! Great team and impeccable service.",
  },
];

const TestimonialCards = () => {
  return (
    <section className="ezy__testimonial11 light py-16 md:py-28 bg-gray-50 dark:bg-[#0b1727] text-gray-800 dark:text-gray-200">
      <div className="container px-6 mx-auto">
       
        <div className="flex justify-center text-center mb-10 lg:mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl leading-tight md:text-[40px] font-bold mb-4">
              Community Reviews
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Hear from our valued customers about their experience with us.
            </p>
          </div>
        </div>

        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-slider"
        >
          {testimonialList.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white dark:bg-[#1a2634] shadow-lg p-8 rounded-xl flex flex-col items-center min-h-[450px]">
               
                <div className="w-32 h-32 mb-6">
                  <img
                    src={testimonial.author.picture}
                    alt={testimonial.author.fullName}
                    className="w-full h-full rounded-full border-4 border-blue-500 object-cover"
                  />
                </div>

               
                <div className="text-center mb-4">
                  <h4 className="text-2xl font-semibold">
                    {testimonial.author.fullName}
                  </h4>
                  <p className="text-lg text-gray-500">
                    {testimonial.author.designation}
                  </p>
                </div>

                
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center line-clamp-4">
                  "{testimonial.description}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCards;
