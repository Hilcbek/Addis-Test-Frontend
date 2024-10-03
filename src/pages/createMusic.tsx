import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BiSolidErrorCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { createMusicStart } from '../music/musicSlice';
import { AppDispatch } from '../store/musicStore';
import { useDispatch } from 'react-redux';
import {
  ParentDiv,
  FormComponent,
  TitleComponent,
  InputLabelContainer,
  InputComponent,
  LabelComponent,
  ButtonComponent,
  ErrorComponent,
  ErrorLabel,
} from '../styles/CreateMusicStyles';
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
      genere: 'pop',
    },
  });
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<formDataType> = (data: formDataType) => {
    try {
      dispatch(createMusicStart(data));
      navigate('/');
    } catch (error) {
      console.log('error', error);
    }
    console.log(data);
  };
  const mnameChange = watch('mname');
  const descChange = watch('desc');

  return (
    <ParentDiv>
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <TitleComponent>Add Music</TitleComponent>
        <InputLabelContainer>
          <InputComponent
            {...register('mname')}
            hasError={errors.mname?.message}
            type="text"
            id="username"
          />
          <LabelComponent hasValue={mnameChange} htmlFor="username">
            Music-Name
          </LabelComponent>
          {errors.mname && (
            <ErrorComponent>
              <BiSolidErrorCircle color="crimson" />
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
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </Select>
        <ButtonComponent
          type="submit"
          isSubmitting={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Adding..' : 'Add'}
        </ButtonComponent>
      </FormComponent>
    </ParentDiv>
  );
}

export default CreateMusic;
