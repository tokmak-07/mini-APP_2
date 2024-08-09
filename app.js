import express from "express"

const bot = new bot("7499269454:AAHXC8Alkk85gPC59SYehRRsa__BRBV2uT4");

const crypto = require('crypto');

let tg =window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = '#ffffff';
tg.MainButton.color = '#2cab37'

let item = '';

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')

btn1.addEventListener('click',function(){
if(tg.MainButton.isVisible){
  tg.MainButton.hide();
}
else{
  tg.MainButton.setText('Вы выбрали товар 1')
  item = '1'
  tg.MainButton.show();
}
})

btn1.addEventListener('click',function(){
  if(tg.MainButton.isVisible){
    tg.MainButton.hide();
  }
  else{
    tg.MainButton.setText('Вы выбрали товар 2')
    item = '2'
    tg.MainButton.show();
  }
  })

  btn2.addEventListener('click',function(){
    if(tg.MainButton.isVisible){
      tg.MainButton.hide();
    }
    else{
      tg.MainButton.setText('Вы выбрали товар 3')
      item = '3'
      tg.MainButton.show();
    }
    })

    btn3.addEventListener('click',function(){
      if(tg.MainButton.isVisible){
        tg.MainButton.hide();
      }
      else{
        tg.MainButton.setText('Вы выбрали товар 4')
        item = '4'
        tg.MainButton.show();
      }
      })

      btn4.addEventListener('click',function(){
        if(tg.MainButton.isVisible){
          tg.MainButton.hide();
        }
        else{
          tg.MainButton.setText('Вы выбрали товар 5')
          item = '5'
          tg.MainButton.show();
        }
        })

        btn5.addEventListener('click',function(){
          if(tg.MainButton.isVisible){
            tg.MainButton.hide();
          }
          else{
            tg.MainButton.setText('Вы выбрали товар 6')
            item = '6'
            tg.MainButton.show();
          }
          }) 


Telegram.WebApp.onEvent("mainButtonClicked",function(){
  tg.sendData(item)
})

let usercard = document.getElementById('usercard');

let p =document.createElement('p')

p.innerText = `${tg.initDataUnsafe.first_name}
${tg.initDataUnsafe.last_name}`;

usercard.appendChild(p);

// 
// Токен вашего бота Telegram
const TELEGRAM_BOT_TOKEN = '7499269454:AAHXC8Alkk85gPC59SYehRRsa__BRBV2uT4';

// Функция для проверки подлинности данных от Telegram
const verifyTelegramWebAppData = (telegramInitData) => {
  // Декодируем данные из URL-формата
  const encoded = decodeURIComponent(telegramInitData);

  // Создаем секретный ключ для HMAC
  const secret = crypto
    .createHmac('sha256', 'WebAppData')
    .update(TELEGRAM_BOT_TOKEN)
    .digest();

  // Разделяем строку запроса на массив параметров
  const arr = encoded.split('&');

  // Извлекаем параметр 'hash'
  const hashIndex = arr.findIndex(str => str.startsWith('hash='));
  if (hashIndex === -1) {
    // Если параметра 'hash' нет, данные невалидны
    return false;
  }

  // Удаляем параметр 'hash' из массива и получаем его значение
  const hash = arr.splice(hashIndex, 1)[0].split('=')[1];

  // Сортируем остальные параметры и создаем строку проверки данных
  arr.sort((a, b) => a.localeCompare(b));
  const dataCheckString = arr.join('\n');

  // Создаем подпись для строки проверки данных
  const _hash = crypto
    .createHmac('sha256', secret)
    .update(dataCheckString)
    .digest('hex');

  // Сравниваем подпись с полученным значением 'hash'
  return _hash === hash;
};

// Пример использования функции
const telegramInitData = 'auth_date=1609459200&hash=abcdef1234567890&user={%22id%22:123456789,%22first_name%22:%22John%22}';
console.log(verifyTelegramWebAppData(telegramInitData)); // Вывод: true или false
// 

const bottoken = process.env.BOT_TOKEN


app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:'.'})
})

app.post('/api/init_data',(req,res) =>{
console.log('Body:')
console.log(req.body)
})
app.listen(port,() =>{
    console.log(`Example app listeningnon port ${port}`)
})