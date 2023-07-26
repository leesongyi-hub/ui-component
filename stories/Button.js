import '../assets/css/style.css';

export const createButton = ({
  icon = false,
  size = 'md',
  type = 'primary',
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = icon ? 'show' : 'hide';
  btn.className = ['bt', `bt-size-${size}`, `bt-${type}`, icon].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
