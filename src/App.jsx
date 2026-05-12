import styled from 'styled-components';
import Header from './components/Header';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #000000;
`;

const MainContent = styled.main`
  flex: 1;
  overflow-y: auto;
  background: linear-gradient(to bottom, #1e1e1e, #121212);
  padding: 20px;
  color: white;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <h1>Spotify Clone - Contenido Principal 🎵</h1>
      </MainContent>
    </AppContainer>
  );
}

export default App;