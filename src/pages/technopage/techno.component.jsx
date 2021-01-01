import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import '../resourcespage/resources.styles.scss';
import { ZeroProofs } from './zero-knowledge-proof/zero-proofs.component';
import { LiveDetect } from './live-detect/live-detect.component';
import { DistributeLedger } from './distributed-ledger/distributed.component';
import { FaceBased } from './face-based/face-based.component';
import { PalmBased } from './palm-based/palm-based.component';
import { OCR } from './ocr/ocr.component';
import { AiMl } from './ai-ml/ai-ml.component';
import './techno.styles.scss';

const TechnoPage = () => {
  let { path } = useRouteMatch();
  return (
    <div className='resourcesPage'>
      <Switch>
        <Route path={`${path}/zero-knowledge-proof`} component={ZeroProofs} />
        <Route path={`${path}/liveness-detection`} component={LiveDetect} />
        <Route path={`${path}/distributed-ledger`} component={DistributeLedger} />
        <Route path={`${path}/face-based`} component={FaceBased} />
        <Route path={`${path}/palm-based`} component={PalmBased} />
        <Route path={`${path}/ocr`} component={OCR} />
        <Route path={`${path}/ai-ml`} component={AiMl} />
      </Switch>
    </div>
  );
};

export const OverlapBoxTechno = ({ img, title, children }) => {
  return (
    <div className='overlap-box-techno'>
      <img src={img} alt='phone-img' className='techno-img' />
      <div className='techno-content'>
        <p className='techno-title'>{title}</p>
        <div className='rest-para'>{children}</div>
      </div>
    </div>
  );
};

export default TechnoPage;
