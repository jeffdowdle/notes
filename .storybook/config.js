import '../src/index.css';
import { configure } from '@storybook/react';

const req = require.context('../src/ui', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
