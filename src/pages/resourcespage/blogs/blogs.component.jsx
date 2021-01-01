import React from 'react';
import { OverlapWithFilter } from '../../../components/essentials/overlap-box/overlap-with-filters/overlap-with-filters.component';
import { Footer } from '../../../components/essentials/footer/footer.component';
import './blogs.styles.scss';
import { NavBar } from '../../../components/essentials/navbar/navbar.component';
import moment from 'moment';
import { Pagination } from '@material-ui/lab';

export const Blogs = props => {
  const { blogs, loading, updateBlogPage } = props;

  const handleChange = (e, newPage) => {
    updateBlogPage(newPage);
  };

  return (
    <div className='blogs-main'>
      <NavBar />
      <HeaderHalf title='The Trusted Identity Blog' uris='blogs' />
      <OverlapWithFilter>
        <div className='filter-pagination'>
          <p></p>
          <Pagination
            onChange={handleChange}
            count={10}
            variant='outlined'
            shape='rounded'
            size='small'
          />
        </div>
        <div className='grid-for-blogs'>
          {loading === true ? (
            <h1>Loading the content</h1>
          ) : (
            blogs.map(blog => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                img={blog.coverImage}
                author='author'
                date={moment(blog.publishedAt).format('MMM Do YY')}
                article={blog.article}
                slug={blog.slug}
                {...props}
              />
            ))
          )}
        </div>
      </OverlapWithFilter>
      <Footer />
    </div>
  );
};

const BlogCard = props => {
  const { title, img, author, date, article, slug, history, match } = props;
  const url = 'http://127.0.0.1:3001/img/blogs/';
  return (
    <div className='blog-div'>
      <img src={`${url}${img}`} alt='anImg' className='img-for-blog' />
      <p className='blog-title'>{title}</p>
      <p className='dateAndAuth'>
        <span className='dateField'>{date}</span> |
        <span className='author-field'>posted By {author}</span>
      </p>
      <p className='article'>{article}</p>
      <button className='btn-blog' onClick={() => history.push(`${match.path}${slug}`)}>
        View Blog
      </button>
    </div>
  );
};

const HeaderHalf = ({ title, uris }) => {
  return (
    <div className='headerHalf-main-blog'>
      <div className='headerHalf-content'>
        <p className='headerHalf-title'>{title}</p>
        <p className='headerHalf-uris'>
          Solutions / <span className='uris-class'>{uris}</span>
        </p>
      </div>
    </div>
  );
};
