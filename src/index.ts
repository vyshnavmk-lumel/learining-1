import { User } from "./Helpers/User";
import { Company } from "./Helpers/Company";

const googleMapContainer = document.getElementById("google-map") as HTMLElement;
new google.maps.Map(googleMapContainer,{
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
})