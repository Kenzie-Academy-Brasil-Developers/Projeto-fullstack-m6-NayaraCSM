// import { useContext } from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { UserContext } from "../../providers/UserContext/UserContext";

// export const ProtectedRoutesPublic = () => {
//   const { user, loading } = useContext(UserContext);

//   return (
//     <>
//       {loading ? (
//         <div>
//           <p>loading</p>
//         </div>
//       ) : !user ? (
//         <Outlet />
//       ) : (
//         <Navigate to="/dashboard" />
//       )}
//     </>
//   );
// };
