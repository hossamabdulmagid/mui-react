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
const App = () => {
  return (
    <div className="App">
      <MenuAppBar/>
      <RadioButton/>

      <MuiTypoGraphy  />
      <MuiButton />
      <StateTextFields/>
      <RegisterPage/>
      <MuiSelect/>
    </div>
  );



}

export default App;
