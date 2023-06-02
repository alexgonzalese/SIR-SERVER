const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    mediaId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    rol: {
      type: { enum: ['admin', 'user'] },
      default: 'user',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export default mongoose.model('users', userSchema);
