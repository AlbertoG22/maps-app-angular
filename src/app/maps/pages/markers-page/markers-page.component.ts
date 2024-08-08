import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'],
})
export class MarkersPageComponent {
  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-103.74631183574165, 19.244690479242905);
  
  ngAfterViewInit(): void {
    if( !this.divMap ) throw 'El elemento HTML no fue encontrado.';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom
    });

    // -------- FORMA DE CREAR UN MARCADOR --------
    // // puede crearse manualmente el elemento que queremos poner como marcador
    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Custom Marker';

    // const marker = new Marker({
    //   // color: 'red'
    //   element: markerHtml
    // })
    //   .setLngLat( this.currentLngLat )
    //   .addTo( this.map );
  }
}

