import { Module } from '@nestjs/common';
import { GoogleMapsModule } from '../googlemap/googlemap.module';
import { AddressService } from './address.service';
@Module({
  imports: [GoogleMapsModule],
  providers: [AddressService],
  exports: [AddressService]
})

export class AddressModule{}