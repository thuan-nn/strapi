/**
 * wheel service
 */

import { GiftTypeEnum } from '../../../enums/GiftTypeEnum';
import Gift from '../../gift/interfaces/gift.interface';
import Player from '../../player/interfaces/player.interface';

export default {
  randomGift: async () => {
    // const gifts = await strapi.db.query('api::gift.gift').findMany();

    const gifts = await strapi.db.connection.raw(
      `select * from gifts where published_at is not null and quantity > given`,
    );

    if (gifts) {
      const totalPercentage = gifts[0].reduce(
        (sum: number, item: Gift) => sum + item.win_rate,
        0,
      );

      let randomNumber = Math.random() * totalPercentage;

      for (const gift of gifts) {
        if (randomNumber <= gift.win_rate) {
          return gift;
        }

        randomNumber -= gift.win_rate;
      }

      return gifts[gifts.length - 1];
    }

    return [];
  },

  storeLottery: async (gift: Gift, player: Player) => {
    //update amount of gift
    await strapi.db.transaction(async () => {
      // update given to gifts
      await strapi.db.query('api::gift.gift').update({
        where: {
          id: gift.id,
        },
        data: {
          given: gift.given + 1,
        },
      });

      await strapi.db.query('api::player.player').update({
        where: {
          id: player.id,
        },
        data: {
          spin: player.spin - 1,
        },
      });

      // record lotteries
      await strapi.db.query('api::lottery.lottery').create({
        data: {
          gift_id: gift.id,
          player_id: player.id,
          is_win: gift.type != GiftTypeEnum.OTHER ? 1 : 0,
        },
      });
    });
  },
};
