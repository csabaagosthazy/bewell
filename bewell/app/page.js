import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { auth } from '../auth';

import styles from './page.module.css';

import Link from 'next/link';

export async function generateMetadata() {
  const t = await getTranslations({ namespace: 'HomePage' });
  return {
    title: t('title'),
  };
}

export default async function Home() {
  const t = useTranslations('HomePage');
  const session = await auth();
  console.log('session', session);

  return (
    <div className={styles.page}>
      <div>
        <h1>{t('title')}</h1>

        <Link href='/about'>{t('about')}</Link>
        <Link href='/drive'>Drive</Link>
      </div>
    </div>
  );
}
