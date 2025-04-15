# 🤖 Passo a Passo de Uso — Bot de Lembrete no WhatsApp

Este bot envia automaticamente uma mensagem no WhatsApp para um número específico todos os dias no horário programado.

---

## ✅ Passo a passo de uso

### 🟢 1. Abra a pasta do bot no seu computador

Localize a pasta onde está o arquivo `index.js` e o script `rodar-bot.bat`.

---

### 🟢 2. Dê dois cliques no arquivo `rodar-bot.bat`

Isso vai abrir o terminal e iniciar o bot.

---

### 🟢 3. Escaneie o QR Code (somente na primeira vez)

- Abra o WhatsApp no celular
- Vá em **Dispositivos conectados**
- Toque em **Conectar um dispositivo**
- Escaneie o QR que apareceu no terminal

✅ Após escanear, a sessão será salva automaticamente.

---

### 🟢 4. Aguarde o terminal exibir:

```
✅ Bot está pronto!
```

Isso indica que o bot está conectado e funcionando.

---

### 🟢 5. O bot enviará a mensagem automaticamente no horário programado

- Número configurado no `index.js`:
  ```js
  const numero = '55DDDNÚMERO@c.us';
  ```

- Mensagem:
  ```js
  const mensagem = 'SEU LEMBRETE';
  ```

- Horário de envio (ex: 23:00):
  ```js
  cron.schedule('00 23 * * *', () => {
  ```

---

### 🟢 6. Não feche o terminal

> O terminal precisa estar aberto no horário agendado para que o envio aconteça.

---

### 🟢 7. Na próxima vez, **você não precisa escanear o QR de novo**

Desde que:
- A pasta `.wwebjs_auth` **não seja deletada**
- O script continue sendo rodado da **mesma pasta**

---

### 🟢 8. Para parar o bot

- Pressione `Ctrl + C` no terminal
- Ou feche a janela do terminal

---
