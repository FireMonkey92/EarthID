import React, { useState, useEffect } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import './resources.styles.scss';
import { Blogs } from './blogs/blogs.component';
import { Webinars } from './webinars/webinars.component';
import { Blog } from '../../components/resources/blog.component';
import { TcoPage } from './tco/tco.component';

const ResourcesPage = () => {
  let { path } = useRouteMatch();
  //resources states.
  const [blogs, setBlogs] = useState([]);
  const [webinars, setWebinars] = useState([]);
  const [blogPage, setBlogPage] = useState(1);
  const [webinarPage, setWebinarPage] = useState(1);
  const [popupPage, setPopupPage] = useState({ show: false, url: '' });
  const [loading, setLoading] = useState(false);
  //For blogs...
  useEffect(() => {
    const fetchFunc = async () => {
      setLoading(true);
      const response = await fetch(`http://127.0.0.1:3001/api/v1/blog?limit=3&page=${blogPage}`);
      const resJson = await response.json();
      const items = resJson.data.blogs;
      setBlogs(items);
      setLoading(false);
    };

    fetchFunc();
  }, [blogPage]);

  useEffect(() => {
    const fetchFunc = async () => {
      setLoading(true);
      const response = await fetch(
        `http://127.0.0.1:3001/api/v1/webinars?limit=3&page=${webinarPage}`,
      );
      const resJson = await response.json();
      const items = resJson.data.webinars;
      setWebinars(items);
      setLoading(false);
    };

    fetchFunc();
  }, [webinarPage]);

  return (
    <div className='resourcesPage'>
      <Switch>
        <Route
          exact
          path={`${path}/blogs/`}
          render={props => (
            <Blogs blogs={blogs} updateBlogPage={setBlogPage} loading={loading} {...props} />
          )}
        />
        <Route path={`${path}/blogs/:slug`} render={props => <Blog blogs={blogs} {...props} />} />
        <Route
          path={`${path}/webinars/`}
          render={props => (
            <Webinars
              webinars={webinars}
              updatePage={setWebinarPage}
              popup={popupPage}
              setPopup={setPopupPage}
              loading={loading}
              {...props}
            />
          )}
        />
        <Route path={`${path}/tco`} component={TcoPage} />
      </Switch>
    </div>
  );
};

export default ResourcesPage;
