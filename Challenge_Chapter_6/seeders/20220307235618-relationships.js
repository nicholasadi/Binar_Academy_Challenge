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
   await queryInterface.bulkInsert('relationships',[
     {
      gameId: 1,
      biodataId: 2,
      historyId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      gameId: 2,
      biodataId: 1,
      historyId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      gameId: 1,
      biodataId: 2,
      historyId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      gameId: 2,
      biodataId: 1,
      historyId: 2,
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
    await queryInterface.bulkDelete('relationships')
  }
};
