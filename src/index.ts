import { User } from './Helpers/User';
import { Company } from './Helpers/Company';
import { CustomMap } from './Helpers/CustomMap';

const googleMapContainer = document.getElementById('google-map') as HTMLElement;
const map = new CustomMap(googleMapContainer);
const user = new User();
const company = new Company();
map.addMarker(user);
map.addMarker(company);
