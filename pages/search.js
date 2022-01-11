import { useRouter } from 'next/dist/client/router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { format } from 'date-fns';

export default function Search() {
  const router = useRouter();

  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), 'dd MMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} ${numberOfGuests} guests`} />
      <main className='flex'>
        <section className='flex-grow pt-14 px-16'>
          <p className='text-xs'>
            300+ Stays - {range} - in {location} - for {numberOfGuests} guests
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in {location}
          </h1>
          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
