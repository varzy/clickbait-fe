import * as _throttle from 'lodash/throttle';

export const windowResize = _throttle(cb => window.addEventListener('resize', cb));
