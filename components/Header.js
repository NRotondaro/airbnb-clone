import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput('');
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
    setSearchInput('');
  };

  return (
    <header className='sticky bg-white top-0 z-50 grid grid-cols-3 items-center shadow-md p-5 md:px-10'>
      <div className='relative items-center h-10 cursor-pointer'>
        <Image
          alt='logo'
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
          onClick={() => router.push('/')}
        />
      </div>
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
          type='text'
          placeholder={placeholder || 'Start your search'}
        />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline text-center cursor-pointer'>
          Become a host
        </p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex items-center space-x-2 p-2 border-2 rounded-full'>
          <MenuIcon className='h-6 cursor-pointer' />
          <UserCircleIcon className='h-6 cursor-pointer' />
        </div>
      </div>

      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto mt-2'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>
              Number of Guests
            </h2>

            <UsersIcon className='h-5' />
            <input
              min={1}
              type='number'
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              className='w-12 pl-2 text-lg text-red-400 outline-none'
            />
          </div>
          <div className='flex justify-around'>
            <button className='text-gray-500' onClick={resetInput}>
              Cancel
            </button>
            <button onClick={search} className='text-red-400'>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
