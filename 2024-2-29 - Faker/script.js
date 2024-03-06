const faker = require('faker');

function generateData() {
    const email = faker.internet.email();
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const sextype = faker.person.sextype();
    const city = faker.address.city();

    console.log(`Firstname: ${firstName}, last name: ${lastName}, Email: ${email} lives in ${city} and is a ${sextype}`);
}


for(let i = 0; i < 9; i++) {
    generateData();
}