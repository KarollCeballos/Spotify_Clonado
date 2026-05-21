import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: #000000;
  height: 64px;
  position: sticky;
  top: 0; 
  z-index: 100;
`;

export const SectionLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  color: white;
  font-size: 32px;
  
  .logo-icon {
    cursor: pointer;
    &:hover { color: #b3b3b3; } 
  }
`;

export const SectionCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 2;
  justify-content: center;
`;

export const HomeCircle = styled.button`
  background-color: #1f1f1f;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #2a2a2a;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #1f1f1f;
  padding: 0 16px;
  border-radius: 500px;
  width: 100%;
  max-width: 450px;
  height: 48px;
  gap: 12px;
  border: 1px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2a2a2a;
    border: 1px solid #333;
  }

  &:focus-within {
    border: 2px solid white;
    background-color: #2a2a2a;
  }

  input {
    background: transparent;
    border: none;
    color: white;
    width: 100%;
    outline: none;
    font-size: 16px;
    &::placeholder { color: #b3b3b3; }
  }

  .browse-box {
    border-left: 1px solid #333;
    padding-left: 12px;
    color: #b3b3b3;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover { color: white; }
  }
`;

export const SectionRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  flex: 1;

  .install-badge {
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: black;
    border: none;
    color: gray;
    padding: 6px 12px;
    border-radius: 500px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover { 
        color: white;
        transform: scale(1.05); }
  }

  .icon-action {
    color: #b3b3b3;
    font-size: 20px;
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
    &:hover { 
        color: white;
        transform: scale(1.05);
    }
  }

  .profile-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-image: url('https://via.placeholder.com/32');
    background-size: cover;
    border: 4px solid #1f1f1f;
    cursor: pointer;
    margin-left: 4px;
    &:hover { border-color: #2a2a2a; }
  }
`;

export const TooltipWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "${props => props.$text}";
    position: absolute;
    top: 120%; 
    left: 50%;
    transform: translateX(-50%);
    background-color: #282828; 
    color: white;
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 13px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.5);
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
`;

export const AvatarContainer = styled.div`
  width: 32px; 
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  
  background-image: url(${props => props.src || 'https://i.pravatar.cc/150?u=spotify_user'});
  background-size: cover;
  background-position: center;
  background-color: #1f1f1f;
  
  border: 4px solid #1f1f1f; 
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    border-color: #2a2a2a;
  }
`;
