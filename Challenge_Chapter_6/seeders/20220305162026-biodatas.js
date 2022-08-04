'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('biodatas',[
      {
        firstName :"John",
        lastName: "Doe",
        gender: "Male",
        address: "Sesame Street 123",
        dateOfBirth: "02-03-2014",
        email: "Johndoe@gmail.com",
        phone: "081234567890",
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        firstName :"Hanna",
        lastName: "Anisa",
        dateOfBirth: "28-10-2014",
        gender: "Female",
        address: "Sesame Street 321",
        email: "Hannaanisa@gmail.com",
        phone: "0812987654321",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('biodatas')
  }
};
