import './App.css'
// import { Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectListing from './pages/ProjectListing';
import ProjectForm from './pages/ProjectForm';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Logout from './pages/Logout';
// import AuthProvider from "./provider/authProvider";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        {/* <Route path="/" element={Dashboard} /> */}
        <Route path="/project-form" element={<ProtectedRoute><ProjectForm/></ProtectedRoute>} />
        <Route path="/project-listing" element={<ProtectedRoute><ProjectListing/></ProtectedRoute>} />
        <Route path="/logout" element={<ProtectedRoute><Logout/></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App
