import { newSpecPage } from '@stencil/core/testing';
import { LaButton } from '../la-button';

describe('la-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LaButton],
      html: `<la-button></la-button>`,
    });
    expect(page.root).toEqualHtml(`
      <la-button>
        <mock:shadow-root>
           <button class="la-button la-button--medium la-button--plain la-button--primary la-button--smoothed">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </la-button>
    `);
  });

  it('should invoke method on click', async () => {
    const mockCallback = jest.fn();

    const page = await newSpecPage({
      components: [LaButton],
      html: `<la-button></la-button>`,
    });

    const button = page.root;
    page.root.addEventListener('click', mockCallback);

    await button.click();
    expect(mockCallback).toHaveBeenCalled();
  })
});
