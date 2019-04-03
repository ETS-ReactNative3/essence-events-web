const mongoose = require('mongoose');
const Schema = mongoose.Schema;

delete mongoose.models.user;
delete mongoose.modelSchemas.user;

const calendarSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const users = mongoose.model('Calendar', calendarSchema);

module.exports = users;
