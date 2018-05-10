module.exports = {
  attributes: {
    LogID: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    CarID: {
      type: 'int',
      defaultsTo: 0
    },
    UserID: {
      type: 'int',
      defaultsTo: 0
    },
    Km: {
      type: 'int',
      defaultsTo: 0
    },
    LocationFrom: {
      type: 'string',
      defaultsTo: null
    },
    LocationTo: {
      type: 'string',
      defaultsTo: null
    },
    Date: {
      type: 'date',
      defaultsTo: null
    },
    Cargo: {
      type: 'bit',
      defaultsTo: null
    },
    NoOfPassengers: {
      type: 'int',
      defaultsTo: 0
    },
    PassengerNames: {
      type: 'string',
      defaultsTo: null
    },
    Objective: {
      type: 'string',
      defaultsTo: null
    },
  }
};
