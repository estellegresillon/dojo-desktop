import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'assets/styles/base.scss';
import Menu from 'components/common/Menu/Menu';
import Home from 'components/Home/Home';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Menu />
      <Home />
    </React.Fragment>
  </BrowserRouter>
);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
