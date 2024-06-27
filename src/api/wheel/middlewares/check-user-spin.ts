/**
 * `CheckUserSpin` middleware
 */

import { Strapi } from '@strapi/strapi';

export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    const player = await strapi.db
      .query('api::player.player')
      .findOne({
        where: {
          national_id: ctx.request.body.national_id,
        },
      });

    if (!player) {
      return (ctx.response.body = 'User Is Not Exist');
    }

    if (player.spin >= player.can_spin) {
      return (ctx.response.body = 'Is not enough number of turn');
    }

    ctx.set('player', player);

    return next();
  };
};
