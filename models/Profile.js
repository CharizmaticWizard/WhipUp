const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  company: {
    type: String,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  bio: {
    type: String,
  },
  projects: [
    {
      img: {
        data: Buffer,
        contentType: String,
      },
      title: {
        type: String,
        required: true,
      },
      tags: {
        type: [String],
        required: true,
      },
      date: {
        type: Date,
      },
      description: {
        type: String,
        required: true,
      },
      link: {
        type: String,
      },
    },
  ],
  social: {
    linkedin: {
      type: String,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    dribbble: {
      type: String,
    },
    behance: {
      type: String,
    },
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('profile', ProfileSchema);
