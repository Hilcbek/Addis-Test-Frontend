import { Muisc } from '../types/type';
import { baseURL } from '../utils/connection';

export const fetchMusic = async (search: string): Promise<Muisc[]> => {
  const response = await baseURL.get<Muisc[]>(`/music`, {
    params: { search },
  });
  return response.data;
};
export const createMusic = async (
  music: Omit<Muisc, '_id'>
): Promise<Muisc> => {
  const response = await baseURL.post<Muisc>(`/music`, music);
  return response.data;
};
export const updateMusic = async (song: Muisc): Promise<Muisc> => {
  const response = await baseURL.put<Muisc>(`/music/${song._id}`, song);
  return response.data;
};

export const deleteMusic = async (id: string): Promise<string> => {
  const response = await baseURL.delete<string>(`/music/${id}`);
  return response.data;
};
