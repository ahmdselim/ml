import React, { useEffect } from "react";
import HomePage from "./Pages/HomePage/HomeLogin";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage";
import AddProjectPage from "./Pages/AddProjectPage/AddProjectPage";
import AdminHomePage from "./Pages/Admin/Home/AdminHomePage";
import AdminUsersPage from "./Pages/Admin/AdminUsersPage/AdminUsersPage";
import AdminProjectsPage from "./Pages/Admin/AdminProjectsPage/AdminProjectsPage";
import AdminAddCategories from "./Pages/Admin/AdminAddCategories/AdminAddCategories";
import AdminCategoriesPage from "./Pages/Admin/AdminCategoriesPage/AdminCategoriesPage";
import { getUsers, getProjects, getCategories } from "./redux/actions/actions";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUsers(dispatch);
    getProjects(dispatch);
    getCategories(dispatch);
  }, [dispatch]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/addProject" element={<AddProjectPage />} />
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/adminUsers" element={<AdminUsersPage />} />
          <Route path="/adminProjects" element={<AdminProjectsPage />} />
          <Route path="/adminAddCategories" element={<AdminAddCategories />} />
          <Route path="/adminCategories" element={<AdminCategoriesPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
