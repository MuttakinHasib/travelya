import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`
    container flex h-20 pt-4 border-b-2 border-gray-200 border-opacity-50 items-center self-center
  `}
`;

export const NavItems = tw.ul`
  sm:space-x-5 list-none w-full h-auto lg:(h-full ml-20 w-auto) flex justify-center items-center 
`;

export const NavItem = tw.li`
  lg:(text-base mb-0)flex items-center justify-center
  min-h-full text-white cursor-pointer font-medium text-lg
  transition-colors transition-duration[300ms] hover:text-gray-200 box-content mb-2 
`;

export const menubar = {
  bmBurgerButton: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    right: '42px',
    top: '35px',
  },
  bmBurgerBars: {
    background: '#fff',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    width: '80%',
    height: '100%',
    top: '0px',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};
