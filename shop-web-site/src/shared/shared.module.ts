import { Module } from '@nestjs/common';
import { HashService } from './hash-service/hash-service.service';
import { ValidationService } from './validation/validation.service';

@Module({
  providers: [HashService, ValidationService],
  exports: [HashService, ValidationService]
})
export class SharedModule {}
