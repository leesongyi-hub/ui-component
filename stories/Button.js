import '../assets/css/style.css';

export const createButton = ({  
  icon = false,
  size = 'md',
  type = 'primary',
  label,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  

  const mode = icon ? 'isIcon' : '';
  btn.className = ['bt', `bt-size-${size}`, `bt-${type}`, mode].join(' ');

  if (icon) {
    // Create the icon element using SVG
    const iconElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconElement.classList.add('icon');

    // Create the <use> element to include the SVG icon with the specified id
    const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    useElement.setAttribute('xlink:href', `#ico_close`); // Use the specified icon id (in this case, "ico_close")
    iconElement.appendChild(useElement);

    // Add the icon element to the button
    btn.appendChild(iconElement);
  }

  return btn;
};