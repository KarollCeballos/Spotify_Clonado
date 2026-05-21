import styled, { css } from 'styled-components';

// Props aceptadas: $variant ('artist' | 'album')
export const CoverImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1; /* Mantiene la imagen perfectamente cuadrada */
  object-fit: cover; /* Evita que la imagen se deforme */
  border-radius: 6px; /* Borde estándar de álbum/playlist en Spotify */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5); /* Sombra de la imagen */

  /* Si le pasamos la prop $variant="artist", se vuelve un círculo */
  ${props => props.$variant === 'artist' && css`
    border-radius: 50%;
  `}
`;