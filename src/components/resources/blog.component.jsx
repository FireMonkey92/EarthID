import React from 'react';
import { HeaderHalf } from '../essentials/header/header-half-resources.component';
import { NavBar } from '../essentials/navbar/navbar.component';
import { Footer } from '../essentials/footer/footer.component';

export const Blog = ({ blogs, ...props }) => {
  console.log(blogs, props);
  let blogList = blogs.filter(blog => blog.slug === props.match.params.slug);
  const blog = blogList[0];
  const url = 'http://127.0.0.1:3001/img/blogs/';
  console.log(blog);
  return (
    <div className='blog-main-1'>
      <NavBar />
      <HeaderHalf title='the trusted identity blog' uris={`blog/${blog.title}`} />
      <div className='overlap-blog-box'>
        <h1>{blog.title}</h1>
        <p>{blog.date}</p>
        <img
          src={`${url}${blog.coverImage}`}
          alt='blogImg'
          width='50%'
          height='10%'
          className='blog-img'
        />
        <p>{blog.subject}</p>
        <p>{blog.article}</p>
      </div>
      <Footer />
    </div>
  );
};
