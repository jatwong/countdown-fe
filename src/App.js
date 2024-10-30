import { Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "./store/auth-context";

import Entries from "./components/Entries/Entries";
import AddEntry from "./components/Entries/AddEntry";
import ViewEntry from "./components/Entries/ViewEntry";
import EditEntry from "./components/Entries/EditEntry";
import ErrorPage from "./components/Pages/ErrorPage";
import RegisterVerify from "./components/Pages/RegisterVerify";
import { Fragment, useContext } from "react";
import EmailConfirm from "./components/Pages/EmailConfirm";
import Header from "./components/UI/Header";
import ResetPassForm from "./components/Forms/ResetPassForm";
import LoginForm from "./components/Forms/LoginForm";
import SignUpForm from "./components/Forms/SignUpForm";
import ForgotPassForm from "./components/Forms/ForgotPassForm";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      {authCtx.isLoggedIn && <Header />}
      <div className="page">
        <Routes>
          <Route
            path="/"
            replace
            element={
              !authCtx.isLoggedIn ? (
                <Navigate replace to={"/login"} />
              ) : (
                <Navigate replace to={"/entries"} />
              )
            }
          />
          <Route
            path="/login"
            element={
              !authCtx.isLoggedIn ? (
                <LoginForm />
              ) : (
                <Navigate replace to={"/entries"} />
              )
            }
          />
          <Route path="/forgot-password" element={<ForgotPassForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route
            path="/entries"
            element={
              authCtx.isLoggedIn ? (
                <Entries />
              ) : (
                <Navigate replace to={"/login"} />
              )
            }
          />
          <Route path="/add-entry" element={<AddEntry />} />
          <Route path="/entries/:entryId" element={<ViewEntry />} />
          <Route path="/entries/edit/:entryId" element={<EditEntry />} />
          <Route path="/reset-password" element={<ResetPassForm />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/verification" element={<RegisterVerify />} />
          <Route path="/confirmation" element={<EmailConfirm />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
