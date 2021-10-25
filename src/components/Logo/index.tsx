import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const LogoContainer = styled.div`
  ${tw`
    font-family["ZCOOL XiaoWei"]
    font-black
    text-2xl
    text-white
    uppercase
  `}
`;

export const Logo: FC = () => {
  return <LogoContainer>Travelya</LogoContainer>;
};
