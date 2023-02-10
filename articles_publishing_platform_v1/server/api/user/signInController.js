import User from '../../models/userModel.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

const createToken = (id) => {
  return jsonwebtoken.sign({ id }, process.env.NOT_A_SECRET, {
    expiresIn: '3d',
  });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).json({ message: 'all fields must be filled' });
      return;
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ message: 'incorrect email adress' });
      return;
    }

    const match = await bcrypt.compare(password, user.password);

    if (match === false) {
      res.status(400).json({ message: 'incorrect password' });
      return;
    }
    const { name } = user;

    if (match === true) {
      const token = createToken(user._id);
      res.status(200).json({ name, email, token });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default signIn;
