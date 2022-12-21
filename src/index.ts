import { Client, LocalAuth } from 'whatsapp-web.js';
import chalk from 'chalk';
const log = console.log;
const info = chalk.blue;
export const getWhatsappClient = async () => {
  const client = await new Client({
    authStrategy: new LocalAuth(),
  });

  client.on('qr', (qr: string) => {
    log('New QR\n', qr);
  });

  client.on('ready', () => {
    log(info('Client is ready!'));
  });

  client.on('message', (msg: any) => {
    log(msg);

    if (msg.body == '!ping') {
      msg.reply('This is a whatsapp bot please ignore :)');
    }
  });
  await client.initialize();
};
getWhatsappClient();
