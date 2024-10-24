import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import ToggleSwitch from './components/ToggleSwitch';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

const CardsSection = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export default function App() {
  const [isPrivate, setIsPrivate] = useState(false);

  const togglePrivate = () => setIsPrivate(!isPrivate);

  return (
    <PageWrapper>
      <GlobalStyles />
      <Header />
      <ContentWrapper>
        <Sidebar />
        <div>
          <ToggleSwitch isPrivate={isPrivate} onToggle={togglePrivate} />
          <CardsSection>
            <Card content="New air routes..." author="Gregory Watkins" />
            <Card content="Cheap flights in..." author="Gregory Watkins" />
          </CardsSection>
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
}
