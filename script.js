const form = document.querySelector("form");
const message = document.querySelector("#inputMessage");
const number = document.querySelector("#inputNumber");
const check = document.querySelector(".check");
const btn = document.querySelector("button");



// btn.addEventListener("click", () => {
//   alert(`${message.value} ${number.value}`);
// });

const bot = {
  TOKEN: "7469506097:AAHzOVzy7RfFT1IUlzerVqR8ytFj8ukPxMg",
  chatId: "-4505882617",
};


form.addEventListener('submit', (e) => {
  // останавливает перезагрузку - form
  e.preventDefault()

  if(message.value && number.value) {
      const telegramMessage = `Message: ${message.value}, Number: ${number.value}`
      const TELEGRAM_API = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatId}&text=${telegramMessage}`
      fetch(TELEGRAM_API)
          .then(response => {
              console.log(response);
              if(response.ok){
                  alert('message success')
              }
          })
          .catch(error => {
              alert(error)
          })
  } else {
      alert('not validated')
  }
})
// https://api.telegram.org/bot7469506097:AAHzOVzy7RfFT1IUlzerVqR8ytFj8ukPxMg/sendMessage?chat_id=-4505882617&text=hello