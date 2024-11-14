/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GoogleMapsService } from './googlemap.service';

@Module({
  providers: [GoogleMapsService],
  exports: [GoogleMapsService]
})

export class GoogleMapsModule{}