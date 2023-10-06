import Image from 'next/image';
import Link from 'next/link';
import { Item } from '@/data';
import { Exo_2 } from 'next/font/google';

const titleFont = Exo_2({
  subsets: ['latin'],
});

const Item = async ({ item }: { item: Item }) => {
  return (
    <div key={item.title} className='flex flex-col justify-between flex-1'>
      <Image src={item.src} alt={item.alt} width={108} height={108} />

      <h4 className='font-bold text-2xl mt-10 -tracking-[0.36px]'>
        {item.title}
      </h4>
      <p className='mt-6 text-[18px] -tracking-[0.27px]'>{item.content}</p>

      <Link
        href={'/'}
        className={`${titleFont.className} font-bold block mt-6 w-fit text-[18px] text-[#18a0fb] uppercase`}
      >
        Learn more
      </Link>
    </div>
  );
};

export default Item;
