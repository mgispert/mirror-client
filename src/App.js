import "./App.css";
import { ThemeContext } from "./context/theme.context";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import HomePage from "./components/HomePage";
import EntryList from "./components/EntryList";
import EntryDetails from "./components/EntryDetails";
import CreateEntry from "./components/CreateEntry";
import EditEntry from "./components/EditEntry";
import UserProfile from "./components/UserProfile";
import EditUserProfile from "./components/EditUserProfile";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/entry"
          element={
            <IsPrivate>
              <EntryList />
            </IsPrivate>
          }
        />
        <Route
          path="/entry/:entryId"
          element={
            <IsPrivate>
              <EntryDetails />
            </IsPrivate>
          }
        />
        <Route
          path="/entry/create"
          element={
            <IsPrivate>
              <CreateEntry />
            </IsPrivate>
          }
        />
        <Route
          path="/entry/:entryId/edit"
          element={
            <IsPrivate>
              <EditEntry />
            </IsPrivate>
          }
        />
        <Route
          path="/user/:userId"
          element={
            <IsPrivate>
              <UserProfile />
            </IsPrivate>
          }
        />
        <Route
          path="/user/:userId/edit"
          element={
            <IsPrivate>
              <EditUserProfile />
            </IsPrivate>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />

        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
