import React from 'react';

import GlobalStyles from './styles/global';

import Layout from './components/Layout';

export default function App() {
    // yarn add @babel/plugin-proposal-class-properties -D

    return (
        <>
            <GlobalStyles />
            <Layout />
        </>
    );
}