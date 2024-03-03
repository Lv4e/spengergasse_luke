const faker = require('faker');

function generateData() {
    const email = faker.internet.email();
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const animal = faker.animal.animal();
    const city = faker.address.city();

    console.log(`Firstname: ${firstName}, last name: ${lastName}, Email: ${email} lives in ${city} and has a ${animal} as a pet.`);
}


for(let i = 0; i < 5; i++) {
    generateData();
}