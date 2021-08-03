import {Component, h, Prop, Watch} from '@stencil/core';
import {AvatarSizes} from "./la-button.enums";
import {PropValidationError} from "../../errors/PropValidationError";

@Component({
  tag: 'la-avatar',
  styleUrl: 'la-avatar.scss',
  shadow: false,
})
export class LaAvatar {
  @Prop() size: AvatarSizes = AvatarSizes.MEDIUM;
  @Prop() image: string;
  @Prop() text: string = '';
  @Prop() badge: string;

  get classes(): {[className: string]: boolean} {
    return {
      'la-avatar': true,
      [`la-avatar--${this.size}`]: !!this.size,
    }
  }

  componentWillLoad() {
    this.validateImageOrText();
  }

  validateImageOrText() {
    if (!this.image && !this.text) {
      throw new PropValidationError('la-avatar', 'Either text or image should be defined 2');
    }
  }

  get computedBadgeLabel() {
    const truncatedBadgeLabel = `99<small>+</small>`;
    return this.badge.length > 2 ? truncatedBadgeLabel : this.badge
  }

  @Watch('text')
  validateText() {
    this.validateImageOrText();
  }

  @Watch('image')
  validateImage() {
    this.validateImageOrText();
  }

  render() {
    return (
      <div class={this.classes}>
        {this.image
          ? <img class="la-avatar__image" src={this.image} />
          : <span>{this.text}</span>
        }
        {this.badge &&
          <div class="la-avatar__badge" innerHTML={this.computedBadgeLabel} />
        }
      </div>
    );
  }

}
