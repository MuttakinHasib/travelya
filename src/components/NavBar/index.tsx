import { Logo } from '@components/Logo';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';
import { deviceSize } from 'responsive';
import { Container, menubar, NavItem, NavItems } from './styles';

const navItems = [
  {
    name: 'Home',
    route: '/home',
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
      {isMobile && (
        <Menu right styles={menubar}>
          <NavItems>
            {navItems.map((item, index) => (
              <NavItem key={index}>
                <Link href={item.route}>
                  <a>{item.name}</a>
                </Link>
              </NavItem>
            ))}
          </NavItems>
        </Menu>
      )}
      {!isMobile && (
        <NavItems>
          {navItems.map((item, index) => (
            <NavItem key={index}>
              <Link href={item.route}>
                <a>{item.name}</a>
              </Link>
            </NavItem>
          ))}
        </NavItems>
      )}
    </Container>
  );
};
