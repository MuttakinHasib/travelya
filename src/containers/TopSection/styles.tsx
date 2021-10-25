import styled from 'styled-components';
import tw from 'twin.macro';

export const TopSectionContainer = styled.div`
  ${tw`
      w-full h-screen flex
    `}
`;

export const LandingContainer = styled.div`
  ${tw`
    w-full min-h-screen flex flex-col bg-cover bg-blend-overlay
    background-image[url('/images/indonesia-high-res.jpeg'), linear-gradient(to left, #005b9c, #b1d1b148)]
    background-position[bottom 10% left]
  `}
`;
