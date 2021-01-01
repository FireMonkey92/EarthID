import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import '../resourcespage/resources.styles.scss';
import { LatestNews } from './news/news.componenet';
import { PartnerPage } from './partners/partners.component';
import { AboutEarthId } from './earthid/about-earthid.component';

const AboutPage = () => {
  let { path } = useRouteMatch();
  return (
    <div className='resourcesPage'>
      <Switch>
        <Route path={`${path}/latest-news`} component={LatestNews} />
        <Route path={`${path}/partners`} component={PartnerPage} />
        <Route path={`${path}/company`} component={AboutEarthId} />
      </Switch>
    </div>
  );
};

export default AboutPage;
