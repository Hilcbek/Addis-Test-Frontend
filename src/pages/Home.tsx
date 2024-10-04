import TableComponent from '../components/Table';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/musicStore';
import { fetchMusicStart } from '../music/musicSlice';
import { HeaderContainer, LoaderContainer, MainContainer, TableContainer } from '../styles/HomeEmotionStyles';
export const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const { musics, isLoading } = useSelector((state: RootState) => state.music);
  useEffect(() => {
    dispatch(fetchMusicStart());
  }, [dispatch]);

  return (
    <MainContainer isThereData={musics?.length}>
      {isLoading ? (
        <LoaderContainer>Loading...</LoaderContainer>
      ) : musics?.length ? (
        <TableContainer>
          <HeaderContainer>All Musics</HeaderContainer>
          <TableComponent allMuiscs={musics} />
        </TableContainer>
      ) : (
        <h1>No data found! adds some!👋</h1>
      )}
    </MainContainer>
  );
};
