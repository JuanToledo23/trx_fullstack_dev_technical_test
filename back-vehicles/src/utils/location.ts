export const getRandomLocation = () => {
  const minLat: number = 46000;
  const maxLat: number = 64000;
  const minLng: number = 16688;
  const maxLng: number = 22688;
  const lat: number = Math.floor(Math.random() * (maxLat - minLat) + minLat);
  const lng: number = Math.floor(Math.random() * (maxLng - minLng) + minLng);
  return { lat: +`19.${lat}`, lng: +`-99.${lng}` };
};
