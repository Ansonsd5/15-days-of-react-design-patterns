// import UserProfile from "./messy-way/components/UserProfile";

import "./App.css";
// import UserProfileContainer from "./with-pattern/components/profile/UserProfileContainer";
import UserProfileContainer from "./anson/with-pattern/components/UserProfileContainer";
function App() {
  return (
    <div>
      {/* <UserProfileContainer userId={1} /> */}
      <UserProfileContainer userId={2}/>
    </div>
  );
}

export default App;
