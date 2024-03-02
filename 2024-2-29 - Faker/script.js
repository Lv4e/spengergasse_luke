const faker = require('faker');

const email = faker.internet.email();
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const animal = faker.animal.animal();

console.log(`Firstname: ${firstName}, last name: ${lastName}, Email: ${email}`);