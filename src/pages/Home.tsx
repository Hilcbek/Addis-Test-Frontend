import TableComponent from '../components/Table';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/musicStore';
import { fetchMusicStart } from '../music/musicSlice';
import {
  HeaderContainer,
  InputSearch,
  InputSearchDiv,
  LoaderContainer,
  MainContainer,
  MainTitleContainer,
  TableContainer,
} from '../styles/HomeEmotionStyles';
import { BiSearch } from 'react-icons/bi';
import useSearch from '../zustand/Search-drop';
import { MdClose } from 'react-icons/md';
export const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  let [search, setSearch] = useState<string>('');
  const { musics, isLoading } = useSelector((state: RootState) => state.music);
  useEffect(() => {
    dispatch(fetchMusicStart(search));
  }, [dispatch, search]);
  let { searchDrop, closeSearch, openSearch } = useSearch();
  return (
    <MainContainer isThereData={musics?.length}>
      <HeaderContainer>All Musics</HeaderContainer>
      <MainTitleContainer>
        <InputSearchDiv dropProp={searchDrop}>
          <BiSearch size={30} />
          <InputSearch
            autoFocus={searchDrop}
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search music name..."
          ></InputSearch>
        </InputSearchDiv>
        {
          <>
            {searchDrop ? (
              <MdClose size={30} onClick={() => closeSearch()} />
            ) : (
              <BiSearch size={30} onClick={() => openSearch()} />
            )}
          </>
        }
      </MainTitleContainer>

      {isLoading ? (
        <LoaderContainer>Loading...</LoaderContainer>
      ) : musics?.length ? (
        <TableContainer>
          <TableComponent allMuiscs={musics} />
        </TableContainer>
      ) : (
        <h1>No data found!</h1>
      )}
    </MainContainer>
  );
};
