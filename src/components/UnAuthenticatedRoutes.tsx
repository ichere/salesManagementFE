
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UNAUTHENTICATED_ROUTES } from "../navigation/routes";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage";

export const UnAuthenticatedRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path={UNAUTHENTICATED_ROUTES.login} element={<LoginPage />} />
        <Route path={UNAUTHENTICATED_ROUTES.signUp} element={<SignUpPage />} />
        <Route path="/*" element={<LoginPage />} /> 
        </Routes>
    
    </BrowserRouter>
  )
}
