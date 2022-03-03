import React, { useRef } from 'react';

import GlobalStyles from './styles/global';

import ToggleThemeProvider from './contexts/ToggleThemeContext';

import Layout from './components/Layout';

export default function App() {
    // yarn add @babel/plugin-proposal-class-properties -D

    return (
        <ToggleThemeProvider>
            <GlobalStyles />
            <Layout />
        </ToggleThemeProvider>
    );
}