function generateQRCode() {
  const url = document.getElementById("urlInput").value;

  if (!url) {
      alert("لطفا یک آدرس وارد کنید!");
      return;
  }

  const qrcodeDiv = document.getElementById("qrcode");
  qrcodeDiv.innerHTML = "";

  const qrcode = new QRCode(qrcodeDiv, {
      text: url,
      width: 200,
      height: 200
  });
}

// حالت دارک‌مود
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});