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
      {
        user_id: 18,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/16-image.png',
        title: 'Rerum odio eum quidem quibusdam possimus et.',
        description: 'Facilis illo incidunt ipsam reiciendis. Aspernatur sit dolore dolores voluptatem culpa earum. Error earum et quo dignissimos inventore. Consequatur et libero quam. Suscipit non aliquid sunt nobis.'
      } ,
      {
        user_id: 18,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/17-image.png',
        title: 'Consequatur enim corrupti sapiente fugit fugit sunt quo eligendi necessitatibus.',
        description: 'Natus ea dolorem eum doloremque aut. Aut commodi at sed deleniti iure vero in. Illum ducimus magni et voluptate consectetur. Laudantium dolorum dolorem.'
      } ,
      {
        user_id: 14,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/18-image.png',
        title: 'Optio perspiciatis numquam et eligendi.',
        description: 'Dolorum blanditiis non recusandae cumque qui. Quia odit quasi porro repellendus voluptatem molestias. Unde omnis ea consequatur distinctio. Corrupti ipsa aut eos. Officiis eius modi. Eius doloribus libero ipsum.'
      } ,
      {
        user_id: 16,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/19-image.png',
        title: 'Dolor consectetur qui dignissimos porro quis vel quisquam sit.',
        description: 'Cumque nobis distinctio sint debitis omnis ut optio reiciendis autem. Excepturi eos alias et quia at consequatur perspiciatis numquam est. Quo tempora tenetur.'
      } ,
      {
        user_id: 22,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/20-image.png',
        title: 'Et illum velit itaque ipsam et rerum voluptas hic sit.',
        description: 'Et qui architecto. Porro quo placeat nam nemo quas eos sed voluptatem aut. Est reiciendis voluptatum esse. Quo sit voluptatem neque veniam quis et autem velit. Minus impedit aspernatur consectetur aliquid earum eos corporis. Perferendis voluptas iste ea aut facilis vitae et.'
      } ,
      {
        user_id: 20,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/21-image.png',
        title: 'Molestiae quia nulla vel dignissimos aperiam nesciunt dolorem.',
        description: 'Dicta qui id maiores et sint corrupti voluptatibus et. Eaque rem sit. Minima consectetur quos. Ratione ducimus eaque. Ut saepe asperiores iusto atque sequi soluta dolor quasi.'
      } ,
      {
        user_id: 4,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/22-image.png',
        title: 'Aliquam dolorem et sunt.',
        description: 'Molestiae aspernatur aperiam necessitatibus doloribus ea dolor saepe numquam. Qui ex ut autem rerum et vero quod nihil. Omnis nulla dolore ipsa consectetur sed in. Beatae et iusto ut. Odio non hic dicta fugit in nisi sunt.'
      } ,
      {
        user_id: 6,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/23-image.png',
        title: 'Voluptas sit ullam.',
        description: 'Aliquid inventore dolores voluptatem voluptatem assumenda fuga eos. Distinctio cupiditate recusandae. Veniam est aut officiis accusamus enim fugiat et asperiores ut. Magni eos excepturi consequatur velit aspernatur. Et quia quam. Qui eligendi magni exercitationem hic repellat qui aspernatur deleniti aut.'
      } ,
      {
        user_id: 13,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/24-image.png',
        title: 'Cumque eum voluptatem sed vitae est.',
        description: 'Possimus nam non et est. Natus distinctio ut aut aspernatur impedit et debitis. Sunt eum tempora et ea recusandae nobis omnis.'
      } ,
      {
        user_id: 16,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/25-image.png',
        title: 'Doloremque repellat sunt perspiciatis eligendi voluptatibus alias qui dolorum.',
        description: 'Est eligendi unde molestias tenetur et. Voluptas aliquid suscipit ut aliquam et ab omnis est accusantium. Quis quam beatae explicabo eius. Est debitis corporis accusantium dolores vel non voluptatem.'
      } ,
      {
        user_id: 27,
        path: 'https://mooa-seed.s3.amazonaws.com/seed/26-image.png',
        title: 'Aperiam odio omnis id optio adipisci facilis eum porro ea.',
        description: 'Ex porro beatae distinctio. Expedita quis quia atque accusamus voluptatem aut quis. Dolore molestiae velit et enim cupiditate accusantium voluptatem ut unde. Magni ut minus molestiae deleniti et qui autem voluptatem dolorum. Odio quisquam voluptatem suscipit iusto rem a nobis. Ducimus sapiente est.'
      } ,


    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});

  }
};
