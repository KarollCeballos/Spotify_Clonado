import { FaSpotify, FaBell, FaUsers } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { IoSearchOutline } from 'react-icons/io5';
import { RiDownload2Line } from 'react-icons/ri';
import { LuLayoutTemplate } from "react-icons/lu";

// Importamos todos los componentes estilizados estructurados
import {
  HeaderContainer,
  SectionLeft,
  SectionCenter,
  HomeCircle,
  SearchWrapper,
  SectionRight,
  TooltipWrapper,
  AvatarContainer
} from '../styles/HeaderStyles';

const Header = () => {
  return (
    <HeaderContainer>
      {/* IZQUIERDA */}
      <SectionLeft>
        <TooltipWrapper $text="Spotify">
          <FaSpotify className="logo-icon" />
        </TooltipWrapper>
      </SectionLeft>

      {/* CENTRO */}
      <SectionCenter>
        <TooltipWrapper $text="Home">
          <HomeCircle>
            <GoHomeFill />
          </HomeCircle>
        </TooltipWrapper>
        
        <SearchWrapper>
          <IoSearchOutline size={24} />
          <input placeholder="What do you want to play?" />
          <TooltipWrapper $text="Browse">
            <div className="browse-box">
              <LuLayoutTemplate size={24} />
            </div>
          </TooltipWrapper>
        </SearchWrapper>
      </SectionCenter>

      {/* DERECHA */}
      <SectionRight>
        <button className="install-badge">
          <RiDownload2Line /> Install App
        </button>
        
        <TooltipWrapper $text="What's New">
          <div className="icon-action">
            <FaBell />
          </div>
        </TooltipWrapper>
        
        <TooltipWrapper $text="Friend Activity">
          <div className="icon-action">
            <FaUsers />
          </div>
        </TooltipWrapper>
        
        <TooltipWrapper $text="Usuario">
          <AvatarContainer src="https://i.pravatar.cc/150?u=8" />
        </TooltipWrapper>
      </SectionRight>
    </HeaderContainer>
  );
};

export default Header;