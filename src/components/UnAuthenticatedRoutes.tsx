
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UNAUTHENTICATED_ROUTES } from "../navigation/routes";
import { LoginPage } from "../pages/LoginPage";

export const UnAuthenticatedRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path={UNAUTHENTICATED_ROUTES.login} element={<LoginPage />} />
        <Route path="/*" element={<LoginPage />} /> 
        </Routes>
    
    </BrowserRouter>
  )
}
