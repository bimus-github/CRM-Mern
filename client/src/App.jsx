import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SingIn from "./pages/registration/SingIn";
import SingUp from "./pages/registration/SingUp";
import Home from "./pages/adminPages/Home";
import HomeTeacher from "./pages/teacherPages/Home";

import { useDispatch, useSelector } from "react-redux";
import TeachresAdmin from "./pages/adminPages/Teachres";
import StudentsAdmin from "./pages/adminPages/Students";
import GroupsAdmin from "./pages/adminPages/Groups";
import CreateAdmin from "./pages/adminPages/Create";
import { getUsers } from "./actions/user";

function App() {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/createAuth" element={<SingUp />} />
        <Route path="/homeAdmin" element={<Home />} />
        <Route path="/homeTeacher" element={<HomeTeacher />} />
        <Route path="/admin/teachrs" element={<TeachresAdmin />} />
        <Route path="/admin/students" element={<StudentsAdmin />} />
        <Route path="/admin/groups" element={<GroupsAdmin />} />
        <Route path="/admin/create" element={<CreateAdmin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
