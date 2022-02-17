'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Posts', [
      {
        user_id: 1,
        path: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F11%2F19%2Fheader-beyond-monet-IMMERSEMONET1121.jpg',
        title: '\'Beyond Monet\' immersive art exhibit is coming to Miami',
        description: 'If you\'ve ever dreamed of floating alongside Claude Monet\'s famous Water Lilies, wandering amid the his fields of Poppies, or capturing the colors of one of his sunsets — you\'ll soon be able to do just that\.',
        createdAt: new Date(),
        updatedAt: new Date(),

      } ,
      {
        user_id: 1,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/25-image.png',
        title: 'Alec has many chairs',
        description: 'If you have never seen the chair collections of mine, you should start from now. This would be the best chance to see the spectacular chairs!',
        createdAt: new Date(),
        updatedAt: new Date(),

      } ,
      {
        user_id: 23,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/01-image.png',
        title: 'Odio ratione sunt odit ut molestiae.',
        description: 'Molestiae illum corporis enim dolor. Consequatur sit dignissimos deserunt molestiae dolorem. Placeat et sit dolorem at incidunt cupiditate quis. Aperiam harum dolorem ipsum.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 10,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/02-image.png',
        title: 'Magnam quis suscipit quis quaerat odit in.',
        description: 'Ut vel doloribus et numquam architecto eum et ea pariatur. Vel nemo ipsum tempore ut. Voluptates ut eos consequatur sint. Itaque facilis id cumque.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 4,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/03-image.png',
        title: 'Et sunt accusamus doloremque ea.',
        description: 'In modi cumque dolorem dolores autem id ut ratione culpa. Perferendis quia laudantium mollitia. Qui eum minima. Corrupti id molestias amet assumenda omnis.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 8,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/04-image.png',
        title: 'Nihil non dolor ducimus.',
        description: 'Error labore qui ratione. Qui molestias inventore. Quas ducimus ut quam aliquid expedita consectetur non. Voluptatem et est veritatis dolor ut eveniet dolore ut.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 5,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/05-image.png',
        title: 'Omnis doloribus voluptatum rem.',
        description: 'Eum accusantium eveniet quos alias mollitia nesciunt. Corporis quas nostrum. Non ullam itaque saepe. Dicta non vel qui dolores. Voluptatem cum doloribus et omnis consequatur minus.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 13,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/06-image.png',
        title: 'Nam accusamus dolore ipsam ipsum optio possimus.',
        description: 'Amet voluptas quia consequatur. Doloribus necessitatibus molestiae quo beatae qui. Suscipit illo molestiae voluptatum repudiandae esse in praesentium aliquid tempore. Eos non eaque dolorum non ab provident expedita non nulla. Rerum vero atque molestiae voluptas accusamus laboriosam pariatur ut.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 24,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/07-image.png',
        title: 'Saepe vitae qui reiciendis qui et aut quia quidem.',
        description: 'Expedita ex expedita. Laudantium explicabo ut eum rem. Dolore rem repellat animi facere molestiae et. Aliquam sequi voluptas saepe explicabo consequuntur fugiat.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 16,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/08-image.png',
        title: 'Omnis ut voluptates hic dolores ut dignissimos adipisci repudiandae error.',
        description: 'Cum molestiae quia eos consequatur dolores quia soluta vero modi. Et temporibus laudantium recusandae quia. Voluptatem iure fuga aut nulla. Nemo quis dicta. Consequuntur velit explicabo iste consectetur magnam id distinctio harum ducimus. Ut enim reprehenderit.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 11,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/09-image.png',
        title: 'Quis nihil iusto ut dignissimos ut esse ex ea.',
        description: 'Facilis recusandae error illum explicabo. Alias tempore repellat laboriosam iusto. Doloribus sunt necessitatibus qui qui quidem.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 18,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/10-image.png',
        title: 'Blanditiis qui accusantium aut.',
        description: 'Minima eveniet aut in rem minima ut a. Quaerat quia quo iure accusamus voluptas rem et. Aut aut aut est commodi perspiciatis culpa. Excepturi quia molestiae. Pariatur praesentium doloribus. Omnis odit saepe non tempora quia occaecati quidem.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 7,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/11-image.png',
        title: 'Consequuntur modi delectus quae illum consequuntur saepe ut tempora.',
        description: 'Tenetur impedit consequatur non voluptatibus incidunt. Neque sint dolorum saepe esse in repudiandae nesciunt necessitatibus quo. Sint ullam aliquid aut unde cumque alias. Reiciendis impedit est id culpa dignissimos beatae et.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 23,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/12-image.png',
        title: 'Est quidem qui corrupti velit est sit eligendi molestiae.',
        description: 'Ducimus architecto est nesciunt aut. Quam fugiat officia. Quis vitae et impedit blanditiis cupiditate nisi aut. Ut fugit molestiae qui. Earum explicabo beatae esse eaque rerum.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 11,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/13-image.png',
        title: 'Cum eveniet nemo fuga et odio ut iste.',
        description: 'Accusantium aut dolores vel eius. Aliquam dignissimos ad. Magnam numquam et animi odio architecto impedit aut reiciendis eos. Maxime expedita nisi repellat.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 21,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/14-image.png',
        title: 'Culpa dolorem a officia debitis odit neque tempore non.',
        description: 'A vel fuga quia rerum natus sint. Beatae sequi autem adipisci repellendus dicta dolorem vel tenetur cum. Quia ad saepe omnis non tempora. Inventore totam modi doloribus rerum.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        user_id: 9,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/15-image.png',
        title: 'Provident maiores voluptatum in repellendus animi.',
        description: 'Et minus nesciunt assumenda. Nemo facere voluptatem. Commodi est aliquam asperiores inventore aut.',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});

  }
};
