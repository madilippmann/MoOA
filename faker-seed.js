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
            createdAt: faker.date.past().toDateString(),
            updatedAt: faker.date.past().toDateString(),
        }

        console.log(user, ',')
        i++
    }
}

seedUsers(19);