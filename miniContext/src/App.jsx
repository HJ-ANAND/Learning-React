import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className="bg-green-500 text-black rounded-xl text-3xl p-4">
        Mini Context
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
