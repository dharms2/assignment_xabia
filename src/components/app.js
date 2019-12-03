/* eslint-disable */
import React from 'react';
import Layout from './layout/layout';
import ErrorPage from './sorryPages/404_page';

const App = (props) => {
    return (
        <div>
            <Layout {...props} />
        </div>
    );
};

export default App;
