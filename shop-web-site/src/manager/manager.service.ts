import { Injectable } from '@nestjs/common';
import { LoginStepOneDTO } from './dto/loginStepOne.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Manager } from './entities/manager.entity';
import { Repository } from 'typeorm';
import { HashService } from 'src/shared/hash-service/hash-service.service';

@Injectable()
export class ManagerService {
  constructor(
    @InjectRepository(Manager)
    private readonly managerRepo: Repository<Manager>,
    private readonly hashService: HashService
  ) {}

  async validateTheIncomingLoginInput(inputs: LoginStepOneDTO) {
    
    return
  }
}
