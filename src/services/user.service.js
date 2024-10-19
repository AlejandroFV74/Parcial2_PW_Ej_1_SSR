const {save, User} = require('../models/user.model');

const addNewUser = ({ name, age, email }) => {
  const newUser= new User(name, age, email)
  return save(newUser);
};

module.exports = {
addNewUser
}