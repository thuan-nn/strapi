import { GiftTypeEnum } from '../../src/enums/GiftTypeEnum';

export default async () => {
  const now = new Date().toISOString();

  const data = [
    {
      name: 'Xe máy Honda Vision',
      quantity: 3,
      win_rate: 1,
      order: 1,
      type: GiftTypeEnum.BIKE,
      publishedAt: now,
    },
    {
      name: 'Vàng 1 chỉ',
      quantity: 12,
      win_rate: 1,
      order: 5,
      type: GiftTypeEnum.GOLD,
      publishedAt: now,
    },
    {
      name: 'Thẻ quà tặng Got It 1,000,000 đồng',
      quantity: 40,
      win_rate: 100,
      order: 3,
      type: GiftTypeEnum.VOUCHER,
      publishedAt: now,
    },
    {
      name: 'Thẻ quà tặng Got It 800,000 đồng',
      quantity: 60,
      win_rate: 100,
      order: 7,
      type: GiftTypeEnum.VOUCHER,
      publishedAt: now,
    },
    {
      name: 'Thẻ quà tặng Got It 600,000 đồng',
      quantity: 80,
      win_rate: 100,
      order: 2,
      type: GiftTypeEnum.VOUCHER,
      publishedAt: now,
    },
    {
      name: 'Thẻ quà tặng Got It 400,000 đồng',
      quantity: 130,
      win_rate: 100,
      order: 6,
      type: GiftTypeEnum.VOUCHER,
      publishedAt: now,
    },
    {
      name: 'Thẻ quà tặng Got It 200,000 đồng',
      quantity: 210,
      win_rate: 100,
      order: 8,
      type: GiftTypeEnum.VOUCHER,
      publishedAt: now,
    },
    {
      name: 'Chúc bạn may mắn lần sau',
      quantity: 1000,
      win_rate: 100,
      order: 4,
      type: GiftTypeEnum.OTHER,
      publishedAt: now,
    },
  ];

  for (let i = 0; i < data.length; i++) {
    await strapi.db.query('api::gift.gift').create({
      data: data[i],
    });
  }
};
