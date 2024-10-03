import { GoPlus } from 'react-icons/go';
import { LinkContainer, NavBarContainer } from '../styles/NavBarStyles';

const NavBar = () => {
  return (
    <NavBarContainer>
      <LinkContainer to={'/'}>Muzonica</LinkContainer>
      <LinkContainer to={'/createMusic'}>
        <GoPlus />
        Create Music
      </LinkContainer>
    </NavBarContainer>
  );
};

export default NavBar;
