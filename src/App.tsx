import RegisterPage from './component/form/formValidtion';

import MenuAppBar from './component/navbar/navbar';

import ExampleCarousel from './component/carousel/mui-carousel';
const App = () => {
  return (
    <div className="App">
      <MenuAppBar/>
      <ExampleCarousel/>
      <RegisterPage/>
    </div>
  );
}

export default App;
