import * as React from "react";

const endpoint = `${process.env.REACT_APP_API_BASE}/album`;

const useAlbums = () => {
  const [albums, setAlbums] = React.useState([]);

  React.useEffect(() => {
    const request = fetch(endpoint);

    request
      .then((response) => {
        if (!response.ok) {
          console.error(response.statusText);
          return;
        }

        return response.json();
      })
      .then((result) => {
        setAlbums(result);
      });
  }, []);

  return albums;
};

export default useAlbums;
