import React, { useState } from 'react'; // <-- Importamos React y useState
import styled from 'styled-components';
import Header from '../organisms/Header'; 
import { FilterButton } from '../atoms/ButtonsAtoms';
import { Sidebar } from '../organisms/Sidebar';

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

// Contenedor para los botones para que tengan espacio entre ellos
const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

function MainApp() {
  // Iniciamos el estado en 'All' para que el primer botón empiece seleccionado (blanco).
  // Si quieres que todos empiecen negros, cambia 'All' por null
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <AppContainer>
      <Header />
      <Sidebar/>
      <MainContent>     
      </MainContent>
    </AppContainer>
  );
}

export default MainApp;