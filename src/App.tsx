import Navbar from './component/navbar/navbar';
import HomePage from './pages/homepage/homepage.component';
import Footer from './component/footer/footer.component';
import { Route, Routes } from "react-router-dom";
import SignInSignUpPage from './pages/signin-signup/signin-signup.component';
import ContentLanguage from './component/contentlang/content.component';
import Help from './pages/help/help.component';
import ResumeTips from './pages/resume-tips/resume-tips.component';
import LanguagePage from './pages/languages-pages/languages-pages.component';
const App = () => {
  return (
    <div className="App">
      <Navbar label='Login | Signup' />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInSignUpPage />} />
        <Route path="/help" element={<Help />} />
        <Route path="/tips" element={<ResumeTips />} />
        <Route path="/lang" element={<LanguagePage />} />
      </Routes>
      <ContentLanguage />
      <Footer />
    </div>
  );
}


export default App;
