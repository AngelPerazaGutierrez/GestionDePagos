import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { HomePages } from "./pages/HomePages";
import { LoginPage } from "./pages/LoginPage";
import { ContextProvider } from "./userContext/ContextProvider";
// import { ProtectedRoute } from "./components/header/ProtectedRoute";
import { AdminPage } from "./pages/AdminPage";

import { UsuarioPages } from "./pages/UsuarioPages";
import { ComprobanteCard } from "./components/perfilUsuario/ComprobanteCard";
function App() {
  return (
    <>
    <div className="app">
      <Router>
        <ContextProvider>
          
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/user" element={<UsuarioPages />} />
            <Route path="/card" element={<ComprobanteCard />} />
            <Route path="/login" element={<LoginPage />} />

            {/* <Route
              path="/login"
              element={
                <ProtectedRoute>
                  <LoginPage />
                </ProtectedRoute>
              }
            /> */}
            {/* <Route path="/boot" element={<Bootcamp />} /> */}
            {/* <Route path="*" element={<ErrorPage />} /> */}
          </Routes>
        </ContextProvider>
      </Router>
    </div>
    </>
  );
}

export default App;
