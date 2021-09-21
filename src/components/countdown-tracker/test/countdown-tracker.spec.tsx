import { newSpecPage } from '@stencil/core/testing';
import { CountdownTracker } from '../countdown-tracker';

describe('countdown-tracker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CountdownTracker],
      html: `<countdown-tracker></countdown-tracker>`,
    });
    expect(page.root).toEqualHtml(`
      <countdown-tracker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </countdown-tracker>
    `);
  });
});
