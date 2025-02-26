const userModel = require('../models/userModel');

const getUsers = async (req, res) => {
  const users = await userModel.getUsers();
  res.json(users);
};

const getUserById = async (req, res) => {
  const user = await userModel.getUserById(req.params.id);
  user ? res.json(user) : res.status(404).json({ message: 'Usuário não encontrado' });
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  const newUser = await userModel.createUser(name, email);
  res.status(201).json(newUser);
};

const updateUser = async (req, res) => {
  const { name, email } = req.body;
  const updatedUser = await userModel.updateUser(req.params.id, name, email);
  updatedUser ? res.json(updatedUser) : res.status(404).json({ message: 'Usuário não encontrado' });
};

const deleteUser = async (req, res) => {
  await userModel.deleteUser(req.params.id);
  res.json({ message: 'Usuário deletado' });
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
