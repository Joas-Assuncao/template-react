import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    max-width: 100%;
    
    background: ${({ theme }) => theme.headerBackgroundColor};

    button {
        background: transparent;
        
        border: none;

        cursor: pointer;
    }
`;