const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  wellcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  lottieURL: {
    type: String,
    required: true,
  },

  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
});

const contactSchema = new mongoose.Schema({
  lottieURL: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const sidebarSchema = new mongoose.Schema({
  watsapp: {
    type: String,
    required: true,
  },
  facebook: {
    type: String,
    required: true,
  },
  gmail: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  githubb: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = {
  intro: mongoose.model("intros", introSchema),
  about: mongoose.model("abouts", aboutSchema),
  experience: mongoose.model("experiences", experienceSchema),
  project: mongoose.model("projects", projectSchema),
  course: mongoose.model("courses", courseSchema),
  contact: mongoose.model("contacts", contactSchema),
  sidebar: mongoose.model("sidebars", sidebarSchema),
  user: mongoose.model("users", userSchema),
};
