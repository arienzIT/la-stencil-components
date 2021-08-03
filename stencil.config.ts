import {Config} from '@stencil/core';
import {sass} from "@stencil/sass";

export const config: Config = {
  namespace: 'components',
  globalStyle: 'src/styles/variables.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'assets/images' }
      ]
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass(),
  ],
};
