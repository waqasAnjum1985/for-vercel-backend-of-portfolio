const express = require("express");
const {
  getPortfolioData,
  updateIntro,
  updateAbout,
  addExperience,
  updateExperience,
  deleteExperience,
  addProject,
  updateProject,
  deleteProject,
  addCourse,
  updateCourse,
  deleteCourse,
  updateSidebar,
  updateContacts,
  adminLogin,
  adminLogout,
} = require("../controllers/portfolioController");

const { middleware } = require("../middleWares/middleware");

const portfolioRouter = express.Router();
// all data
portfolioRouter.get("/get-portfolio-data", getPortfolioData);
//update intro
portfolioRouter.post("/update-intro", middleware, updateIntro);
//update intro
portfolioRouter.post("/update-about", middleware, updateAbout);
// experience section
portfolioRouter.post("/add-experience", middleware, addExperience);
portfolioRouter.post("/update-experience", middleware, updateExperience);
portfolioRouter.post("/delete-experience", middleware, deleteExperience);

// project sectionk
portfolioRouter.post("/add-project", middleware, addProject);
portfolioRouter.post("/update-project", middleware, updateProject);
portfolioRouter.post("/delete-project", middleware, deleteProject);

// Courses section
portfolioRouter.post("/add-course", middleware, addCourse);
portfolioRouter.post("/update-course", middleware, updateCourse);
portfolioRouter.post("/delete-course", middleware, deleteCourse);

// Contact section
portfolioRouter.post("/update-contacts", middleware, updateContacts);

// Sidebar section
portfolioRouter.post("/update-sidebar", middleware, updateSidebar);

// Admin Login section
portfolioRouter.post("/admin-login", adminLogin);

// Admin Logout section
portfolioRouter.post("/admin-logout", middleware, adminLogout);

module.exports = portfolioRouter;
