'use sever';
import { Suspense } from 'react';
import About from './About';

function AboutPage() {

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <About/>
    </Suspense>
  );
}

export default AboutPage;
