"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Link from "next/link";

const blogData = [
  {
    category: "Tips & Guides",
    title: "How to Choose the Right Skip Bin Size for Your Renovation",
    paragraph: "Picking between a 4m³ and 6m³? Here's a quick way to estimate before you book.",
    date: "3 May 2025",
    read: "4 min read",
    icon: "bi-calendar-check",
    link:"/blog-detail",
  },
  {
    category: "Sustainability",
    title: "Does Stuff Actually Get Recycled When You Hire a Skip Bin?",
    paragraph: "Picking between a 4m³ and 6m³? Here's a quick way to estimate before you book.",
    date: "18 Apr 2025",
    read: "5 min read",
    icon: "bi-recycle",
    link:"/blog-detail",
  },
  {
    category: "Tradie Tips",
    title: "3 Time-Saving Tips When Booking a Skip for a Building Job",
    paragraph: "Picking between a 4m³ and 6m³? Here's a quick way to estimate before you book.",
    date: "2 Apr 2025",
    read: "3 min read",
    icon: "bi-tools",
    link:"/blog-detail",
  },
];

export default function BlogSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      breakpoints={{
         481: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      }}
    >
      {blogData.map((blog, index) => (
        <SwiperSlide key={index}>
          <div className="blog-card">
            <div className="blog-img">
              <img src="../images/skipbin_img.png" alt="blog"  />
            </div>

            <div className="blog-body">
              <div className="blog-meta mb-3">
                <i className="bi bi-calendar3 me-1" />
                {blog.date} &nbsp;·&nbsp; {blog.read}
              </div>

              <div className="blog-cat">{blog.category}</div>
              <div className="blog-title">{blog.title}</div>
              <div className="blog-description">{blog.paragraph}</div>
              <Link href={blog.link} className="theme-btn rounded-3 mt-4 btn-sm">Read More <i class="bi bi-arrow-right"></i></Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}