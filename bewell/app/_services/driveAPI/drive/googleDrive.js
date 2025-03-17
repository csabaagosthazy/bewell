import drive from './driveAuth';

export const getFiles = async (params = {}) => {
  try {
    const res = await drive.files.list(params);
    const files = res.data.files;
    console.log('getFiles', files);

    return files;
  } catch (error) {
    console.error('Error fetching files:', error.message);
    return null;
  }
};

export const getFileById = (fileId, fields) => {
  try {
    const file = drive.files.get({ fileId, fields });
    return file;
  } catch (error) {
    console.error('Error fetching file:', error.message);
    return null;
  }
};

export const getFolders = () => {
  const query = 'mimeType="application/vnd.google-apps.folder"';
  const params = { q: query };
  return getFiles(params);
};

export const getFolderByName = async (folderName) => {
  const query = `mimeType="application/vnd.google-apps.folder" and name="${folderName}"`;
  const params = { q: query };
  return getFiles(params);
};

export const getJsonFiles = async () => {
  const query = 'mimeType="application/json"';
  const params = { q: query };
  return getFiles(params);
};

export const getJsonFileByName = async (fileName) => {
  const query = `mimeType="application/json" and name="${fileName}"`;
  const params = { q: query };
  return getFiles(params);
};

export const getFilesInFolder = async (folderName, mimeType = '') => {
  const folder = await getFolderByName(folderName);
  const folderId = folder[0].id;
  const query =
    `'${folderId}' in parents` +
    (mimeType ? ` and mimeType="${mimeType}"` : '');
  const params = { q: query };
  return getFiles(params);
};

export const getTranslation = async () => {
  return getFilesInFolder('Locales', 'application/json');
};
