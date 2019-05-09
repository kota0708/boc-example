import { configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

// GatsbyのLinkをoverwriteするよう。
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';

window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

configure(loadStories, module);
