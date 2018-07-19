import { PATHS } from './setup';

export default {
  entry: {
    app: [ `${PATHS.app}/index.js` ],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: PATHS.build,
    filename: 'app.bundle.js'
  },
  resolve: {
    modules: PATHS.resolvePaths
  }
};
