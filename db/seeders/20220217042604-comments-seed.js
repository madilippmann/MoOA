'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Comments', [
      {
        user_id: 28,
        post_id: 1,
        comment: 'Nice, you are so talented.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 17,
        post_id: 1,
        comment: 'OMG, this is the most beautiful chair I have ever seen!!',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 17,
        post_id: 14,
        comment: 'Soluta quia quasi perferendis aut eos. In voluptate maiores quia qui fugiat ea ut expedita. Et ullam est voluptates reiciendis doloribus doloribus. Qui vel quia itaque sint expedita et non est sit. Repellat et autem hic minus. Cum delectus veritatis ab repellat dolores corrupti aliquid et.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 25,
        post_id: 11,
        comment: 'Non unde ut. Voluptatibus provident vero sequi. Sed maiores eum aut recusandae totam et eligendi est. Nesciunt qui fuga eos culpa nihil quibusdam rerum.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 23,
        post_id: 2,
        comment: 'Asperiores doloribus possimus rem at sunt sit officia. Mollitia et saepe. Aut et fuga eos. Vitae rerum sed sunt consequatur eligendi natus eos.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 17,
        post_id: 12,
        comment: 'In illo officia sapiente occaecati voluptas neque. Ut unde et sed amet vel ullam. Debitis aut officiis quia ab atque adipisci qui. Ratione beatae ipsum eum ratione occaecati et architecto ab. Illo voluptates temporibus magnam velit.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 26,
        post_id: 10,
        comment: 'Officiis maxime cupiditate ullam est voluptas rerum reiciendis ullam. Eos et blanditiis qui. Repellendus dolores veniam velit minima.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 24,
        post_id: 10,
        comment: 'Tenetur reprehenderit reprehenderit eos voluptate voluptatibus. Rerum quia commodi rerum ipsum vel fuga voluptatibus aut asperiores. Enim provident officia aspernatur ducimus quia officiis cum. Debitis vel asperiores eos laudantium et autem voluptas. Et asperiores alias doloremque nam.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 23,
        post_id: 7,
        comment: 'Distinctio eos nulla qui tempora eum. Unde et ut necessitatibus. Rem aut a reprehenderit.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 27,
        post_id: 6,
        comment: 'Et perspiciatis qui itaque. Aut quibusdam accusamus voluptas ea consequatur quod sed. Quaerat iusto nisi animi est. Quam velit ex quod et assumenda dignissimos. Adipisci et sunt ipsam aut omnis. Recusandae consequatur excepturi.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 27,
        post_id: 11,
        comment: 'Minima et quidem rerum quibusdam consequatur. Vel aut natus nobis dolorem. Sed quis explicabo ducimus veniam fuga.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 1,
        post_id: 2,
        comment: 'Aliquid temporibus sint sit quas vero omnis nobis nam. Placeat error similique ut quo consequatur sint dolorem nulla sint. Laborum ut error iusto dolorum ut ea eaque facilis. Eum qui placeat libero eaque. Laboriosam facilis neque non. Sed et nobis blanditiis sapiente omnis itaque rerum culpa error.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 9,
        post_id: 2,
        comment: 'Facere sed laudantium hic qui quaerat consequatur nemo. Repellendus rerum repudiandae corrupti facilis laboriosam consequatur iusto excepturi impedit. Corrupti est maiores est. Est sint ea ut ullam facere consequatur. Non sit officiis adipisci dolorem est labore magni minus. Accusantium magnam vero nostrum sed quos atque consequatur necessitatibus.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 27,
        post_id: 3,
        comment: 'Voluptas suscipit quasi quos sequi repellat sit repellat. Quisquam amet ex sed. Quo sit voluptas sit. Dolores mollitia ipsam itaque odio. Praesentium eos dolorem tempore est itaque. Accusamus et sapiente fugiat.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 13,
        post_id: 10,
        comment: 'Est quibusdam quod. Sunt numquam vel impedit voluptas explicabo qui quisquam sit. Odit voluptas corporis aliquam repellendus quibusdam aliquid. Itaque id rerum perferendis.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 14,
        post_id: 1,
        comment: 'Hic optio voluptatem sit aut quia occaecati exercitationem eum quibusdam. Tenetur alias fugit laudantium quia et possimus. Nihil et pariatur id qui quidem. Omnis saepe doloribus et deserunt. Voluptatem inventore est explicabo consequatur odio.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 5,
        post_id: 3,
        comment: 'Dolorum et nostrum ut a blanditiis cupiditate debitis quia nostrum. Facilis sunt rerum blanditiis. Quod est mollitia labore. Quo architecto aspernatur et magni blanditiis sed ipsum voluptas. Ut rem vitae voluptatibus mollitia. Molestias aliquam ratione voluptas sed earum expedita ut omnis accusamus.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Comments', null, {});

  }
};
