let btnMenang = document.querySelector("#btnMenang");
let btnKalah = document.querySelector("#btnKalah");
let overlay = document.querySelector("#overlay");

const tombol = document.querySelectorAll(".tombol");
let tanyaPlayer = document.querySelector(".tanyaPlayer");
let tanyaComputer = document.querySelector(".tanyaComputer");
let tulisan = document.querySelector("#tulisan");
let skorPlayer = document.querySelector(".skorPlayer");
let skorComputer = document.querySelector(".skorComputer");
let saldo = document.querySelector("#saldo");
let saldoPlayer = 100;
let countPlayer = 0;
let countComputer = 0;

//update saldo
function updateSaldo() {
  saldo.textContent = saldoPlayer;
}
updateSaldo();
//taruhan

//ketika pilih taruhan, hubungkan saldo dengan taruhan
let pilihT = document.querySelectorAll(".pilihT");
pilihT.forEach(function taruhan(tombolt, index) {
  tombolt.addEventListener("click", function () {
    //pilihanT
    if (index == 0) {
      halamanTaruhan.classList.add("hidden");
      function updateTaruhanSatu() {
        if (countPlayer === 5) {
          saldoPlayer += taruhanSatu;
          updateSaldo();
        } else if (countComputer === 5) {
          saldoPlayer -= taruhanSatu;
          updateSaldo();
        }
      }
      tombol.forEach(function (tombol, index) {
        tombol.addEventListener("click", function () {
          //pilihan player
          if (index == 0) {
            tanyaPlayer.textContent = "✌️";
          } else if (index == 1) {
            tanyaPlayer.textContent = "✊";
          } else {
            tanyaPlayer.textContent = "🤚";
          }
          tanyaPlayer.style.fontSize = "90px";
          tanyaComputer.style.fontSize = "90px";
          //pilihan komputer
          let computer = Math.random();
          if (computer < 0.34) {
            tanyaComputer.textContent = "✌️";
          } else if (computer >= 0.34 && computer < 0.67) {
            tanyaComputer.textContent = "✊";
          } else {
            tanyaComputer.textContent = "🤚";
          }
          //rules
          let hasil = "";
          if (tanyaPlayer.textContent === tanyaComputer.textContent) {
            hasil = "Kamu Seri";
          } else if (tanyaPlayer.textContent === "✌️") {
            if (tanyaComputer.textContent === "🤚") {
              hasil = "Kamu Menang";
              countPlayer++;
            } else {
              hasil = "Kamu Kalah";
              countComputer++;
            }
          } else if (tanyaPlayer.textContent === "✊") {
            if (tanyaComputer.textContent === "✌️") {
              hasil = "Kamu Menang";
              countPlayer++;
            } else {
              hasil = "Kamu Kalah";
              countComputer++;
            }
          } else if (tanyaPlayer.textContent === "🤚") {
            if (tanyaComputer.textContent === "✊") {
              hasil = "Kamu Menang";
              countPlayer++;
            } else {
              hasil = "Kamu Kalah";
              countComputer++;
            }
          } else {
            alert("Hasil tidak ada");
          }
          tulisan.textContent = hasil;

          if (countPlayer === 5) {
            updateTaruhanSatu();
            oricount();
            oriText();
            resetTulisan();
            openModalMenang();
          } else if (countComputer === 5) {
            updateTaruhanSatu();
            oricount();
            oriText();
            resetTulisan();
            openModalKalah();
          }

          updateScorePlayer();
          updateScoreComputer();
          updateSaldo();
          if (saldoPlayer <= 0){
            openModalSaldo()
            countPlayer = 0;
            countComputer = 0;
          }
        });
      });
    } else if (index == 1) {
      halamanTaruhan.classList.add("hidden");
      function updateTaruhanDua() {
        if (countPlayer === 5) {
          saldoPlayer += taruhanDua;
          updateSaldo();
        } else if (countComputer === 5) {
          saldoPlayer -= taruhanDua;
          updateSaldo();
        }
      }
      tombol.forEach(function (tombol, index) {
        tombol.addEventListener("click", function () {
          //pilihan player
          if (index == 0) {
            tanyaPlayer.textContent = "✌️";
          } else if (index == 1) {
            tanyaPlayer.textContent = "✊";
          } else {
            tanyaPlayer.textContent = "🤚";
          }
          tanyaPlayer.style.fontSize = "90px";
          tanyaComputer.style.fontSize = "90px";
          //pilihan komputer
          let computer = Math.random();
          if (computer < 0.34) {
            tanyaComputer.textContent = "✌️";
          } else if (computer >= 0.34 && computer < 0.67) {
            tanyaComputer.textContent = "✊";
          } else {
            tanyaComputer.textContent = "🤚";
          }
          //rules
          let hasil = "";
          if (tanyaPlayer.textContent === tanyaComputer.textContent) {
            hasil = "Kamu Seri";
          } else if (tanyaPlayer.textContent === "✌️") {
            if (tanyaComputer.textContent === "🤚") {
              hasil = "Kamu Menang";
              countPlayer++;
            } else {
              hasil = "Kamu Kalah";
              countComputer++;
            }
          } else if (tanyaPlayer.textContent === "✊") {
            if (tanyaComputer.textContent === "✌️") {
              hasil = "Kamu Menang";
              countPlayer++;
            } else {
              hasil = "Kamu Kalah";
              countComputer++;
            }
          } else if (tanyaPlayer.textContent === "🤚") {
            if (tanyaComputer.textContent === "✊") {
              hasil = "Kamu Menang";
              countPlayer++;
            } else {
              hasil = "Kamu Kalah";
              countComputer++;
            }
          } else {
            alert("Hasil tidak ada");
          }
          tulisan.textContent = hasil;

          if (countPlayer === 5) {
            updateTaruhanDua();
            oricount();
            oriText();
            resetTulisan();
            openModalMenang();
          } else if (countComputer === 5) {
            updateTaruhanDua();
            oricount();
            oriText();
            resetTulisan();
            openModalKalah();
          }

          updateScorePlayer();
          updateScoreComputer();
          updateSaldo();
          if (saldoPlayer <= 0){
            openModalSaldo()
            countPlayer = 0;
            countComputer = 0;
          }
        });
      });
    } else if (index == 2) {
      halamanTaruhan.classList.add("hidden");
      function updateTaruhanTiga() {
        if (countPlayer === 5) {
          saldoPlayer += taruhanTiga;
          updateSaldo();
        } else if (countComputer === 5) {
          saldoPlayer -= taruhanTiga;
          updateSaldo();
        }
      }
      tombol.forEach(function (tombol, index) {
        tombol.addEventListener("click", function () {
          //pilihan player
          if (index == 0) {
            tanyaPlayer.textContent = "✌️";
          } else if (index == 1) {
            tanyaPlayer.textContent = "✊";
          } else {
            tanyaPlayer.textContent = "🤚";
          }
          tanyaPlayer.style.fontSize = "90px";
          tanyaComputer.style.fontSize = "90px";
          //pilihan komputer
          let computer = Math.random();
          if (computer < 0.34) {
            tanyaComputer.textContent = "✌️";
          } else if (computer >= 0.34 && computer < 0.67) {
            tanyaComputer.textContent = "✊";
          } else {
            tanyaComputer.textContent = "🤚";
          }
          //rules
          let hasil = "";
          if (tanyaPlayer.textContent === tanyaComputer.textContent) {
            hasil = "Kamu Seri";
          } else if (tanyaPlayer.textContent === "✌️") {
            if (tanyaComputer.textContent === "🤚") {
              hasil = "Kamu Menang";
              countPlayer++;
            } else {
              hasil = "Kamu Kalah";
              countComputer++;
            }
          } else if (tanyaPlayer.textContent === "✊") {
            if (tanyaComputer.textContent === "✌️") {
              hasil = "Kamu Menang";
              countPlayer++;
            } else {
              hasil = "Kamu Kalah";
              countComputer++;
            }
          } else if (tanyaPlayer.textContent === "🤚") {
            if (tanyaComputer.textContent === "✊") {
              hasil = "Kamu Menang";
              countPlayer++;
            } else {
              hasil = "Kamu Kalah";
              countComputer++;
            }
          } else {
            alert("Hasil tidak ada");
          }
          tulisan.textContent = hasil;

          if (countPlayer === 5) {
            updateTaruhanTiga();
            oricount();
            oriText();
            resetTulisan();
            openModalMenang();
          } else if (countComputer === 5) {
            updateTaruhanTiga();
            oricount();
            oriText();
            resetTulisan();
            openModalKalah();
          }

          updateScorePlayer();
          updateScoreComputer();
          updateSaldo();
          if (saldoPlayer <= 0){
            openModalSaldo()
            countPlayer = 0;
            countComputer = 0;
          }
        });
      });
    }
  });
});



