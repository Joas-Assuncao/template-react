import styled from "styled-components";

import themes from "../../styles/themes/common";

export const Nav = styled.nav`
    background: ${({ theme }) => theme.navBackgroundColor};
    margin: ${themes.spacing.medium} ${themes.spacing.small};
    padding: ${themes.spacing.medium};
    
    border-radius: 4px;

    a {
        display: inline-block;

        color: ${({ theme }) => theme.textColor};
        
        text-decoration: none;

        & + a {
            margin-left: ${themes.spacing.medium};
        }
    }
`;