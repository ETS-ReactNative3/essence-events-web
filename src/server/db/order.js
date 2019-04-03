const mongoose = require('mongoose');
const Schema = mongoose.Schema;

delete mongoose.models.user;
delete mongoose.modelSchemas.user;

const orderSchema = new Schema({
  items: { type: [Schema.Types.Mixed], required: true },
  email: { required: true, type: String },
  date: Date
});

const order = mongoose.model('Order', orderSchema);

module.exports = order;
