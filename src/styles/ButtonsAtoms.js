import styled, { css } from 'styled-components';

// 1. Botón de filtro (Ej: "All", "Music", "Podcasts" en la barra superior)
// Props aceptadas: active (boolean)
export const FilterButton = styled.button`
  background-color: #2a2a2a;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  font-size: 0.8125rem; /* ~13px */
  font-weight: 400;
  border-radius: 500px;
  cursor: pointer;
  white-space: nowrap;
  /* Agregamos box-shadow a la transición para que sea suave */
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #333333;
    /* Sombra oscura y difuminada para el botón negro */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6); 
  }

  /* Estado activo / seleccionado */
  ${props => props.$active && css`
    background-color: #ffffff;
    color: #000000;
    font-weight: 500;

    &:hover {
      background-color: #f6f6f6; /* Un blanco ligeramente más opaco en hover */
      /* Sombra un poco más suave porque el botón ya resalta mucho */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); 
    }
  `}
`;

// 2. Botón de icono (Ej: flechas de navegación, controles de volumen, play)
// Props aceptadas: variant ('play' | undefined)
export const IconButton = styled.button`
  background: transparent;
  color: #b3b3b3; /* Gris claro apagado por defecto */
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  transition: color 0.2s ease, background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    color: #ffffff; /* Se ilumina en blanco al pasar el mouse */
    background-color: rgba(255, 255, 255, 0.1); /* Círculo sutil de fondo */
  }

  /* Variante específica para el botón de PLAY central (el círculo blanco) */
  ${props => props.$variant === 'play' && css`
    background-color: #ffffff;
    color: #000000;
    padding: 12px;
    
    &:hover {
      background-color: #ffffff;
      color: #000000;
      transform: scale(1.06); /* Crece un poquito como en Spotify */
    }
  `}
`;

// 3. Botón de texto simple (Ej: "Show all", "About the artist")
export const TextButton = styled.button`
  background: transparent;
  color: #b3b3b3;
  border: none;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
    text-decoration: underline; /* Efecto clásico de Spotify para estos links */
  }
`;

// 4. Botón de acción específica (Ej: Corazón de Like, Shuffle, Repeat)
// Props aceptadas: active (boolean)
export const ActionButton = styled.button`
  background: transparent;
  color: ${props => props.$active ? '#1ed760' : '#b3b3b3'}; /* Verde Spotify si está activo */
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  transition: transform 0.1s ease;

  &:hover {
    color: ${props => props.$active ? '#1fdf64' : '#ffffff'};
    transform: scale(1.05);
  }
`;