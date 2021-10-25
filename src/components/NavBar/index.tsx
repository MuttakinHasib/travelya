import { Logo } from '@components/Logo';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from 'responsive';
import { Container } from './styles';

const navItems = [
  {
    name: 'Home',
    route: '/Home',
  },
  {
    name: 'Explore',
    route: '/explore',
  },
  {
    name: 'Travel Places',
    route: '/travel-places',
  },
];

export const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <Container>
      <Logo />
      {isMobile ? : }
    </Container>
  );
};
