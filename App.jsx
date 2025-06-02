// import * as React from 'react';
// import {AboutScreen, BookmarkScreen, DetailScreen, GalleryScreen, Home, Onboarding, Discover, Profile} from './src/screens';
// export default function App() {
//   return <Discover   />;
// }

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/navigation/Router';
export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

