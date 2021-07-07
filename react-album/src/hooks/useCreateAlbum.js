import * as React from 'react';

const endpoint = `${process.env.REACT_APP_API_BASE}/album`;

const useCreateAlbum = () => {
  const createAlbum = React.useCallback((newAlbum) => {
    const doCreate = async () => {
      const request = fetch(endpoint, {
        method: 'POST', 
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newAlbum)
      });
  
      return request.then((response) => {
        if(!response.ok) {
          console.error(response.statusText);
          return;
        }
    
      
      });
    }
    
    return doCreate();
  }, []);
  
  return createAlbum;
}

export default useCreateAlbum;
