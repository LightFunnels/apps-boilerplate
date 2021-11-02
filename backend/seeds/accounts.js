
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {
          id: 1,
          lightfunnels_account_id: 1,
          lightfunnels_token: "app_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsiaWQiOjN9LCJhY2NvdW50Ijp7ImlkIjoxfSwiYXV0aG9yaXphdGlvbiI6eyJpZCI6NH0sImlhdCI6MTYzNTY4MTEyOX0.C0NeoIxMzP9CXtMeCkOJtBgraIpIo5MlEHPjh8Iwn70",
        },
      ]);
    });
};
