import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    trim: true,
    required: 'email is requred',
    unique: 'Email already exists',
  },

  password: String,
})

export default mongoose.model('User', userSchema)
