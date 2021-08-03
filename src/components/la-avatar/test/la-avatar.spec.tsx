import { newSpecPage } from '@stencil/core/testing';
import { LaAvatar } from '../la-avatar';

describe('la-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LaAvatar],
      html: `<la-avatar></la-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <la-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </la-avatar>
    `);
  });
});
