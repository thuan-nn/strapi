/**
 * A set of functions called "actions" for `wheel`
 */
import WheelService from '../services/wheel';

export default {
  play: async (ctx, next) => {
    try {
      await ctx.validate({
        national_id: 'required|string',
      });

      // const player = await strapi.db
      //   .query('api::player.player')
      //   .findOne({
      //     where: {
      //       national_id: ctx.request.body.national_id,
      //     },
      //   });

      const player = ctx.get('player');

      console.log(player);

      if (player) {
        const gift = await WheelService.randomGift();

        await WheelService.storeLottery(gift, player);

        ctx.body = gift;
      }
    } catch (err) {
      ctx.body = err;
    }
  },
};
