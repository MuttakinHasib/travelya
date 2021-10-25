import { NavBar } from '@components/NavBar';
import { FC } from 'react';
import { LandingContainer, TopSectionContainer } from './styles';

export const TopSection: FC = () => {
  return (
    <TopSectionContainer>
      <LandingContainer>
        <NavBar />
      </LandingContainer>
    </TopSectionContainer>
  );
};
