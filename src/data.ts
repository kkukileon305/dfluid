export type Item = {
  title: string;
  content: string;
  src: string;
  alt: string;
};

export const items: Item[] = [
  {
    title: 'Sed ut perspiciatis',
    content:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
    src: '/images/first@3x.png',
    alt: 'first image',
  },
  {
    title: 'Lorem ipsum dolor',
    content:
      'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.',
    src: '/images/second@3x.png',
    alt: 'second image',
  },
  {
    title: 'Nemo enim ipsam',
    content:
      'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.',
    src: '/images/third@3x.png',
    alt: 'third image',
  },
];
