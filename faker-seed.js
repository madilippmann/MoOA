const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs')

const seedUsers = num => {
    let i = 0;

    while (i < num) {

        const user = {
            username: faker.internet.userName(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            hashedPassword: bcrypt.hashSync(faker.internet.password()),
            email: faker.internet.email(),
            // createdAt: faker.date.past().toDateString(),
            // updatedAt: faker.date.past().toDateString(),
        }

        console.log(user, ',')
        i++
    }
}

// seedUsers(5);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  console.log(getRandomInt(3));

const fakePost = num => {
    let i = 0;

    while (i < num) {
        const id = getRandomInt(28);
        const par = {
            user_id: id,
            path: faker.image.avatar(),
            title: faker.lorem.sentence(),
            // description: faker.lorem.paragraphs(3),
            description: faker.lorem.paragraph(),
        }

        console.log(par, ',')
        i++
    }
}

// fakePost(15);

const fakeComment = num => {
    let i = 0;

    while (i < num) {
        const id = getRandomInt(28);
        const postId = getRandomInt(15);
        const par = {
            user_id: id,
            post_id: postId,
            description: faker.lorem.paragraph(),
        }

        console.log(par, ',')
        i++
    }
}

fakeComment(15);
