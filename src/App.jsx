import styled from 'styled-components';

const Container = styled.div`
  background-color: #121212;
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
`;

function App() {
  return (
    <Container>
      <h1>Spotify Clone - Pronto aquí 🎵</h1>
    </Container>
  );
}

export default App;