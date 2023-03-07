import type { App } from 'vue';
import * as components from './conponents';
import { version } from './package.json';

const install = function (app: App) {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value);
  });
};

export default install;
export * from './conponents';
export { version };