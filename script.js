const encryptForm = document.getElementById("encrypting");
const encryptingInput = encryptForm.elements["text-normal"];
const encryptedInput = document.querySelector(".norm-enc");
const decryptForm = document.getElementById("decrypting");
const decryptingInput = decryptForm.elements["encrypted-text"];
const decryptedInput = document.querySelector(".enc-norm");
const alphabets = "abcdefghijklmnopqrstuvwxyz";

encryptForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let enc_val = encryptingInput.value;
  let result = "";
  for (const char of enc_val) {
    let index = alphabets.indexOf(char.toLowerCase());
    index = (index + 3) % alphabets.length;
    result += (index + 1).toString() + "|";
  }

  encryptedInput.textContent = result.slice(0, -1);
});

decryptForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let dec_val = decryptingInput.value;
  const numbers = dec_val.split(/\|/g).map((num) => parseInt(num));
  let decipheredMessage = "";

  for (const num of numbers) {
    let index = (num - 3) % alphabets.length;
    if (index <= 0) index += alphabets.length;
    decipheredMessage += alphabets[index - 1];
  }

  decryptedInput.textContent = decipheredMessage;
});
