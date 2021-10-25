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

export const InfoSection = styled.div`
  ${tw`
    container max-height[90vh] h-full flex items-center justify-end
  `}
`;

export const FloatingText = styled.h1`
  ${tw`
    font-size[60px] line-height[25px] lg:(font-size[125px] line-height[90px]) flex items-center
    m-0 font-black text-white font-archivo
  `}
`;

export const OutlineText = styled.svg`
  ${tw`
    font[bold 100px Century "Archivo Narrow", Arial]
    height[100px] lg:(width[580px] height[110px]) flex overflow-hidden
  `}
  text {
    ${tw`
      max-h-full flex-1 fill[none] stroke[white] stroke-2 stroke-linejoin[round] z-50
      text-shadow[0 0 0 rgba(255,255,255,.05)] transform[translateY(71px)]
      lg:(transform[translateY(97px)])
    `}
  }
`;

export const DescriptionText = styled.p`
  ${tw`
    text-lg text-white text-opacity-80 mt-10 max-w-lg 2xl:max-w-xl
  `}
`;

export const ViewMoreButton = styled.button`
  ${tw`
    absolute bottom-8 left-1/2 -translate-x-1/2 text-white transition-colors duration-300
    hover:text-green-400 text-4xl 
  `}
`;
