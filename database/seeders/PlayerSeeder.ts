import { fakerVI } from '@faker-js/faker';

export default async () => {
  const amount = 100;

  for (let i = 0; i < amount; i++) {
    const data = {
      name: fakerVI.person.fullName(),
      phone: fakerVI.phone.number(),
      national_id: fakerVI.phone.imei(),
      spin: fakerVI.number.int({
        max: 15,
      }),
      can_spin: fakerVI.number.int({
        max: 20,
      }),
    };
    await strapi.db.query('api::player.player').create({
      data: data,
    });
  }
};
