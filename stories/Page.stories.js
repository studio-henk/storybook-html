import { within, userEvent } from '@storybook/testing-library';
import { createPage } from './Page';

export default {
  title: 'Example/Page',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
    backgrounds: {
      grid: {
        cellSize: 28,
        opacity: 0.25,
        cellAmount: 1,
        offsetX: 28, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        offsetY: 28, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      },
    },
  }
};

const Template = () => createPage();

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/html/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};
