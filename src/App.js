import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
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
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/entries"
          element={
            <IsPrivate>
              <EntryList />
            </IsPrivate>
          }
        />
        <Route
          path="/entries/:entryId"
          element={
            <IsPrivate>
              <EntryDetails />
            </IsPrivate>
          }
        />
        <Route
          path="/entries/create"
          element={
            <IsPrivate>
              <CreateEntry />
            </IsPrivate>
          }
        />
        <Route
          path="/entries/:entryId/edit"
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
              <Signup />
            </IsAnon>
          }
        />

        <Route
          path="/login"
          element={
            <IsAnon>
              <Login />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
