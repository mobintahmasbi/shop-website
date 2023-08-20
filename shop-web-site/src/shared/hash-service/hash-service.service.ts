import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
    
    async hashThePassword(password: string) {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(password, saltOrRounds);
        return hash;
    }

    async compareThePasswords(hashedPassword:string, password:string) {
        return bcrypt.compare(password, hashedPassword)
    }

}
