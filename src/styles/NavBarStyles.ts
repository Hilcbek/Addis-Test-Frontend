import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const NavBarContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;
export const LinkContainer = styled(Link)`
  display: flex;
  border-radius: 10px;
  &:active {
    transform: scale(1.03);
  }
  transition: 0.2s all linear;
  &:hover {
    transform: scale(0.98);
  }
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  padding: 10px;
`;
