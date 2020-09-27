import React from 'react';

import Navigation from './components/Navigation';

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <main>{children}</main>
        </>
    );
};

export default Layout;
