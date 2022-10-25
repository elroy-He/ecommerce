import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Directory from "./components/directory/directory.component";
const Shop = () => {
  return <div> This is the shopping page </div>;
};

const App = () => {
  return (
    // single / is the root
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
