interface MapMarker {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(container: HTMLElement) {
    this.googleMap = new google.maps.Map(container, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mapMarker: MapMarker) {
    // In this function we

    const markerObj = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapMarker.location.lat,
        lng: mapMarker.location.lng,
      },
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      label: 'Ola',
      draggable: true,
      title: 'Drag',
    });

    const htmlContent = `
        <div>
          Hi Boss
        </div>`;
    const infoWindow = new google.maps.InfoWindow({
      content: htmlContent,
    });

    markerObj.addListener('click', () => {
      console.log('paachu');

      infoWindow.open({
        anchor: markerObj,
        map: this.googleMap,
        shouldFocus: false,
      });
    });
  }
}
