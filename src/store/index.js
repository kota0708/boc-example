import configureStoreDev from './configure-store-dev';
import configureStoreProd from './configure-store-prod';

const selectedConfigureStore = process.env.NODE_ENV === 'production'
  ? configureStoreProd
  : configureStoreDev;
// eslint-disable-next-line import/prefer-default-export
export const { configureStore } = selectedConfigureStore;
