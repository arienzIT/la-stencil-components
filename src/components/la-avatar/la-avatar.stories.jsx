import {AvatarSizes} from "./la-button.enums";

export default {
  title: 'Components/Avatar',
  args: {
      size: AvatarSizes.MEDIUM,
      badge: '',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: Object.values(AvatarSizes)
      }
    },
    badge: {
      control: {
        type: 'text'
      }
    }
  }
}

export const Avatar = (args) => `<la-avatar badge="${args.badge}" size="${args.size}" image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" />`;
