import { createButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args });
  },
  argTypes: {
    //backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    type: {
      control: { type: 'select' },
      options: ['primary', 'outline', 'fill', 'outlineTonal', 'fillOutlineTonal', 'fillTonal', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['xlg', 'lg', 'md', 'sm', 'xsm'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary = {
  args: {
    type: 'primary',
    label: '버튼명',
  },  
};
export const Outline = {
  args: {
    type: 'outline',
    label: '버튼명',
  },
};
export const Fill = {
  args: {
    type: 'fill',
    label: '버튼명',
  },
};
export const OutlineTonal = {
  args: {
    type: 'outlineTonal',
    label: '버튼명',
  },
};
export const FillOutlineTonal = {
  args: {
    type: 'fillOutlineTonal',
    label: '버튼명',
  },
};
export const fillTonal = {
  args: {
    type: 'fillTonal',
    label: '버튼명',
  },
};
export const ghost = {
  args: {
    type: 'ghost',
    label: '버튼명',
  },
};

// export const Secondary = {
//   args: {
//     label: '버튼명',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
