export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    new Promise((resolve, rejects) => {
      return strapi.db.transaction(async () => {
        try {
          // await GiftSeeder();
          // await PlayerSeeder();
        } catch (err) {
          rejects(err);
        }
      });
    }).catch((err) => {
      console.log('\n');
      console.log('Error While generating Seed: \n', err);
    });
  },
};
