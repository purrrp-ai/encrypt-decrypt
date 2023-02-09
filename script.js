const encryptForm = document.getElementById("encrypting");
const encryptingInput = encryptForm.elements["text-normal"];
const encryptedInput = document.querySelector(".norm-enc");
const decryptForm = document.getElementById("decrypting");
const decryptingInput = decryptForm.elements["encrypted-text"];
const decryptedInput = document.querySelector(".enc-norm");
const alphabets = "abcdefghij";

encryptForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let enc_val = encryptingInput.value.toLowerCase().trim();
  let result = "";
  for (const char of enc_val) {
    let index = alphabets.indexOf(char);
    if (index === -1) {
      encryptedInput.textContent = `The character “${char}” is not encryptable.`;
      encryptedInput.style.color = "red";
      setTimeout(() => {
        encryptedInput.textContent = "";
        encryptedInput.style.color = "inherit";
      }, 1500);
      return;
    }
    index = (index + 3) % 10;
    if (index >= alphabets.length) {
      index -= alphabets.length;
    }
    result += (index + 1).toString() + "|";
  }

  encryptedInput.textContent = result.slice(0, -1);
});

decryptForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let dec_val = decryptingInput.value.trim();
  let decipheredMessage = "";
  for (let i = 0; i < dec_val.length; i++) {
    let num = parseInt(dec_val[i]);
    if (!isNaN(num)) {
      let index = (num + 7) % 10;
      if (index === 0) index = 10;
      decipheredMessage += alphabets[index - 1];
    }
  }

  decryptedInput.textContent = decipheredMessage;
});
