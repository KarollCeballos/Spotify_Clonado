import React, { useState } from 'react';
import { 
  SidebarWrapper, 
  LibraryHeader, 
  FilterContainer, 
  SearchRow,
  ItemListContainer 
} from '../../styles/SidebarStyles';
import { FilterButton } from '../atoms/ButtonsAtoms';
import { LibraryItem } from '../molecules/LibraryItem';

export const Sidebar = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  return (
    <SidebarWrapper>
      <LibraryHeader>
        <div className="title-group" data-tooltip="Collapse Your Library">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
          </svg>
          <h2>Your Library</h2>
        </div>
        <div className="icons">
          <button aria-label="Create playlist or folder" data-tooltip="Create a playlist, folder, or jam">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
            </svg>
          </button>
          <button aria-label="Show more" data-tooltip="Expand Your Library">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M7.19 1A7.499 7.499 0 0 0 2.273 13.5l1.06-1.06a6 6 0 1 1 9.334 0l1.06 1.06A7.499 7.499 0 0 0 7.19 1zm5.49 5.01L7.19 11.5l-5.49-5.49h10.98z"></path>
            </svg>
          </button>
        </div>
      </LibraryHeader>

      <FilterContainer>
        <FilterButton $active={activeFilter === 'Playlists'} onClick={() => setActiveFilter('Playlists')}>Playlists</FilterButton>
        <FilterButton $active={activeFilter === 'Artists'} onClick={() => setActiveFilter('Artists')}>Artists</FilterButton>
        <FilterButton $active={activeFilter === 'Albums'} onClick={() => setActiveFilter('Albums')}>Albums</FilterButton>
      </FilterContainer>

      <SearchRow>
        {/* Cambiamos title por data-tooltip */}
        <button className="search-btn" data-tooltip="Search in Your Library">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
             <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
          </svg>
        </button>
        <button className="sort-btn">
          Recents
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
            <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 5.75H1v-1.5h2v1.5zm0 5.75H1V13h2v1.5z"></path>
          </svg>
        </button>
      </SearchRow>

      <ItemListContainer>
        <LibraryItem 
          imageUrl="https://misc.scdn.co/liked-songs/liked-songs-64.png"
          title="Liked Songs" 
          subtitle="Playlist • 1,276 songs" 
          isArtist={false}
          isLikedSongs={true}
          isPinned={true}
        />
        <LibraryItem 
          imageUrl="https://image-cdn-ak.spotifycdn.com/image/ab6761610000f1787e529f4ad13f86c69962cb12" 
          title="Feid" 
          subtitle="Artist" 
          isArtist={true} 
        />
        <LibraryItem 
          imageUrl="https://image-cdn-ak.spotifycdn.com/image/ab6761610000f178623538b7014238c54ceee056" 
          title="BLACKPINK" 
          subtitle="Artist" 
          isArtist={true} 
        />
        <LibraryItem 
          imageUrl="https://image-cdn-fa.spotifycdn.com/image/ab6761610000f178e6252cc367480d8fe43e711f" 
          title="Mora" 
          subtitle="Artist" 
          isArtist={true} 
        />
        <LibraryItem 
          imageUrl="https://image-cdn-ak.spotifycdn.com/image/ab6761610000f178f80ec63ea7a0ef0fba60957d"
          title="Bts" 
          subtitle="Artist" 
          isArtist={true} 
        />
        <LibraryItem 
          imageUrl="https://image-cdn-ak.spotifycdn.com/image/ab6761610000f1788d9f77411918aae4e7712efe" 
          title="Karen Méndez" 
          subtitle="Artist" 
          isArtist={true} 
        />
        <LibraryItem 
          imageUrl="https://image-cdn-ak.spotifycdn.com/image/ab6761610000f17866041ce9eb4497057cbc3496" 
          title="Karol G" 
          subtitle="Artista" 
          isArtist={true}
        />
      </ItemListContainer>
    </SidebarWrapper>
  );
};