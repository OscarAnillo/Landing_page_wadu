import { FirstScreen } from "./components/first-screen-bike";
//import { SecondScreen } from "./components/second-screen";
import { ProfileWhite } from "./components/profile-white";
import { ProfileGreen } from "./components/profile-green";
import { ProfilePurple } from "./components/profile-purple";
import { LogoCell } from "./components/logo-cell";

import "./App.css";

function App() {
  return (
    <div className="App">
      <FirstScreen />
      <ProfileWhite />
      <ProfileGreen />
      <ProfilePurple />
      <LogoCell />
      <ProfileWhite />
    </div>
  );
}

export default App;
