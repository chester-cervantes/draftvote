require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/vote',
    { useNewUrlParser: true, useUnifiedTopology: true });

const db = require('./models');

const users = [
    { username: 'username', password: 'password'},
    { username: 'bob', password: 'password'}
];

const polls = [
    {
        questions: 'Which team won draft?',
        options: ['Blue', 'Red'],
        topBlue: "Aatrox",
        jungleBlue: "Annie",
        midBlue: "Blitzcrank",
        botBlue: "Anivia",
        supportBlue: "Bard",
        topRed: "Ashe",
        jungleRed: "Braum",
        midRed: "Camille",
        botRed: "Caitlyn",
        supportRed: "Akali"
    },
    {
        questions: 'Which team won draft?',
        options: ['Blue', 'Red'],
        topBlue: "Corki",
        jungleBlue: "Darius",
        midBlue: "Blitzcrank",
        botBlue: "Anivia",
        supportBlue: "Bard",
        topRed: "Ashe",
        jungleRed: "Diana",
        midRed: "Camille",
        botRed: "Caitlyn",
        supportRed: "Evelynn"
    }
];
const seed = async () => {
    try {
        await db.User.remove();
        console.log('DROP ALL USERS');

        await db.Poll.remove();
        console.log('DROP ALL POLLS');

        await Promise.all(
            users.map(async user => {
                const data = await db.User.create(user);
                await data.save();
            }),
        );
        console.log('CREATED USERS', JSON.stringify(users));

        await Promise.all(
            polls.map(async poll => {
                poll.options = poll.options.map(option => ({ option, votes: 0 }));
                const data = await db.Poll.create(poll);
                const user = await db.User.findOne({ username: 'username' });
                data.user = user;
                user.polls.push(data._id);
                await user.save();
                await data.save();
            }),
        );
        console.log('CREATED POLLS', JSON.stringify(polls));
    } catch (err) {
        console.error(err);
    }
};

seed();