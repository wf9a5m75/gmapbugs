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
  testCase: number = 0;

  options: any[] = [
    {myLocation: false},
    {myLocationButton: false},
    {myLocation: false, myLocationButton: false},
    {myLocation: true},
    {myLocationButton: true},
    {myLocation: true, myLocationButton: true},
    {}
  ];


  constructor() {
  }

  loadMap(controls) {
    let opts: any = {
      camera: {
        target: {
          lat: 43.0741704,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      },
      controls: controls,
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      }
    };


    alert(JSON.stringify(opts.controls));

    // Create a map after the view is loaded.
    // (platform is already ready in app.component.ts)
    this.map = GoogleMaps.create('map_canvas', opts);

    // Wait the maps plugin is ready until the MAP_READY event
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
    });
  }


  ionViewDidLoad() {
  }

  onItemSelected() {
    if (this.map) {
      this.map.remove();
    }

    this.loadMap(this.options[this.testCase]);
  }


}
