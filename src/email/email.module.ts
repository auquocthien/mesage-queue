import { Global, Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer';

require('dotenv').config()
@Global()
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'Queue Task',
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      },
      defaults: {
        from: process.env.FROM_EMAIL
      }
    })
  ],
  providers: [EmailService],
  exports: [EmailService]
})
export class EmailModule { }
