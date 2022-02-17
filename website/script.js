function oldCopyToClipboard(text) {
  temp = document.createElement('textarea');
  temp.value = text;

  temp.style.top = '0';
  temp.style.left = '0';
  temp.style.position = 'fixed';

  document.body.appendChild(temp);
  temp.focus();
  temp.select();

  document.execCommand('copy');

  document.body.removeChild(temp);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function copyEmail() {
  const email = 'christopher.19072@mhs.its.ac.id';
  if (!navigator.clipboard) {
    return oldCopyToClipboard(email);
  }
  copyToClipboard(email);
}
