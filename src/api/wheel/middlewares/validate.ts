/**
 * `Wheel` middleware
 */

import niv from 'node-input-validator';

export default (config) => {
  return niv.koa();
};
