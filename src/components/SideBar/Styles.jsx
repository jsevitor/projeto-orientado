import styled from "styled-components";
import { colors, measures } from "../../styles/Variables";

export const Container = styled.div`
  width: 95%;
  padding: 1rem;
  display: ${(props) => (props.sidebar ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  background-color: ${colors.lightGray};
  border-radius: 1rem;
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  animation: showSidebar 0.4s;

  hr {
    display: none;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    display: flex;
    position: fixed;
    top: 80px;
    left: 0;
    transform: translateX(0);
    border-radius: 0;
    height: ${measures.heightSize};
    max-width: 280px;

    hr {
      display: block;
    }
  }
`;

export const TopBox = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    display: flex;
    justify-content: end;
  }
`;

export const NavContainer = styled.nav`
  padding: 0 0.5rem;
`;

export const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;

  &:hover {
    background-color: ${colors.veryLightGray};
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
`;

export const Icon = styled.i`
  font-size: 20px;
`;

export const ItemTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

export const BottomBox = styled.div`
  display: none;

  @media (min-width: 1024px) {
    padding: 0 0.5rem;
    display: flex;
    gap: 1rem;
  }
`;
