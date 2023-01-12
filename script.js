// Insert angka ke textarea
function insert(num) {
  document.form.textarea.value = document.form.textarea.value + num;
}

// Function hitung
function equal() {
  let hasil = document.form.textarea.value;
  document.form.textarea.value = eval(hasil);
  console.log(eval(hasil));
}

//clean
function clean() {
  document.form.textarea.value = '';
}

// delete

function back() {
  var hasil = document.form.textarea.value;
  document.form.textarea.value = hasil.substring(0, hasil.length - 1);
}
