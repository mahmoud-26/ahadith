const textInput = document.getElementById('text-input');
const textCard = document.getElementById('text-card');
const downloadBtn = document.getElementById('download-btn');

window.onload = function() {
  if (localStorage.getItem("text") === null | localStorage.getItem("text") === "") {
    localStorage.setItem("text", "قم بالكتابة هنا")
  } else {
    textInput.value = localStorage.getItem("text");
    textCard.innerText = localStorage.getItem("text");
  }
}

textInput.addEventListener('input', (e) => {
  textCard.innerText = textInput.value;
  localStorage.setItem("text", textInput.value);
  if (localStorage.getItem("text") === null | localStorage.getItem("text") === "") {
    localStorage.setItem("text", "قم بالكتابة هنا")
  }
});

downloadBtn.addEventListener('click', () => {
  setTimeout(() => {
    html2canvas(textCard).then(function(canvas) {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement('a');
      link.download = 'Hadith_1.png';
      link.href = imgData;
      link.click();
    });
  }, 1000);
});