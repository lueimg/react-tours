import GeoData from './GeoData';


class GeoFilter {

    earthRadius = 6371;
    minDistance = 100;
    clients = GeoData;
    intercomLocation = {
        lat: 53.3381985,
        lng: -6.2592576
    };

    constructor() {

    }

    getCurrentPosition() {
        return {
            lat: 53.3381985,
            lng: -6.2592576
        };
    }

    parseToRadians(num) {
        return num * Math.PI / 180;
    }

    setList (list) {
        this.clients = [...list];
        return this ;
    }

    getDistance(item, currentPosition) {
        try {
            var dLat = (item.lat - currentPosition.lat) * Math.PI / 180;
            var dLon = (item.lng - currentPosition.lng) * Math.PI / 180;
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(currentPosition.lat * Math.PI / 180) * Math.cos(item.lat * Math.PI / 180) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return (Math.round(this.earthRadius * c * 100) / 100);
        }
        catch (err) {
            return err;
        }
    }

    filterList(currentPosition, minimumDistance = 3 ) {
        return this.clients
            .filter((item) => item.address !== undefined)
            .map((item) => ({ ...item,  lat: item.address ? item.address.lat: 0, lng: item.address ? item.address.lng: 0}))
            .map((item) => ({ ...item, distance: this.getDistance(item, currentPosition) }))
            .filter((item) => item.distance <= minimumDistance);
    }

    getFullList() {
        return this.clients;
    }

    getList(currentPosition, minDistance = this.minDistance) {
        const list =  this.filterList(currentPosition, minDistance);
        return list;
    }



}

export default new GeoFilter();