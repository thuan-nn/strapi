/**
 * `user-can-spin` middleware
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

    if (player && player?.spin >= player?.can_spin) {
      return (ctx.body = 'Is Not Enough Turn To Play');
    }

    await next();
  };
};
