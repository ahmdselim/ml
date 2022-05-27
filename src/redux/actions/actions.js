import {
  LOGIN_USER,
  LOGOUT_USER,
  CREATE_USER,
  GET_USERS,
  GET_PROJECTS,
  GET_CATEGORIES,
  ADD_PROJECT,
  ADD_CATEGORIES,
} from "./types";
import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
  db,
} from "../../firebase/config";
import {
  getDocs,
  collection,
  addDoc,
  query,
  where,
  doc,
  deleteDoc,
  updateDoc,
  Firestore,
} from "firebase/firestore";

// create new user
export const createUser = async (name, email, password, image, dispatch) => {
  const user = await registerWithEmailAndPassword(name, email, password, image);

  return <>{dispatch({ type: CREATE_USER, payload: user })}</>;
};

// login
export const loginUser = async (email, password, dispatch) => {
  const user = await logInWithEmailAndPassword(email, password);
  return dispatch({ type: LOGIN_USER, payload: user });
};

// logout
export const logoutUser = async (dispatch) => {
  const user = logout();
  return dispatch({ type: LOGOUT_USER, payload: user });
};

// get Users
const getUser = async () => {
  let users = [];
  const user = await getDocs(collection(db, "users"));
  user.forEach((doc) => {
    users.push({ id: doc.id, data: doc.data() });
  });
  return users;
};
export const getUsers = async (dispatch) => {
  const users = await getUser();
  return dispatch({ type: GET_USERS, payload: users });
};

// get projects
const getProject = async () => {
  let users = [];
  const user = await getDocs(collection(db, "project"));
  user.forEach((doc) => {
    users.push({ id: doc.id, data: doc.data() });
  });
  return users;
};
export const getProjects = async (dispatch) => {
  const users = await getProject();
  return dispatch({ type: GET_PROJECTS, payload: users });
};

// get categories
const getCat = async () => {
  let categories = [];
  const category = await getDocs(collection(db, "categories"));
  category.forEach((doc) => {
    categories.push({ id: doc.id, data: doc.data() });
  });
  return categories;
};
export const getCategories = async (dispatch) => {
  const categories = await getCat();
  return dispatch({ type: GET_CATEGORIES, payload: categories });
};

// add project
const addProject = async (
  userID,
  projectImg,
  projectName,
  projectReason,
  projectDesc,
  projectCat,
  projectCountry,
  projectMonIncome,
  projectNetIncome,
  projectPrice,
  projectPhoneNum
) => {
  const project = await addDoc(collection(db, "project"), {
    userID,
    projectImg,
    projectName,
    projectReason,
    projectDesc,
    projectCat,
    projectCountry,
    projectMonIncome,
    projectNetIncome,
    projectPrice,
    projectPhoneNum,
    date: new Date(),
  });
  return project;
};
export const addProjects = async (
  userID,
  projectImg,
  projectName,
  projectReason,
  projectDesc,
  projectCat,
  projectCountry,
  projectMonIncome,
  projectNetIncome,
  projectPrice,
  projectPhoneNum,
  dispatch
) => {
  const projects = await addProject(
    userID,
    projectImg,
    projectName,
    projectReason,
    projectDesc,
    projectCat,
    projectCountry,
    projectMonIncome,
    projectNetIncome,
    projectPrice,
    projectPhoneNum
  );
  return dispatch({ type: ADD_PROJECT, payload: projects });
};

// add categories
const addCategory = async (catImg, catName) => {
  const categories = await addDoc(collection(db, "categories"), {
    catImg,
    catName,
    date: new Date(),
  });
  return categories;
};
export const addCategories = async (catImg, catName, dispatch) => {
  const categories = await addCategory(catImg, catName);
  return dispatch({ type: ADD_CATEGORIES, payload: categories });
};

// update user to admin
export const makeAdmin = async (id, status) => {
  const user = doc(db, "users", id);
  const admin = status === 1 ? 0 : 1;
  return await updateDoc(user, {
    status: admin,
  });
};

// delete project
export const deleteProject = async (id) => {
  return await deleteDoc(doc(db, "project", id));
};

// delete project
export const deleteCategories = async (id) => {
  return await deleteDoc(doc(db, "categories", id));
};

// delete user
export const deleteUsers = async (id) => {
  return await deleteDoc(doc(db, "users", id));
};
