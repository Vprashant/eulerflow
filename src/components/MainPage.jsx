import React, { useEffect } from "react";

import PriceSection from "../mainpage_sections/PriceSection";
import TestimonialSection from "../mainpage_sections/TestimonialSection";
import AppFeature from "../mainpage_sections/AppFeature";
import AppAbout from "@/mainpage_sections/AppAbout";
// import AppBrand from "@/mainpage_sections/AppBrand";
import AppContact from "@/mainpage_sections/AppContact";
import AppFAQ from "@/mainpage_sections/AppFAQ";
import AppCTA from "@/mainpage_sections/AppCTA";
import AppNavbar from "@/mainpage_sections/AppNavbar";
import AppHeader from "@/mainpage_sections/AppHeader";
import AppFooter from "@/mainpage_sections/AppFooter";
import AppBlog from "@/mainpage_sections/AppBlog";
import "../assets/css/tailwind-loading.css"
import "../assets/css/animate.css"
import "../assets/css/swiper-bundle.min.css"

const MainPage = () => {
  useEffect(() => {
    // Function to dynamically load scripts sequentially
    const loadScript = (src, onLoad) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
          if (onLoad) onLoad();
          resolve();
        };
        script.onerror = (error) => reject(error);
        script.async = true;
        document.body.appendChild(script);
      });
    };

    // Load WOW.js script first
    loadScript("/assets/js/wow.min.js", () => {
      // Once WOW.js script is loaded, initialize WOW
      new window.WOW().init();
    })
      .then(() => {
        // After WOW.js is loaded, load and execute main.js
        return loadScript("/assets/js/main.js");
      })
      .catch((error) => {
        console.error("Error loading script:", error);
      });

    // Load Swiper script and initialize Swiper once the script is loaded
    loadScript("/assets/js/swiper-bundle.min.js", () => {
      new window.Swiper(".testimonial-carousel", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });
    });

    // Load custom main.js script for other functionalities
    loadScript("/src/assets/js/main.js")
      .then(() => {
        // Additional initialization code for main.js
        // For example, you can place onScroll function and other logic here
      })
      .catch((error) => {
        console.error("Error loading script:", error);
      });
  }, []);

  return (
    <>
      <AppNavbar />
      <main>
        <AppHeader />
        <AppFeature />
        <AppAbout />
        <AppCTA />
        <PriceSection />
        <TestimonialSection />
        <AppFAQ />
        {/* <AppBlog/> */}
        <AppContact />
        {/* <AppBrand /> */}
      </main>
      <AppFooter/>
      <a
        href="javascript:void(0)"
        className="back-to-top fixed bottom-8 left-auto right-8 z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
      >
        <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
      </a>
    </>
  );
};

export default MainPage;
