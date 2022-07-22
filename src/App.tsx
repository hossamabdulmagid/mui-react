import MenuAppBar from './component/navbar/navbar';

import HomePage from './pages/homepage/homepage.component';
import Footer  from './component/footer/footer.component';
const App = () => {
  return (
    <div className="App">
      <MenuAppBar />
      <HomePage />
      <Footer/>
    </div>
  );
}

export default App;
