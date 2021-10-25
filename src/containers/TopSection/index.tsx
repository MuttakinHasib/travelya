import { NavBar } from '@components/NavBar';
import { BsArrowDownCircle } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { FC } from 'react';
import {
  DescriptionText,
  FloatingText,
  InfoSection,
  LandingContainer,
  OutlineText,
  TopSectionContainer,
  ViewMoreButton,
} from './styles';

export const TopSection: FC = () => {
  return (
    <TopSectionContainer>
      <LandingContainer>
        <NavBar />
        <InfoSection>
          <div>
            <FloatingText>WORLD</FloatingText>
            <FloatingText className='inline-flex'>
              OF
              <OutlineText>
                <text>PARADISE,</text>
              </OutlineText>
            </FloatingText>
            <FloatingText>INDONESIA</FloatingText>
            <DescriptionText>
              Let's explore of the third largest countries in the world, namely
              indonesia. Enjoy 3 vacation packages at competitive prices and
              strong soul.
            </DescriptionText>
            <ViewMoreButton>
              <Link to='explore'>
                <BsArrowDownCircle />
              </Link>
            </ViewMoreButton>
          </div>
        </InfoSection>
      </LandingContainer>
    </TopSectionContainer>
  );
};
