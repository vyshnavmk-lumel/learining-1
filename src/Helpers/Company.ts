import { faker } from '@faker-js/faker';

export class Company{
    companyName: string;
    location: {
        lng: number;
        lat: number;
    }

    constructor(){
        this.companyName = faker.company.companyName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }

    }
}
