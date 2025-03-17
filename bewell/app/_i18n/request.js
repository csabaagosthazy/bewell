import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from './service';
import { getTranslation } from '../_services/driveAPI/drive/googleDrive';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();
  const data = await getTranslation();
  console.log('getRequestConfig', data);

  return {
    locale,
    messages: (await import(`../_data/locales/${locale}.json`)).default,
  };
});
