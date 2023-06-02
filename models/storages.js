const mongoose = require('mongoose');

const StorageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
  },
}, {
  timestamps: true,
  versionKey: false,
});

export default mongoose.model('storages', StorageSchema);


