import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuiTypoGraphy from './component/typography/typoGraphy';
import MuiButton from './component/button/MuiButton';
import StateTextFields from './component/form/input';
import RegisterPage from './component/form/formValidtion';
import MuiSelect from './component/select/select';
import MenuAppBar from './component/navbar/navbar';
import RadioButton from './component/radiobutton/muiradiobutton'
import MuiCheckbox from './component/checkbox/muibox';
import ExampleCarousel from './component/carousel/mui-carousel';
const App = () => {
  return (
    <div className="App">
      <MenuAppBar/>
      <ExampleCarousel/>
      <RadioButton/>
      <MuiCheckbox/>

      <MuiTypoGraphy  />
      <MuiButton />
      <StateTextFields/>
      <RegisterPage/>
      <MuiSelect/>
    </div>
  );



}

export default App;
