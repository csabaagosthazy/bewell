import { getFileById } from '../_services/driveAPI/drive/googleDrive';
import { getLocalesByKey } from '../_services/files/locales';

export const Files = async () => {
  //const data = await getData();
  //console.log('Files', data);
  const locale = 'en';
  const file = await getFileById(
    '1rc0p0DPnCpmCF-QFzIyboawSlbUrH4wH',
    'version, name',
  );
  const locales = await getLocalesByKey('HomePage');
  console.log('Locales', locales);
  console.log('Files', file);
  return <h1>Files</h1>;
};

export default Files;
