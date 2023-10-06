'use client';

import { UnsplashResponse } from '@/type';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import FluidLoading from '@/components/FluidLoading';

const url =
  'https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM';

const FluidBackground = () => {
  const [image, setImage] = useState({
    url: '',
    alt: '',
    isLoaded: false,
  });

  useEffect(() => {
    (async () => {
      const localImage = localStorage.getItem('image');

      if (!localImage) {
        // 처음 입장시 localStorage 에 없을 경우
        const response = await fetch(url);

        const unsplashData = (await response.json()) as UnsplashResponse;

        localStorage.setItem('image', JSON.stringify(unsplashData));

        setImage({
          url: unsplashData.urls.regular,
          alt: unsplashData.alt_description,
          isLoaded: true,
        });

        return;
      }

      // 있는 경우
      const imageData = JSON.parse(localImage) as UnsplashResponse;
      setImage({
        url: imageData.urls.regular,
        alt: imageData.alt_description,
        isLoaded: true,
      });
    })();
  }, []);

  if (!image.isLoaded) {
    return <FluidLoading />;
  }

  return (
    <Image
      src={image.url}
      alt={image.alt}
      className='absolute left-0 top-0 w-full h-full object-cover brightness-50'
      fill
    />
  );
};

export default FluidBackground;
