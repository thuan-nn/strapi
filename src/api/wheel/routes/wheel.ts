export default {
  routes: [
    {
      method: 'POST',
      path: '/wheel',
      handler: 'wheel.play',
      config: {
        policies: [],
        middlewares: [
          'api::wheel.validate',
          // 'api::wheel.user-can-spin',
        ],
        auth: false,
      },
    },
  ],
};
