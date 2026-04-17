const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  contact,
  project,
  course,
  intro,
  about,
  experience,
  sidebar,
  user,
} = require("../models/portfolioModel.js");
// get portfolio data
exports.getPortfolioData = async (req, res) => {
  try {
    const Intro = await intro.find();
    const About = await about.find();
    const Experience = await experience.find();
    const Project = await project.find();
    const Course = await course.find();
    const Contact = await contact.find();
    const Sidebar = await sidebar.find();
    const User = await user.find();

    res.status(201).json({
      intro: Intro[0],
      about: About[0],
      experiences: Experience,
      projects: Project,
      courses: Course,
      contact: Contact[0],
      sidebar: Sidebar[0],
      user: User[0],
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "error while getting potfolio data",
      error,
    });
  }
};
// intro section
exports.updateIntro = async (req, res) => {
  try {
    const Intro = await intro.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body,
      {
        new: true,
      },
    );
    res.status(201).json({
      data: Intro,
      success: true,
      message: "intro updated successfully",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "error while updating intro",
    });
  }
};

//about section
exports.updateAbout = async (req, res) => {
  try {
    const About = await about.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body,
      {
        new: true,
      },
    );
    res.status(201).json({
      data: About,
      success: true,
      message: "About updated successfully",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "error while updating About",
    });
  }
};
//Experience section
exports.addExperience = async (req, res) => {
  try {
    const Experience = new experience(req.body);
    await Experience.save();

    res.status(201).json({
      data: Experience,
      success: true,
      message: "Experience added successfully",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "error while updating Experience",
    });
  }
};

exports.updateExperience = async (req, res) => {
  try {
    const Experience = await experience.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body,
      {
        new: true,
      },
    );
    res.status(201).json({
      data: Experience,
      success: true,
      message: "Experience updated successfully",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "error while updating Experience",
    });
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    const Experience = await experience.findOneAndDelete({ _id: req.body._id });
    res.status(201).json({
      data: Experience,
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Internal server error while deleting Experience",
    });
  }
};
//project section

exports.addProject = async (req, res) => {
  try {
    const Project = new project(req.body);
    await Project.save();

    res.status(201).json({
      data: Project,
      success: true,
      message: "project added successfully",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "error while adding project",
    });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const Project = await project.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body,
      {
        new: true,
      },
    );
    res.status(201).json({
      data: Project,
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "error while updating Project",
    });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const Project = await project.findOneAndDelete({ _id: req.body._id });
    res.status(201).json({
      data: Project,
      success: true,
      message: "project deleted successfully",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Internal server error while deleting Project",
    });
  }
};

//Contact section

exports.updateContacts = async (req, res) => {
  try {
    const Contact = await contact.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body,
      {
        new: true,
      },
    );
    res.status(201).json({
      data: Contact,
      success: true,
      message: "Contact updated successfully",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "error while updating Contacts",
    });
  }
};

//Course section

exports.addCourse = async (req, res) => {
  try {
    const Course = new course(req.body);
    await Course.save();

    res.status(201).json({
      data: Course,
      success: true,
      message: "Course added successfully",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "error while adding course",
    });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const Course = await course.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body,
      {
        new: true,
      },
    );
    res.status(201).json({
      data: Course,
      success: true,
      message: "Course updated successfully",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "error while updating Course",
    });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const Course = await course.findOneAndDelete({ _id: req.body._id });
    res.status(201).json({
      data: Course,
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Internal server error while deleting Course",
    });
  }
};

//Sidebar section
exports.updateSidebar = async (req, res) => {
  try {
    const Sidebar = await sidebar.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body,
      {
        new: true,
      },
    );
    res.status(201).json({
      data: Sidebar,
      success: true,
      message: "Sidebar updated successfully",
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "error while updating Sidebar",
    });
  }
};

//Admin login section section
exports.adminLogin = async (req, res) => {
  try {
    const User = await user.findOne({
      userName: req.body.userName,
    });
    if (!User) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(req.body.password, User.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        messageL: "InValid credentials",
      });
    }

    const token = jwt.sign(
      { id: User._id, userName: User.userName },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      },
    );

    return res
      .status(201)
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 86600000,
        sameSite: "none",
      })
      .json({
        User,
        token,
        success: true,
        message: "User login successfully",
      });
  } catch (error) {
    return res.status(501).json({
      success: false,
      message: "error while logging in User",
    });
  }
};

// logout section section
exports.adminLogout = async (req, res) => {
  try {
    res
      .status(201)
      .clearCookie("token", {
        httpOnly: true,
        secure: false,
        maxAge: 86600000,
        sameSite: "lax",
      })
      .json({
        success: true,
        message: "User logOUT successfully",
      });
  } catch (error) {
    return res.status(501).json({
      success: false,
      message: "error while logging OUT User",
    });
  }
};
