import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`
    flex h-20 px-6 pt-4 border-b-2 border-gray-200 border-opacity-50 items-center self-center
  `}
`;

export const NavItems = tw.ul`
  list-none w-full h-auto lg:(h-full ml-20) flex justify-center items-center 
`;

export const NavItem = tw.li`
lg:(mr-8 text-base mb-0)flex items-center justify-center
min-h-full text-white cursor-pointer font-medium text-lg
transition-colors transition-duration[300ms] hover:text-gray-300 box-content mb-2 
`;
