import { Injectable } from '@nestjs/common';
import { LoginStepOneDTO } from './dto/loginStepOne.dto';

@Injectable()
export class ManagerService {

    async validateTheIncomingLoginInput(inputs: LoginStepOneDTO){
        return
    }
}
