import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ToggleThemeContext } from '../../contexts/ToggleThemeContext';

import { Container } from './styles';

export default function Header() {
    const { theme, handleToggleTheme } = useContext(ToggleThemeContext);

    const history = useHistory();
    
    function handleNavigate() {
        history.push('/');
    }

    return (
        <Container
            style={{
                margin: 8,
                padding: 24,
                borderRadius: '10px',
            }}
        >
            <h1>JStack's Blog</h1>
            <button onClick={handleNavigate} style={{color: '#FFF'}}>
                Voltar para a Home
            </button>
            <button
                type="button"
                onClick={handleToggleTheme}
            >
                {theme === 'dark' ? '🌞' : '🌚'}
            </button>
        </Container>
    );
}