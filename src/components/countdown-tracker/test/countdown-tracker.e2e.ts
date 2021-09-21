import { newE2EPage } from '@stencil/core/testing';

describe('countdown-tracker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<countdown-tracker></countdown-tracker>');

    const element = await page.find('countdown-tracker');
    expect(element).toHaveClass('hydrated');
  });
});
