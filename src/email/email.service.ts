import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
    constructor(private mailerService: MailerService) { }

    async sendEmail(options: { email: string, subject: string, html: string }) {
        try {
            const message = {
                to: options.email,
                subject: options.subject,
                html: options.html
            }

            const emailSend = await this.mailerService.sendMail({ ...message })
            return emailSend
        }
        catch (err) {
            throw new HttpException('error', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
