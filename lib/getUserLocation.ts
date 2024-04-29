export const getUserLocation = async (): Promise<{ latitude: number; longitude: number } | null> => {
  return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
          reject(new Error('Geolocation is not supported by this browser.'));
      } else {
          navigator.geolocation.getCurrentPosition(
              (position) => {
                  const { latitude, longitude } = position.coords;
                  resolve({ latitude, longitude });
              },
              (error) => {
                  reject(error);
              }
          );
      }
  });
};
