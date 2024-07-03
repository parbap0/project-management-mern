// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { useAuth } from "../provider/authProvider";
// import { ProtectedRoute } from "./ProtectedRoute";
// import Dashboard from '../pages/Dashboard'
// import ProjectListing from "../pages/ProjectListing";
// import ProjectForm from "../pages/ProjectForm";
// import Logout from "../pages/Logout";
// import Login from "../pages/Login";
// const Routes = () => {
//     const { token } = useAuth();

  
//     // Define routes accessible only to authenticated users
//     const routesForAuthenticatedOnly = [
//       {
//         path: "/",
//         element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
//         children: [
//           {
//             path: "/",
//             element: <Dashboard/>,
//           },
//           {
//             path: "/project-listing",
//             element: <ProjectListing/>,
//           },
//           {
//             path: "/project-form",
//             element: <ProjectForm/>,
//           },
//           {
//             path: "/logout",
//             element: <Logout/>,
//           },
//         ],
//       },
//     ];
  
//     // Define routes accessible only to non-authenticated users
//     const routesForNotAuthenticatedOnly = [
//       {
//         path: "/login",
//         element: <Login/>,
//       },
//     ];
  
//     // Combine and conditionally include routes based on authentication status
//     const router = createBrowserRouter([
//       ...(!token ? routesForNotAuthenticatedOnly : []),
//       ...routesForAuthenticatedOnly,
//     ]);
  
//     // Provide the router configuration using RouterProvider
//     return <RouterProvider router={router} />;
//   };
  
//   export default Routes;