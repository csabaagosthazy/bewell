'use client';

import { useTransition } from 'react';
import { setUserLocale, getUserLocale } from '../../_i18n/service';
import hun from '../../_data/images/hun.png';
import eng from '../../_data/images/eng.png';
import Image from 'next/image';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();

  const handleClick = (e, locale) => {
    e.preventDefault();
    getUserLocale().then((curLocale) => {
      console.log('LanguageSwitcher', curLocale);
      if (curLocale !== locale) {
        startTransition(() => {
          setUserLocale(locale);
        });
      }
    });
  };

  return (
    <div className='flags text-center'>
      <button
        className='flag-button'
        onClick={(e) => handleClick(e, 'hu')}
        disabled={isPending}
      >
        <Image
          className='m-1 rounded border flag-img'
          src={hun}
          alt='hun.JPG'
        />
      </button>
      <button
        className='flag-button'
        onClick={(e) => handleClick(e, 'en')}
        disabled={isPending}
      >
        <Image
          className='m-1 rounded border flag-img'
          src={eng}
          alt='eng.JPG'
        />
      </button>
    </div>
  );
}
