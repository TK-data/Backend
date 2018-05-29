/**
 * MovieDataService
 *
 * @description :: Movie data helpers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/services
 */

module.exports = {

  createExampleAdmin: function () {
    const adminInput = {
      Email: 'admin@admin.com',
      Password: 'adminsen',
      Address: 'krok 80',
      Fname: 'Er',
      Lname: 'Ling'
    };

    User.create(adminInput).exec(function(err, user) {
      if (err) {
        sails.log(err);
      }
      sails.log(user);
      sails.log(user.UserID);
      Admin.create({UserID: user.UserID}).exec(function(err, admin) {
        sails.log(admin);
        if (err) {
          sails.log(err);
        } else {
          sails.log('admin user created');
        }
      });
    });
    sails.log('Hello buster');
  },

  createExampleCompanies: function () {
    const companyNames = [
      'Sparebank1',
      'Trondheim Kommune',
      'Bilfirma',
    ];

    for (let name of companyNames) {
      Company.create({CompanyName: name}).exec(function(err, company) {
        if (err) {
          sails.log(err);
        }
        sails.log(company);
      });
    }
  }
};
