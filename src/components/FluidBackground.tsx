import { UnsplashResponse } from '@/type';
import Image from 'next/image';

const url =
  'https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM';

const FluidBackground = async () => {
  const response = await fetch(url);

  const unsplashData = (await response.json()) as UnsplashResponse;

  return (
    <Image
      src={unsplashData.urls.regular}
      alt={unsplashData.alt_description}
      className='absolute left-0 top-0 w-full h-full object-cover brightness-50'
      fill
    />
  );
};

export default FluidBackground;
