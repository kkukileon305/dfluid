import { Exo_2 } from 'next/font/google';
import { items } from '@/data';
import Item from '@/components/Item';
import FluidBackground from '@/components/FluidBackground';
import { Suspense } from 'react';
import Form from '@/components/Form';
import FluidLoading from '@/components/FluidLoading';

const titleFont = Exo_2({
  subsets: ['latin'],
});

const Page = () => {
  return (
    <>
      <section>
        <div className='px-20 pt-[120px] pb-[36px]'>
          <h2
            className={`${titleFont.className} text-5xl leading-[72px] -tracking-[0.72px]`}
          >
            Snap photos and share like <br /> never before
          </h2>
        </div>
      </section>

      <section className='px-20 pt-[34px] pb-[110px] flex gap-5'>
        {items
          .sort(() => Math.random() - 0.5)
          .map(item => (
            <Item key={item.title} item={item} />
          ))}
      </section>

      <section className='px-20 py-[152px] bg-gray-500 relative'>
        <Suspense fallback={<FluidLoading />}>
          <FluidBackground />
        </Suspense>

        <div className='relative'>
          <h4 className='font-bold text-center text-2xl mb-6 text-white'>
            Sed ut perspiciatis unde omnis
          </h4>

          <p className='text-center text-white'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary.
          </p>

          <div className='my-8 h-[1px] bg-white' />

          <p className='text-center text-[14px] text-white'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore.
          </p>

          <p
            className={`${titleFont.className} font-bold text-white text-center mt-[95px] mb-4 -tracking-[0.24px]`}
          >
            Subscribe to our newsletter
          </p>

          <Form />
        </div>
      </section>
    </>
  );
};

export default Page;
