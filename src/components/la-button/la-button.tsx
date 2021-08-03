import {Component, h, Prop} from '@stencil/core';
import {ButtonSizes, ButtonVariants} from "./la-button.enums";

@Component({
  tag: 'la-button',
  styleUrl: 'la-button.scss',
  shadow: false,
})
export class LaButton {
  @Prop() size: ButtonSizes = ButtonSizes.MEDIUM;
  @Prop() variant: ButtonVariants = ButtonVariants.PRIMARY;
  /** @Prop animated - animate component shadow on hover **/
  @Prop() animated: boolean = true;

  get classes(): {[className: string]: boolean} {
    return {
      'la-button': true,
      [`la-button--${this.size}`]: !!this.size,
      [`la-button--${this.variant}`]: !!this.variant,
      [`la-button--animated`]: !!this.animated,
    }
  }

  render() {
    return (
      <button class={this.classes}>
        <slot></slot>
      </button>
    );
  }

}
