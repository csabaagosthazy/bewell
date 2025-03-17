import { promises as fs } from 'fs';

const localesPathHu = 'app/_data/locales/hu.json';
const localesPathEn = 'app/_data/locales/en.json';
const localesPathDe = 'app/_data/locales/de.json';

export const openLocales = async () => {
  const hu = await fs.readFile(localesPathHu, 'utf8');
  const en = await fs.readFile(localesPathEn, 'utf8');
  //const de = await fs.stat(localesPathDe, 'utf8');

  return {
    hu,
    en,
    //de
  };
};

export const getLocalesStats = async () => {
  const hu = await fs.stat(localesPathHu, 'utf8');
  const en = await fs.stat(localesPathEn, 'utf8');
  //const de = await fs.stat(localesPathDe, 'utf8');

  return {
    hu,
    en,
    //de
  };
};

export const getLocalesByKey = async (key) => {
  const locales = await openLocales();
  const huData = JSON.parse(locales.hu);
  const enData = JSON.parse(locales.en);

  return {
    hu: huData[key],
    en: enData[key],
  };
};
