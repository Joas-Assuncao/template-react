import styled from 'styled-components';

export default styled.article`
    display: flex;
    flex-direction: column;
    
    max-width: 100%;

    background: ${({ theme }) => theme.postBackgroundColor};

    & + article {
        margin-top: 1rem;
    }
`;