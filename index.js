const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const cron = require('node-cron');

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: "bot-reminder" // Pode dar nomes diferentes para múltiplos bots
  })
});

client.on('loading_screen', (percent, message) => {
  console.log(`🔄 Carregando: ${percent}% - ${message}`);
});

client.on('qr', qr => {
  console.log('📸 Escaneie o QR Code com seu WhatsApp (apenas na 1ª vez):');
  qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => {
  console.log('🔐 Sessão autenticada com sucesso!');
});

client.on('auth_failure', msg => {
  console.error('❌ Falha na autenticação:', msg);
});

client.on('ready', () => {
  console.log('✅ Bot está pronto!');

  const numero = 'DDNUMERODODESTINATARIO@c.us';
  const mensagem = 'SEU LEMBRETE AQUI';

  cron.schedule('00 23 * * *', () => {
    client.sendMessage(numero, mensagem)
      .then(() => console.log('✅ Mensagem enviada!'))
      .catch(err => console.error('❌ Erro ao enviar:', err));
  });
});

client.initialize();
