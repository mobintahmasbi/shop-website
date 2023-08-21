import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ValidationService {

    performValidation(inputs: any){
        this.protectFromMailiciousCharaters(inputs)
        this.checkInputsLength(inputs)
        const keys = Object.keys(inputs)
        if(keys.includes('email')){
            this.correctEmail(inputs['email'])
        }
        if(keys.includes('password')) {
            this.correctPassword(inputs['password'])
        }
    }

    protectFromMailiciousCharaters(inputs: any){
        const mailiciousCharacters =  ["'", "-", "=", "+", ";", '"', "%", "#", ".", ","];
        const keys = Object.keys(inputs)
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
        // this regex matches the email addresses when the email has ended with @gmail.com or @yahoo.com
        const emailRegex = /\b(?:[a-zA-Z0-9._%+-]+@yahoo\.com|[a-zA-Z0-9._%+-]+@gmail\.com)\b/;
        if (!emailRegex.test(email)){
            throw new BadRequestException('email is not a valid email address')
        }
    }

    correctPassword(password: string) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*^]).{8,}$/
        if (!passwordRegex.test(password)){
            throw new BadRequestException('password is not a valid password')
        }
    }
}
