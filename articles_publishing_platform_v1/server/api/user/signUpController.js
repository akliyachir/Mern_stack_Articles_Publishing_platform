import User from '../../models/userModel.js';
import validator from 'validator';

const signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).json({ message: 'all fields must be filled' });
      return;
    }
    if (!validator.isEmail(email)) {
      res.status(400).json({ message: 'please enter a valid email' });
      return;
    }

    const user = await User.create({ email, password });
    console.log({ user });
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default signUp;
