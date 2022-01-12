import Image from 'next/image';

export const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className='flex'>
      <div className='relative h-24 w-40'>
        <Image alt='info-card' src={img} layout='fill' objectFit='cover' />
      </div>
      <div>Hello</div>
    </div>
  );
};
