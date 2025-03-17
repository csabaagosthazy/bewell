'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Drive() {
  const { data: session } = useSession();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (session) {
      fetch('/api/drive')
        .then((response) => response.json())
        .then(setFiles)
        .catch(console.error);
    }
  }, [session]);

  return (
    <div>
      {session ? (
        <>
          <p>Welcome, {session.user.name}</p>
          <button onClick={() => signOut()}>Sign Out</button>
          <h2>Your Google Drive Files:</h2>
          <ul>
            {files.map((file) => (
              <li key={file.id}>
                {file.name} ({file.mimeType})
              </li>
            ))}
          </ul>
        </>
      ) : (
        <button onClick={() => signIn('google')}>Sign In with Google</button>
      )}
    </div>
  );
}
