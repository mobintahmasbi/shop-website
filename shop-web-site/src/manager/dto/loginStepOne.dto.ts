import { Manager } from "../entities/manager.entity";
import { PickType } from "@nestjs/mapped-types";

export class LoginStepOneDTO extends PickType(Manager, ['userName', 'password', 'email']) {}