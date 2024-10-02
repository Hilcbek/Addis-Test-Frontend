import { baseURL } from '../../utils/connection';
import { musicEndPoints } from './musicEndPoints';

type musicTypes = {
  _id?: string;
  mname: string;
  desc: string;
  genere: string;
};
type IdType = string;
const createMusic = async ({ mname, desc, genere }: musicTypes) => {
  const res = await baseURL.post(musicEndPoints.musicEndpoint, {
    mname,
    desc,
    genere,
  });
  return res.data;
};

const updateMusic = async (music: musicTypes) => {
  const res = await baseURL.put(
    `${musicEndPoints.musicEndpoint}/${music?._id}`,
    music
  );
  return res.data;
};
const deleteMusic = async (id: IdType) => {
  const res = await baseURL.delete(`${musicEndPoints.musicEndpoint}/${id}`);
  return res.data;
};
const allMusics = async () => {
  const res = await baseURL.get(musicEndPoints.musicEndpoint);
  return res.data;
};
export const musicServices = {
  createMusic,
  updateMusic,
  deleteMusic,
  allMusics,
};
