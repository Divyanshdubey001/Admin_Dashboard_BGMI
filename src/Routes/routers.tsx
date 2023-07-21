import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "../Pages/Loader/Loader";
import Login from "../Pages/Login/Login";
import { ResetPassword } from "../Pages/ResetPassword/ResetPassword";
import { Dashboard } from "../Pages/DashboardPage/Dashboard"
import { Room } from "../Components/fields/Room/room";
import { Spectator } from "../Components/fields/Spectator/spectator";
import { Teams } from "../Components/fields/Teams/teams";
import { Users } from "../Components/fields/Users/users";


type Props = {};

const Routers = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/adminDashboard" element={<Dashboard />} />
        <Route path="/adminDashboard/room" element={<Room />} />
        <Route path="/adminDashboard/spectator" element={<Spectator />} />
        <Route path="/adminDashboard/teams" element={<Teams />} />
        <Route path="/adminDashboard/users" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default Routers;
