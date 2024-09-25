import React, { lazy, Suspense } from 'react';

// Use React.ComponentType for typing the Component
const Loadable = (Component: React.ComponentType<any>) => (props: any) => (
  <Suspense fallback={<div>ooooooooo</div>}>
    <Component {...props} />
  </Suspense>
);

// Example of lazy-loading the HomePage
export const HomePage = Loadable(lazy(() => import('../pages/Home')));
export const AboutPage = Loadable(lazy(() => import('../pages/About')));
