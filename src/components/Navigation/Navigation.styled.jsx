import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';

export const NavigationLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-weight: bolder;
    &.active {
        color:blue
    }
`;
export const NavigationList = styled.ul`
    list-style: none;
    display: flex;
`;
export const NavigationItem = styled.li`
    margin-right: 20px
`;