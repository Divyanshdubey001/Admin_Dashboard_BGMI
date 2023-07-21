import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "../Pages/Loader/Loader";
import Login from "../Pages/Login/Login";
import { ResetPassword } from "../Pages/ResetPassword/ResetPassword";
import { Dashboard } from "../Pages/DashboardPage/Dashboard"
import UpdateCredential from "../Pages/UserCredential/UpdateCredential";
import UpdateCredSuccess from "../Pages/UserCredential/UpdateCredSuccess";
import { SentMail } from "../Pages/Mailpage/SentMail";


type Props = {};

const Routers = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/adminDashboard" element={<Dashboard />} />
        <Route path="/reset-password" element={<UpdateCredential />} />
        <Route path="/sentmail" element={<SentMail />} />
        <Route path="/UpdateCredSuccess" element={<UpdateCredSuccess />} />
      </Routes>
    </Router>
  );
};

export default Routers;
