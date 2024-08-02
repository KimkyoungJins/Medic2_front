import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SignUpPage2 from "./pages/SignUpPage2";
import MainPage from "./pages/MainPage";
import AllProductPage from "./pages/AllProductPage";
import InformationPage from "./pages/InformationPage";
import ScrollToTop from "./components/ScrollToTop";
import HashtagPage from "./pages/HashtagPage";
import CertificatePage from "./pages/CertificatePage";
import RelatedPage from "./pages/RelatedPage";
import SearchPage from "./pages/SearchPage";

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Medic/SignUpPage" element={<SignUpPage />} />
        <Route path="/Medic/SignUpPage2" element={<SignUpPage2 />} />
        <Route path="/Medic" element={<MainPage />} />
        <Route path="/Medic/AllProductPage" element={<AllProductPage />} />
        <Route
          path="/Medic/InformationPage/:productId"
          element={<InformationPage />}
        />
        <Route path="Medic/HashtagPage" element={<HashtagPage />} />
        <Route path="Medic/CertificatePage" element={<CertificatePage />} />
        <Route path="Medic/RelatedPage" element={<RelatedPage />} />
        <Route path="Medic/SearchPage" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
