let modeSulit = confirm("Mau main di mode sulit? (Angka 1–50)");
let rangeText = modeSulit ? "1 dan 50" : "1 dan 10";
let angkaRandom = Math.floor(Math.random() * (modeSulit ? 50 : 10)) + 1;
let attempt = 0;
let ulang = true;

while(ulang) {
  const inputUser = prompt(`Saya menyimpan angka antara ${rangeText}. Coba tebak!`);
  attempt++

  const userInput = parseInt(inputUser);

  if (isNaN(userInput)){
    console.log("Eh? Masukin angka ya 😄");
  } else {
      if (userInput < angkaRandom) {
        console.log("Terlalu kecil 😅");
      } else if (userInput > angkaRandom){
        console.log("Terlalu besar 😅");
      } else {
        console.log(`🎉 Selamat! Kamu menebak angka dengan benar dalam ${attempt} percobaan.`);

        if(attempt <= 3) {
          console.log("🔥 Pro banget! Kamu cepat banget nebaknya.");
        } else if (attempt <= 6) {
          console.log("👍 Lumayan! Tapi bisa lebih cepat.");
        } else {
          console.log("😅 Wah, perlu latihan nih. Tapi tetap semangat!");
        }

        ulang = false;
      }
  }
}