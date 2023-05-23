const textInput = document.getElementById('text-input');
const textCard = document.getElementById('text-card');
const downloadBtn = document.getElementById('download-btn');

window.onload = function() {
  if (localStorage.getItem("texty") === null | localStorage.getItem("text") === "") {
    localStorage.setItem("texty", "قم بالكتابة هنا")
  } else {
    textInput.value = localStorage.getItem("texty");
    textCard.innerText = localStorage.getItem("texty");
  }
}

textInput.addEventListener('input', (e) => {
  textCard.innerText = textInput.value;
  localStorage.setItem("texty", textInput.value);
  if (localStorage.getItem("texty") === null | localStorage.getItem("text") === "") {
    localStorage.setItem("texty", "قم بالكتابة هنا")
  }
});

downloadBtn.addEventListener('click', () => {
  setTimeout(() => {
    html2canvas(textCard, { scale: 10 }).then(function(canvas) {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement('a');
      link.download = 'text.png';
      link.href = imgData;
      link.click();
    });
  }, 300);
});