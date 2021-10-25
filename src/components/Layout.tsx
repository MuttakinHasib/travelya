import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const AppContainer = styled.div`
  ${tw`
    w-full h-full flex
  `}
`;

const Layout: FC = ({ children }) => {
  return <AppContainer>{children}</AppContainer>;
};

export default Layout;
