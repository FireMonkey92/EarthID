import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import { Platform } from './platformpage/platform.component';
import { Product } from './productpage/productpage.component';
import './solutionpage.styles.scss';
import { UseCase } from './use-case-page/use-case-page.component';
import { Industries } from './industriespage/industries.component';
import { CompliancePage } from './compliance-page/compliance-page.component';
import { FeaturesPage } from './features-page/features-page.component';

const SolutionPage = () => {
  let { path } = useRouteMatch();
  return (
    <div className='solutionpage'>
      <Switch>
        <Route path={`${path}/platforms`} component={Platform} />
        <Route path={`${path}/products`} component={Product} />
        <Route path={`${path}/use-case`} component={UseCase} />
        <Route path={`${path}/industries`} component={Industries} />
        <Route path={`${path}/compliance`} component={CompliancePage} />
        <Route path={`${path}/features`} component={FeaturesPage} />
      </Switch>
    </div>
  );
};

export default SolutionPage;
