import * as isActive from './activityFn.js'
import * as singleSpa from 'single-spa'

singleSpa.registerApplication('navbar', () => SystemJS.import('@portal/navbar'), isActive.navbar);
singleSpa.registerApplication('apm', () => SystemJS.import('@portal/apm'), isActive.apm);
singleSpa.registerApplication('marketplace', () => SystemJS.import('@portal/marketplace'), isActive.marketplace);

singleSpa.start();
