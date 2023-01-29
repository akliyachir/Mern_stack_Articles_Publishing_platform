import User from '../../models/userModel.js';
import validator from 'validator';

const signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).json({ message: 'all fields must be filled' });
      return;
    }

    const exists = await User.findOne({ email });

    if (exists) {
      res.status(400).json({ message: 'email already in use' });
      return;
    }

    if (!validator.isEmail(email)) {
      res.status(400).json({ message: 'please enter a valid email' });
      return;
    }
    if (password.length < 9) {
      res.status(400).json({
        message: 'Must be at least 8 characters.',
      });
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
