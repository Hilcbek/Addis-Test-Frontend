import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BiSolidErrorCircle } from 'react-icons/bi';
import { createMusic } from '../redux/auth/musicSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../redux/reducer';
const musicSchema = z.object({
  mname: z
    .string()
    .min(1, { message: 'Music name must be at least 4 characters!' })
    .max(40, { message: 'Music name must not greater than 16 characters!' }),
  desc: z.string().min(1, { message: "Description can't be less than 1" }),
  genere: z
    .string()
    .min(1, { message: "Genere can't be less than 1" })
    .max(30, { message: "Genere can't be more than 30" }),
});
type formDataType = z.infer<typeof musicSchema>;

function CreateMusic() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<formDataType>({
    resolver: zodResolver(musicSchema),
    defaultValues: {
      mname: '',
      desc: '',
      genere: '',
    },
  });
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<formDataType> = async (data: formDataType) => {
    try {
      const res = await dispatch(createMusic(data));
      if (res.meta.requestStatus === 'rejected') return;
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const mnameChange = watch('mname');
  const descChange = watch('desc');
  const genereChange = watch('genere');
  return (
    <div className="w-full flex items-center justify-center h-[90vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-md shadow-gray-300 rounded-md p-5 flex items-start justify-start flex-col gap-3"
      >
        <h1 className="text-xl font-bold">Add Music</h1>
        <div className="w-full flex items-start justify-start flex-col gap-2 relative">
          <input
            {...register('mname')}
            type="text"
            className={`${
              errors.mname ? 'border-rose-500' : 'border-gray-300'
            } p-4 peer rounded-md border-solid text-sm border-[1px] w-full outline-none focus:border-gray-400`}
            id="username"
          />
          <label
            className={`${
              mnameChange && '-translate-y-4 scale-[.8]'
            } text-sm text-gray-700 absolute top-4 left-3 peer-focus:scale-[.8] peer-focus:-translate-y-4 transition-all ease-linear duration-300`}
            htmlFor="username"
          >
            Music-Name
          </label>
          {errors.mname && (
            <div className="flex items-center justify-start gap-1 text-rose-700">
              <BiSolidErrorCircle />
              <p className="text-xs z-50 font-bold">{errors.mname.message}</p>
            </div>
          )}
        </div>
        <div className="w-full flex items-start justify-start flex-col gap-2 relative">
          <input
            {...register('desc')}
            type="text"
            className={`${
              errors.desc ? 'border-rose-500' : 'border-gray-300'
            } p-4 peer rounded-md border-solid text-sm border-[1px] w-full outline-none focus:border-gray-400`}
            id="email"
          />
          <label
            className={`${
              descChange && '-translate-y-4 scale-[.8]'
            } text-sm text-gray-700 absolute top-4 left-3 peer-focus:scale-[.8] peer-focus:-translate-y-4 transition-all ease-linear duration-300`}
            htmlFor="email"
          >
            Description
          </label>
          {errors.desc && (
            <div className="flex items-center justify-start gap-1 text-rose-700">
              <BiSolidErrorCircle />
              <p className="text-xs z-50 font-bold">{errors.desc.message}</p>
            </div>
          )}
        </div>
        <div className="w-full flex items-start justify-start flex-col gap-2 relative">
          <input
            {...register('genere')}
            type="text"
            className={`${
              errors.genere ? 'border-rose-500' : 'border-gray-300'
            } p-4 peer rounded-md border-solid text-sm border-[1px] w-full outline-none focus:border-gray-400`}
            id="password"
          />
          <label
            className={`${
              genereChange && '-translate-y-4 scale-[.8]'
            } text-sm text-gray-700 absolute top-4 left-3 peer-focus:scale-[.8] peer-focus:-translate-y-4 transition-all ease-linear duration-300`}
            htmlFor="password"
          >
            Genere
          </label>
          {errors.genere && (
            <div className="flex items-center justify-start gap-1 text-rose-700">
              <BiSolidErrorCircle />
              <p className="text-xs z-50 font-bold">{errors.genere.message}</p>
            </div>
          )}
        </div>
        <button
          disabled={isSubmitting}
          className="p-3 bg-black active:scale-[1.02] hover:scale-[.99] transition-all ease-linear duration-200 cursor-pointer text-white rounded-md w-full"
          type="submit"
        >
          {isSubmitting ? 'Adding..' : 'Add'}
        </button>
      </form>
    </div>
  );
}

export default CreateMusic;
