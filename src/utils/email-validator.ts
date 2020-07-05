import { EmailValidator } from '../presentation/protocols/email-validator'

export class EmailValidatorAdapter implements EmailValidator {
    isValid (email: string): boolean {
        console.log(email)
        return false
    }
}
