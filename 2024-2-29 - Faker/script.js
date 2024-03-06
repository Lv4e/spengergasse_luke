const faker = require('faker');

function generateData() {
    const email = faker.internet.email();
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const jobarea = faker.name.jobArea();
    const city = faker.address.city();

    console.log(`Firstname: ${firstName}, last name: ${lastName}, Email: ${email} lives in ${city} and works in ${jobarea}.`);
}


for(let i = 0; i < 10; i++) {
    generateData();
}