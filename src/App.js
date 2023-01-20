import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import SectionFour from "./Sections/SectionFour";

import { useAuthContext } from "./hooks/useAuthContext";

import "./App.scss";

function App() {
  const { authReady, user } = useAuthContext();

  return (
    <div className="App">
      {authReady && (
        <>
          <SectionOne />
           {/* <SectionTwo /> */}
          <SectionThree />
          <SectionFour />
        </>
      )}
    </div>
  );
}

export default App;
