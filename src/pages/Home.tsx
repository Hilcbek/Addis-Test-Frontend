import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allMuiscsService, deleteMusicService } from '../redux/auth/musicSlice';
import { RootState } from '../redux/reducer';
import { MdDelete } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
type musicType = {
  _id?: string;
  mname: string;
  desc: string;
  genere: string;
};
type IdType = string;
export const Home = () => {
  const { allMusics, isLoading } = useSelector(
    (state: RootState) => state.music
  );
  const dispatch = useDispatch();
  const fetchMuisc = useCallback(async () => {
    await dispatch(allMuiscsService());
  }, [dispatch]);
  useEffect(() => {
    fetchMuisc();
  }, [dispatch, fetchMuisc]);
  const navigate = useNavigate();
  const handleUpdate = (data: musicType) => {
    navigate('/updateMusic', { state: data });
  };
  const handleDelete = async (id: IdType) => {
    const response: boolean = confirm('Are you sure you want to delete');
    if (response) {
      await dispatch(deleteMusicService(id));
    }
  };
  return (
    <div
      className={`${
        allMusics.length ? 'h-full' : 'h-[90vh]'
      } w-full gap-5 flex items-center justify-center flex-col`}
    >
      {isLoading ? (
        <ClipLoader
          color={'#000'}
          loading={isLoading}
          size={19}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : allMusics.length ? (
        <>
          <h1>All Musics</h1>
          <table className="w-full">
            <thead className="bg-rose-100 text-black h-12">
              <tr className="w-full">
                <th>Name</th>
                <th>Description</th>
                <th>Genere</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody
              className="odd:text-sky-700 w-full"
              style={{ borderCollapse: 'collapse' }}
            >
              {allMusics.map((music: musicType) => {
                return (
                  <tr
                    key={music._id}
                    className="w-full h-12 text-center odd:bg-sky-100 even:bg-rose-100"
                  >
                    <td>{music?.mname}</td>
                    <td>{music.desc}</td>
                    <td>{music.genere}</td>
                    <td className="text-center">
                      <BiEdit
                        onClick={() => handleUpdate(music)}
                        size={20}
                        className="text-[#009866] active:[1.03] hover:scale-[.98] transition-all ease-linear cursor-pointer"
                      />
                    </td>
                    <td className="text-center">
                      <MdDelete
                        onClick={() => music?._id && handleDelete(music._id)}
                        size={20}
                        className="text-[crimson] active:[1.03] hover:scale-[.98] transition-all ease-linear cursor-pointer"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <h1>There data found! adds some!👋</h1>
      )}
    </div>
  );
};
