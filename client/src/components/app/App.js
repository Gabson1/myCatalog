import React from 'react';

import {RegistrationSwitcher} from "../pageComponents/registration/registrationTypeSwitcher/regSwitch";

import Cookie from "../cookie/cookie";


function App() {
  return (
    <div>
      <h1>REACT ECOMMERCE BITCHEs</h1>
      <RegistrationSwitcher />
      <Cookie />
    </div>
  );
}

export default App;
