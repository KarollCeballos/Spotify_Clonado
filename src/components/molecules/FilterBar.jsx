import React, { useState } from 'react';
import styled from 'styled-components';
// Importamos tu átomo desde tu carpeta de estilos
import { FilterButton } from '../atoms/ButtonsAtoms'; 

const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 24px;
`;

export const FilterBar = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Music', 'Podcasts'];

  return (
    <FilterContainer>
      {filters.map((filter) => (
        <FilterButton 
          key={filter} 
          $active={activeFilter === filter}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};