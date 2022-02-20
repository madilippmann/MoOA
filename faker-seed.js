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
    return Math.ceil(Math.random() * max);
  }


const fakePost = num => {
    let i = 0;
    let imgId = 16;
    while (i < num) {
        const id = getRandomInt(28);

        const par = {
            user_id: id,
            path: `https://mooa-seed.s3.amazonaws.com/seed/${imgId}-image.png`,
            title: faker.lorem.sentence(),
            description: faker.lorem.paragraph(),
        }

        console.log(par, ',')
        i++
        imgId++
    }
}

//fakePost(11);

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


let likePairs = []

const fakeLikes = num => {
    let i = 0;

    while (i < num) {
        const user_id = getRandomInt(28)
        const post_id = getRandomInt(122)
        const duplicate = likePairs.find(like =>  like.user_id === user_id && like.post_id === post_id)
        if (duplicate) {
            continue;
        }
        const fakeLikeData = {
            user_id,
            post_id,
        } 
            console.log(fakeLikeData, ',')
            likePairs.push(fakeLikeData)
            i++
        }
        
    }

//fakeLikes(400)
// fakeComment(15);

const fakePairs = []
const fakeFollows = num => {
    let i = 0

    while (i < num) {
        const user_id = getRandomInt(28)
        let follower_id = getRandomInt(28)
        const duplicate = fakePairs.find(fake =>  fake.user_id === user_id && fake.follower_id === follower_id)
        if (duplicate) {
            continue;
        }
        const fakeFollowData = {
            user_id,
            follower_id,
        }
        console.log(fakeFollowData, ',')
        fakePairs.push(fakeFollowData)
        i++
    }
}

// fakeFollows(250)