function hangus() {
  if (saldoPlayer.textContent === 0) {
    alert("saldo anda habis");
  }
}

//halaman awal play button
let halamanAwal = document.querySelector("#halamanAwal");
let btnPlay = document.querySelector("#btnPlay");
btnPlay.addEventListener("click", function () {
  halamanAwal.classList.add("hidden");
  halamanTaruhan.classList.toggle("hidden");
});
//halaman taruhan
let halamanTaruhan = document.querySelector("#halamanTaruhan");
// let pilihTSatu = document.querySelector(".pilihTSatu")
// let pilihTDua = document.querySelector(".pilihTDua")
// let pilihTTiga = document.querySelector(".pilihTTiga")
let taruhanSatu = 10;
let taruhanDua = 30;
let taruhanTiga = 50;

//oricount
function oricount() {
  countPlayer = 0;
  countComputer = 0;
}

// Update skor
function updateScorePlayer() {
  skorPlayer.textContent = countPlayer;
}
function updateScoreComputer() {
  skorComputer.textContent = countComputer;
}

//modal box Menang
let modalMenang = document.querySelector("#modalBoxMenang");
let openModalMenang = function () {
  modalMenang.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};
btnMenang.addEventListener("click", openModalMenang);

//modal box kalah
let modalKalah = document.querySelector("#modalBoxKalah");
let openModalKalah = function () {
  modalKalah.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};
btnKalah.addEventListener("click", openModalKalah);

//modal box saldo
let btnSaldo = document.querySelector("#btnSaldo")
let overlayDua = document.querySelector("#overlaydua");
let modalSaldo = document.querySelector("#modalBoxSaldo");
let openModalSaldo = function (){
  modalSaldo.classList.toggle("hidden");
  overlayDua.classList.toggle("hidden") ;
}
btnSaldo.addEventListener('click',openModalSaldo)

//reset text
function oriText() {
  tanyaPlayer.textContent = "?";
  tanyaComputer.textContent = "?";
}

function resetTulisan() {
  tulisan.innerHTML =
    "Ayoo menangkan 5 suit untuk <br> memenangkan permainan ini!";
}