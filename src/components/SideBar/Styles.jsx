import styled from "styled-components";
import { colors, measures } from "../../styles/Variables";

export const Container = styled.div`
    width: 95%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${colors.lightGray};
    border-radius: 1rem;
    position: absolute;
    top: 90px;
    left: 50%;
    transform: translateX(-50%);
    
    @media (min-width: 768px) {
        
    }

    @media (min-width: 1024px) {
        position: fixed;
        top: 80px;
        left: 0;
        transform: translateX(0);
        border-radius: 0;
        height: ${measures.heightSize};
        max-width: 280px;
    }
`;

export const TopBox = styled.div`
    border: 1px solid blue;
    display: none;
`;

export const NavContainer = styled.nav`
    padding: 1rem;
`;

export const MenuItems = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const MenuItem = styled.li`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Icon = styled.i`
    font-size: 20px;
`;

export const ItemTitle = styled.h3`
    font-size: 18px;
    font-weight: 500;
`;

export const BottomBox = styled.div`
    border: 1px solid orange;
    display: none;
`;

