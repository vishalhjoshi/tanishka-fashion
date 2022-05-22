import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Rajesh Joshi',
    email: 'rajesh@tanishkafashion.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Vishal Joshi',
    email: 'vishal@tanishkafashion.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Test User',
    email: 'testuser@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
