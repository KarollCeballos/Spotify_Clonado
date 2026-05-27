import styled from 'styled-components';

// Título de sección (Ej: "Made For karoll", "Recommended Stations")
export const SectionTitle = styled.h2`
  color: #ffffff;
  font-size: 1.5rem; /* ~24px */
  font-weight: 700;
  margin: 0 0 16px 0;
  letter-spacing: -0.04em; /* Spotify junta un poco las letras en los títulos */
`;

// Título principal de la tarjeta (Nombre de la playlist o canción)
export const CardTitle = styled.h3`
  color: #ffffff;
  font-size: 1rem; /* 16px */
  font-weight: 700;
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Pone "..." si el texto es muy largo */
`;

// Texto secundario (Nombres de artistas, "Daily Mix 1", etc.)
export const CardDescription = styled.p`
  color: #b3b3b3;
  font-size: 0.875rem; /* 14px */
  font-weight: 400;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limita a 2 líneas y pone "..." */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;