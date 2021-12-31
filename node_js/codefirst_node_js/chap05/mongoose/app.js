const mongoose = require('mongoose');

// Connecting
mongoose
  .connect('mongodb://127.0.0.1:27017/roadbook_nodejs', {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error(err);
  });

// Defining Schema
const customerSchema = mongoose.Schema(
  {
    name: 'string',
    age: 'number',
    gender: 'string',
  },
  {
    collection: 'newCustomer',
  },
);

// Schema -> Model
const Customer = mongoose.model('Schema', customerSchema);

// Generate Instance
const customer = new Customer({
  name: '홍길동',
  age: 30,
  gender: '남',
});

// Save Data into MongoDB
customer
  .save()
  .then(() => {
    console.log(customer);
  })
  .catch((err) => {
    console.error(err);
  });
