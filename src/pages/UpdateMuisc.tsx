import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BiSolidErrorCircle } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  ButtonComponent,
  ErrorComponent,
  ErrorLabel,
  FormComponent,
  InputComponent,
  InputLabelContainer,
  LabelComponent,
  ParentDiv,
  TitleComponent,
} from '../styles/CreateMusicStyles';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/musicStore';
import { updateMusicStart } from '../music/musicSlice';
import { Select } from '@chakra-ui/react';
const genereKeys = [
  'pop',
  'R&B',
  'Jazz',
  'HipHop',
  'Tizta',
  'Anchoye',
  'Bati',
  'Country',
] as const;
const musicSchema = z.object({
  mname: z
    .string()
    .min(1, { message: 'Music name must be at least 4 characters!' })
    .max(40, { message: 'Music name must not greater than 16 characters!' }),
  desc: z.string().min(1, { message: "Description can't be less than 1" }),
  genere: z.enum(genereKeys),
});
type formDataType = z.infer<typeof musicSchema>;

function UpdateMusic() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<formDataType>({
    resolver: zodResolver(musicSchema),
    defaultValues: {
      mname: '',
      desc: '',
      genere: 'pop',
    },
  });
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit: SubmitHandler<formDataType> = (data: formDataType) => {
    try {
      dispatch(updateMusicStart({ ...data, _id: location.state?._id }));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setValue('mname', location.state?.mname);
    setValue('desc', location.state?.desc);
    setValue('genere', location.state?.genere);
  }, [setValue, location]);
  const mnameChange = watch('mname');
  const descChange = watch('desc');
  return (
    <ParentDiv>
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <TitleComponent>Update Music</TitleComponent>
        <InputLabelContainer>
          <InputComponent
            hasError={errors.mname?.message}
            {...register('mname')}
            type="text"
            id="username"
          />
          <LabelComponent hasValue={mnameChange} htmlFor="username">
            Update music-Name
          </LabelComponent>
          {errors.mname && (
            <ErrorComponent>
              <BiSolidErrorCircle />
              <ErrorLabel>{errors.mname.message}</ErrorLabel>
            </ErrorComponent>
          )}
        </InputLabelContainer>
        <InputLabelContainer>
          <InputComponent
            {...register('desc')}
            hasError={errors.desc?.message}
            type="text"
            id="desc"
          />
          <LabelComponent hasValue={descChange} htmlFor="desc">
            Description
          </LabelComponent>
          {errors.desc && (
            <ErrorComponent>
              <BiSolidErrorCircle color="crimson" />
              <ErrorLabel>{errors.desc.message}</ErrorLabel>
            </ErrorComponent>
          )}
        </InputLabelContainer>
        <Select {...register('genere')} id="genere" placeholder="Genere">
          {genereKeys.map((genre) => (
            <option value={genre}>{genre}</option>
          ))}
        </Select>
        <ButtonComponent
          type="submit"
          isSubmitting={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Updating..' : 'Update'}
        </ButtonComponent>
      </FormComponent>
    </ParentDiv>
  );
}

export default UpdateMusic;
