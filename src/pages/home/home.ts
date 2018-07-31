import { Component } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapsEvent} from "@ionic-native/google-maps";

declare let plugin: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mapReady: boolean = false;
  map: GoogleMap;



  constructor() {
  }

  loadMap() {
    // Create a map after the view is loaded.
    // (platform is already ready in app.component.ts)
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 43.0741704,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      },
      controls: {
        //myLocationButton: false,
        myLocation: false
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      }
    });

    // Wait the maps plugin is ready until the MAP_READY event
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.mapReady = true;
    });
  }


  ionViewDidLoad() {
    this.loadMap();
  }



}
