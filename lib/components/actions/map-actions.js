import { Subject } from 'rxjs/Subject';
import GeoFilter from 'components/GeoFilter';
import { saveBusinessNearby, LoadBusinessList } from './business-actions';

const defaultIcon = 'http://detourmaps.com/media/category_icons/mini/SERVICES.png';
const staticCategories = [{ "active": true, "color": "1B75BB", "description": "The service industry helps communities develop,  service is consumed at the point of sale.", "icon": "http://detourmaps.com/media/category_icons/mini/SERVICES.png", "id": "0", "mini_icon": "http://detourmaps.com/media/category_icons/mini/SERVICES.png", "name": "Services", "old_id": 6, "updated_at": 1504868121805, "url": "service" }, { "active": true, "color": "17BAB5", "description": "People experience nutrition, health care, standards of living a lifestyle.", "icon": "http://detourmaps.com/media/category_icons/HEALTH.png", "id": "1", "mini_icon": "http://detourmaps.com/media/category_icons/HEALTH.png", "name": "Health", "old_id": 5, "updated_at": 1504868159183, "url": "Health" }, { "active": true, "color": "37B34A", "description": "The food industry has a diversity of products, which create cultures, all those food items intended for home preparation and consumption helps the growth of this industry to cross borders around the globe.", "icon": "http://detourmaps.com/media/category_icons/FOOD.png", "id": "2", "mini_icon": "http://detourmaps.com/media/category_icons/FOOD.png", "name": "Food", "old_id": 4, "updated_at": 1504868163556, "url": "Food" }, { "active": true, "color": "F79420", "description": "Physical apperance industry, usually help people attitude.", "icon": "http://detourmaps.com/media/category_icons/BEAUTY.png", "id": "3", "mini_icon": "http://detourmaps.com/media/category_icons/BEAUTY.png", "name": "Beauty", "old_id": 3, "updated_at": 1504868168068, "url": "Beauty" }, { "active": true, "color": "EC1C24", "description": "Find local information about automotive industry", "icon": "http://detourmaps.com/media/category_icons/AUTO.png", "id": "4", "mini_icon": "http://detourmaps.com/media/category_icons/AUTO.png", "name": "Auto", "old_id": 2, "updated_at": 1504868147895, "url": "Auto" }];

export const TOGGLE_MAP = 'TOGGLE_MAP';
export const SHOW_MAP = 'SHOW_MAP';
export const HIDE_MAP = 'HIDE_MAP';

export const showMap = () => ({ type: SHOW_MAP });
export const hideMap = () => ({ type: HIDE_MAP });
export const toggleMap = () => ({ type: TOGGLE_MAP });

export const LOAD_CURRENT_POSITION = 'LOAD_CURRENT_POSITION';

export const LoadCurrentPosition = (position) => {
    return {
        type: LOAD_CURRENT_POSITION,
        position
    };
};

export const addMarkerIcon = (item) => {
    const categories = staticCategories;
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    return {
        ...item,
        category_name: randomCategory ? randomCategory.name : 'Services',
        icon: randomCategory ? randomCategory.icon : 'http://detourmaps.com/media/category_icons/mini/SERVICES.png',
    };
};

export const updateBusinessNearBy = (dispatch, currentPosition, categoryName = undefined, searchText = undefined) => {
    LoadBusinessList().subscribe((list) => {
        const businessList = GeoFilter
            .setList(list)
            .filterList(currentPosition, 3)
            .map((item) => ({ ...item, categoryData: staticCategories.find((x) => x.id === item.category_id) }))
            .filter((item) => categoryName ? item.categoryData.name === categoryName : true)
            .filter((item) => searchText ? item.name.toLowerCase().indexOf(searchText) > -1 : true);

        dispatch(saveBusinessNearby(businessList));
    });
};


