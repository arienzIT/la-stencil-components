import {ButtonSizes, ButtonVariants} from "./la-button.enums";

export default {
  title: 'Components/Button',
  args: {
    size: ButtonSizes.MEDIUM,
    variant: ButtonVariants.PRIMARY,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: Object.values(ButtonSizes),
      }
    },
    variant: {
      control: {
        type: 'select',
        options: Object.values(ButtonVariants),
      }
    },
    animated: {
      control: {
        type: 'boolean'
      }
    }
  }
}

export const Button = args => `
<la-button theme="${args.theme}" size="${args.size}" variant="${args.variant}" animated="${args.animated}">
    Click me
</la-button>
`;
