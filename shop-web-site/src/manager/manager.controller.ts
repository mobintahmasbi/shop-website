import { Body, Controller, Post } from '@nestjs/common';
import { LoginStepOneDTO } from './dto/loginStepOne.dto';
import { ManagerService } from './manager.service';

@Controller('31fd34534b21be0883ca158cd62638fa231a74ba1a4c551124c1926f8258b7d3')
export class ManagerController {

    constructor(private readonly managerService: ManagerService){}

    @Post('api/login/stepone')
    loginstepone(@Body() loginInputs: LoginStepOneDTO){
        return this.managerService.validateTheIncomingLoginInput(loginInputs)
    }
}