export const getCurrentPosition = (dispatch) => {
    navigator.geolocation.getCurrentPosition((pos) => {
        // Get user position
        const currentPosition = [pos.coords].map((item) => ({ lat: item.latitude, lng: item.longitude }))[0];
        updateBusinessNearBy(dispatch, currentPosition);
        // save position in Redux store
        dispatch(LoadCurrentPosition(currentPosition));
        mapHelper.initializeMap(currentPosition);


    }, (error) => { console.log(error); });
};


export const InitMap = () => {
    new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: this.currentPosition
    });
};


class MapHelper {

    map = undefined;
    markers = [];

    infowindow = undefined;
    myCurrentPostionMarker = undefined;

    infowView$ = new Subject();

    constructor() {
        window.infowView$ = this.infowView$;
    }

    initializeMap = (center) => {
        if (!this.map || this.map && !this.map.rmiUrl) {
            this.map = new google.maps.Map(document.getElementById('map'), {  zoom: 15, center  });
        }
        return this.map;
    }

    isMapAvailable = () => {
        return this.map;
    }

    getCurrentPosition = (cb) => { }

    showCurrentPositionMarket = (position) => {
        const icon = {
            url: 'https://www.shareicon.net/data/128x128/2016/01/02/697148_pointer_512x512.png', // url
            scaledSize: new google.maps.Size(25, 25), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };
        this.myCurrentPostionMarker = new google.maps.Marker({ position, map: this.map, icon });

        const infowindow = new google.maps.InfoWindow({
            content: 'You are here',
            maxWidth: 200
        });

        this.myCurrentPostionMarker
            .addListener('click', () => infowindow.open(this.map, this.myCurrentPostionMarker));
    }

    setCenter = (position) => {
        if (this.map || this.map && !this.map.rmiUrl) {
            this.initializeMap(position);
        }
        return this.map && this.map.setCenter(position);
    }

    getMap = () => this.map

    addMarker = (item, showInfowindow = true) => {

        const icon = {
            url: item.categoryData ? item.categoryData.icon : defaultIcon, // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };
        const marker = new google.maps.Marker({ position: { lat: item.lat, lng: item.lng }, map: this.map, icon });
        this.markers.push(marker);

        if (showInfowindow) {
            // https://developers.google.com/maps/documentation/javascript/infowindows#add
            marker.addListener('click', () => {
                if (this.infowindow) this.infowindow.close();

                this.infowindow = new google.maps.InfoWindow({
                    content: this.createInfowindowContent(item),
                    maxWidth: 225
                });
                this.infowindow.open(this.map, marker);
            });
        }

        return item;
    }

    createInfowindowContent = (item) => {
        return `
        <style>
        .marker-wrapper .category{
            position: absolute;
            top: 0;
            left: 0;
            background: #F37C44;
            padding: 5px 10px;
            color: #fff;
        
        }
        .marker-wrapper .name {
            font-size: 1.4em;
            font-weight: bold;
            text-align: center;
            margin: 5px;
        }
        .marker-wrapper .address{
            text-align: center;
        }
        .marker-wrapper .view {
            text-align: right;
            padding: 5px 15px;
            background: #ccc;
            cursor: pointer;
            margin: 10px;
            display: inline-block;
            border-radius: 5px;
            color: #fff;
            font-weight: bold;
            text-shadow: 0px 0px 1px #000;
        }
        
        </style>
        
        <div class="marker-wrapper">
            <img src="http://detourmaps.com/media/business/cover_logo_St4Bihg.jpg">
            <div class="category">Service</div>
            <div class="name">${item.name}</div>
            <div class="address">3109 W 63rd St,Chicago ,IL,60629</div>
            <div class="view" onclick='window.infowView$.next(${JSON.stringify(item)})'>view</div>
        </div>
        `;
    }

    removeAllMarkers = () => {
        this.markers.map((item) => item.setMap(null));
        this.markers = [];
        return true;
    }


    activateClickOnMap = () => {
        // google.maps.event.addListener(this.map, 'click', (event) => {
        //     const point = event.latLng.toJSON();
        //     this.updateMapListFiltered(point);
        // });
    }



}

export let mapHelper = new MapHelper();
window.maphelper = mapHelper;