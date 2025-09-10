import { useEffect, useState } from 'react';

const useNavigation = () => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.');
      return;
    }

    navigator.permissions
      .query({ name: 'geolocation' as PermissionName })
      .then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
          navigator.geolocation.getCurrentPosition(
            (pos) => setPosition(pos),
            (err) => setError(err.message),
          );
        } else {
          setError('Geolocation permission denied.');
        }
      })
      .catch(() => {
        navigator.geolocation.getCurrentPosition(
          (pos) => setPosition(pos),
          (err) => setError(err.message),
        );
      });
  }, []);

  return { position, error };
};

export default useNavigation;
