import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ValidationService {

    performValidation(inputs: any){
        this.protectFromMailiciousCharaters(inputs)
        this.checkInputsLength(inputs)
    }

    protectFromMailiciousCharaters(inputs: any){
        const mailiciousCharacters =  ["'", "-", "=", "+", ";", '"', "%", "#", ".", ","];
        const keys = Object.keys(inputs)
        let result = true;
        keys.forEach(key => {
            mailiciousCharacters.forEach(char => {
                if (inputs[key].includes(char)){
                    throw new BadRequestException('inputs are contained atlease one mailicious character')
                }
            })
        })
    }

    checkInputsLength(inputs: any) {
        const keys = Object.keys(inputs)
        keys.forEach(key => {
            if (key === 'email'){
                if (inputs[key].lenght < 8){
                    throw new BadRequestException('email is too short')
                }
            } else {
                if (inputs[key].lenght < 8 || inputs[key].lenght > 25){
                    throw new BadRequestException('inputs must be between 8 and 25 characters')
                }
            }
        })
    }

    correctEmail(email: string) {
        
    }
}
