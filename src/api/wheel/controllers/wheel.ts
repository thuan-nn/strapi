/**
 * A set of functions called "actions" for `wheel`
 */
import WheelService from '../services/wheel';

export default {
  play: async (ctx) => {
    try {
      await ctx.validate({
        national_id: 'required|string',
      });

      const player = await strapi.db
        .query('api::player.player')
        .findOne({
          where: {
            national_id: ctx.request.body.national_id,
          },
        });

      if (player) {
        const gift = await WheelService.randomGift();

        if (gift) {
          await WheelService.storeLottery(gift, player);

          ctx.body = gift;
        } else {
          ctx.body = [];
        }
      }
    } catch (err) {
      ctx.body = err;
    }
  },
};
