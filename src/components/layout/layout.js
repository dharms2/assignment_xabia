import React from 'react';
import Header from './header';
import Dashboard from '../dashboard/dashboard';

const Layout = (props) => {
  return (
    <div className="App">
      <Header {...props} />
      <Dashboard {...props} />
    </div>
  );
};

export default Layout;
