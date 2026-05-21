import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  width: 280px;
  background-color: #121212;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 8px 8px; 
  height: 100%;
  box-sizing: border-box;
`;

export const LibraryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  color: #b3b3b3;
  
  [data-tooltip] {
    position: relative;

    &::after {
      content: attr(data-tooltip);
      position: absolute;
      bottom: 130%;
      left: 50%;
      transform: translateX(-50%);
      background-color: #282828;
      color: #ffffff;
      padding: 6px 8px;
      border-radius: 4px;
      font-size: 0.8125rem;
      font-weight: 500;
      white-space: nowrap;
      box-shadow: 0 4px 12px rgba(0,0,0,0.5);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s ease 0.3s;
      pointer-events: none;
      z-index: 100;
    }

    &:hover::after {
      opacity: 1;
      visibility: visible;
    }
  }

  .title-group {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color 0.2s ease;

    h2 {
      font-size: 1rem;
      font-weight: 700;
      margin: 0;
    }

    /* 👇 ESTADO INICIAL DEL ÍCONO: Oculto y colapsado */
    svg {
      fill: currentColor;
      width: 0; 
      opacity: 0;
      transform: translateX(-10px); 
      margin-right: 0;
      transition: width 0.3s ease, opacity 0.3s ease, transform 0.3s ease, margin-right 0.3s ease;
    }

    /* 👇 ESTADO HOVER: Aparece y se desliza */
    &:hover {
      color: #ffffff;
      
      svg {
        width: 24px; 
        opacity: 1; 
        transform: translateX(0); 
        margin-right: 12px; 
      }
    }
  }

  .icons {
    display: flex;
    gap: 8px;
    
    button {
      background: transparent;
      border: none;
      color: #b3b3b3;
      cursor: pointer;
      padding: 8px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;

      &:hover {
        color: #ffffff;
        background-color: #1a1a1a;
      }
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 16px;
`;

export const SearchRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 16px 8px 8px;
  color: #b3b3b3;
  font-size: 0.875rem;

  [data-tooltip] {
    position: relative;

    &::after {
      content: attr(data-tooltip);
      position: absolute;
      bottom: 130%;
      left: 50%;
      transform: translateX(-50%);
      background-color: #282828;
      color: #ffffff;
      padding: 6px 8px;
      border-radius: 4px;
      font-size: 0.8125rem;
      font-weight: 500;
      white-space: nowrap;
      box-shadow: 0 4px 12px rgba(0,0,0,0.5);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s ease 0.3s;
      pointer-events: none;
      z-index: 100;
    }

    &:hover::after {
      opacity: 1;
      visibility: visible;
    }
  }

  .search-btn {
    background: transparent;
    border: none;
    color: #b3b3b3;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    
    &:hover {
      color: #ffffff;
      background-color: #1a1a1a;
    }

    &[data-tooltip]::after {
      left: 1px; 
      transform: none; 
    }
  }

  .sort-btn {
    background: transparent;
    border: none;
    color: #b3b3b3;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.875rem;

    &:hover {
      color: #ffffff;
      transform: scale(1.02);
    }
  }
`;

export const ItemListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 8px; 
  
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1a1a1a;
  }
`;

export const ItemImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: ${props => props.$isArtist ? '50%' : '4px'};
`;

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  .title {
    /*Liked Songs Spotify */
    color:#ffffff;
    font-size: 1rem;
    font-weight: 400;
    margin: 0 0 4px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .subtitle-row {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #b3b3b3;
    font-size: 0.8125rem;
    
    p {
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* El pin verde */
    svg {
      color: #1ed760;
      min-width: 12px;
    }
  }
`;