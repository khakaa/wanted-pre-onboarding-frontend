import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoute />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/todo" element={<Todo />} />
      </Route>
    </Routes>
  );
}

export default App;
