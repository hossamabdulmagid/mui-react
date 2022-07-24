import Navbar from './component/navbar/navbar';

import HomePage from './pages/homepage/homepage.component';
import Footer from './component/footer/footer.component';
const App = () => {
  return (
    <div className="App">
      <Navbar label='Login | Signup' />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
