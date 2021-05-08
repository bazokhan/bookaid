export const copyUrl = (url: string): void => {
  const textField = document.createElement('textarea');
  textField.innerText = url;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
};
