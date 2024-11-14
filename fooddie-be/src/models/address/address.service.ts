/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { GoogleMapsService } from '../../models/googlemap/googlemap.service';
import { LatLngLiteral } from '@googlemaps/google-maps-services-js';

@Injectable()
export class AddressService{
  constructor(
    private readonly googleMapsService: GoogleMapsService
 ){}
 
 async getAddressCoords( address ): Promise<LatLngLiteral>{
  const { lng, lat } = await this.googleMapsService
    .getCoordinates( address );
    
    return { lng, lat }
  }
}