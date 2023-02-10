import User from '../../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

const createToken = (id) => {
  return jsonwebtoken.sign({ id }, process.env.NOT_A_SECRET, {
    expiresIn: '3d',
  });
};

const signUp = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
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
        message: 'Too short! (she said...) Must be at least 8 characters.',
      });
      return;
    }

    //-- hash and register
    const salt = await bcrypt.genSalt(13);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({ email, password: hash });

    // -- generate token

    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default signUp;
