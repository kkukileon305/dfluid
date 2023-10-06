'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';

type FormValues = {
  email: string;
};

const Form = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm<FormValues>({
    mode: 'all',
    defaultValues: {
      email: '',
    },
  });

  const isEmpty = watch('email').length === 0;
  const isPatternError = errors.email?.type === 'pattern';

  const borderClasses = {
    true: 'border-[#ff6633]',
    false: isEmpty ? 'border-white' : 'border-[#00c300]',
  };

  const borderClass = borderClasses[isPatternError ? 'true' : 'false'];

  const onSubmit: SubmitHandler<FormValues> = values => {
    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`w-[500px] h-[50px] relative border rounded-[7px] mx-auto backdrop-blur-[10px] p-1 pr-[10px] flex gap-2 ${borderClass}`}
    >
      <input
        className='w-full bg-transparent -tracking-[0.24px] px-3 text-white placeholder:text-white'
        type='text'
        {...register('email', {
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Please enter a valid email!',
          },
          required: 'Please enter your email!',
        })}
        placeholder='Enter your email'
      />

      <button type='submit' disabled={!isValid}>
        <Image
          src={'/icons/paper-plane@3x.png'}
          alt='submit button'
          width={32}
          height={32}
          className={`transition ${isValid ? 'opacity-100' : 'opacity-50'}`}
        />
      </button>

      {errors.email?.type === 'pattern' && (
        <p className='absolute top-[calc(100%+9px)] left-4 text-[#ff6633]'>
          {errors.email.message}
        </p>
      )}
    </form>
  );
};

export default Form;
