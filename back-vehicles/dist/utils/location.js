"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomLocation = void 0;
const getRandomLocation = () => {
    const minLat = 46000;
    const maxLat = 64000;
    const minLng = 16688;
    const maxLng = 22688;
    const lat = Math.floor(Math.random() * (maxLat - minLat) + minLat);
    const lng = Math.floor(Math.random() * (maxLng - minLng) + minLng);
    return { lat: +`19.${lat}`, lng: +`-99.${lng}` };
};
exports.getRandomLocation = getRandomLocation;
