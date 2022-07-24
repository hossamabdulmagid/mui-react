import Navbar from './component/navbar/navbar';
import HomePage from './pages/homepage/homepage.component';
import Footer from './component/footer/footer.component';
import { Route, Routes } from "react-router-dom";
import Login from './pages/login/login.component';
import ContentLanguage from './component/contentlang/content.component';
import Help from './pages/help/help.component';
const App = () => {
  return (
    <div className="App">
      <Navbar label='Login | Signup' />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <ContentLanguage />
      <Footer />
    </div>
  );
}

export default App;
