import User from '../models/userModel.js'

const create = async (req, res) => {
  const { name, email, password } = req.body

  //   check if emai is already exists
  const getEmail = await User.findOne({ email: email })
  if (getEmail) return res.send('Email already exists')

  const newUser = new User({
    name,
    email,
    password,
  })

  try {
    const user = await newUser.save()
    if (user) res.json(user)
  } catch (err) {
    res.status(401).send(err)
  }
}

const list = async (req, res) => {
  try {
    const users = await User.find()
    return res.json(users)
  } catch (err) {
    return res.status(400).send(err)
  }
}

const update = async (req, res) => {
  const { id, email, name, password } = req.body

  try {
    const updateUser = await User.findOneAndUpdate(
      { _id: id },
      { $set: { email, name, password } }
    )
    if (updateUser) return res.status(200).json(updateUser)
    else return res.status(400).send('Error: User not found')
  } catch (err) {
    return res.status(400).send(err)
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.body

  try {
    const deleteUser = await User.findOneAndRemove({ _id: id })
    if (deleteUser) return res.status(200).send('User deleted')
    else return res.status(400).send('User not found')
  } catch (err) {
    return res.status(400).send(err)
  }
}

export default { create, list, update, deleteUser }
