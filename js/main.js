//* Bir strinqin boş olub olmadığını yoxlamaq üçün JavaScript funksiyası yazın

// function strinqiYoxla(strinq) {
//   return strinq.trim() === "";
// }

// var boşStrinq = "";
// var doluStrinq = "Bu strinq doludur.";

// console.log(strinqiYoxla(boşStrinq)); // true
// console.log(strinqiYoxla(doluStrinq)); // false

//* 8. Bir simli ilk hərfini baş hərflə yazmaq üçün JavaScript funksiyası yazın.

// function capitalized(str) {
//   // Sətrin ilk hərfini böyük hərfə çevir və geri qalan hissəni əlavə et
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// var inputString = "coders";
// var capitalizedString = capitalized(inputString);

// console.log(capitalizedString); //Coders

//* 13. Verilmiş bir simli n dəfə tekrarlamaq üçün JavaScript funksiyasını yazın (standart 1).

// function nDəfəTekrarla(str, n) {
//   return n < 1 ? "" : str.repeat(n);
// }

// var String = "Baku";
// var result = nDəfəTekrarla(String, 5);

// console.log(result); // Baku Baku Baku Baku Baku
