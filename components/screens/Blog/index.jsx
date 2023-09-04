import { useState, useEffect } from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6"
import Navbar from "@/components/common/Navbar"
import FooterComponent from "@/components/common/Footer";
import RightStickBar from "@/components/common/RightStickBar"
import { archive, blogList, recentPosts } from "service/constants/blog"
import classes from "./blog.module.scss"

export default function BlogComponent() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
      setIsClient(true)
    }, [])

    const renderBlog = (blog, index) => (
      <div
        key={`blog_${index}`}
        className={`col-lg-5 col-md-5 col-sm-12 col-xs-12 ${classes.mainblogcart}`}
      >
        <div className={classes.blogdiv}>
          <a>
            <Image
              src={blog.uri}
              className={`img-fluid d-block me-auto ms-auto`}
              alt="blog images"
            />
            <ul>
              <li>
                <FaUser className={classes.userIcon}/>&nbsp;{blog.by}
              </li>
              <li><FaRegCalendarDays className={classes.calendarIcon}/>&nbsp;{blog.date}</li>
            </ul>
            <div className={classes.wraptitle}>
                <p className={classes.title} href="">{blog.title}</p>
            </div>
            <p className={classes.desc}>{blog.desc}</p>
          </a>
        </div>
      </div>
    );

    return (
      <div className={classes.blog}>
        <RightStickBar />
        <Navbar />
        <div className={classes.banner}>
          <div className={classes.container}>
            <div className={classes.bannerHeader}>
              <h3>Our latest news...</h3>
              <h1>Blogs</h1>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className="row">
            <div
              className={`col-lg-8 col-md-8 col-sm-6 col-xs-12 ${classes.leftblog}`}
            >
              <div className="row">{blogList.map(renderBlog)}</div>
              <div className={classes.paginationblog}>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
}