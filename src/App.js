import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import SectionFour from "./Sections/SectionFour";
import Contact from "./Sections/Contact";

import { useAuthContext } from "./hooks/useAuthContext";

import "./App.scss";

function App() {
  const { authReady } = useAuthContext();

  return (
    <div className="App">
      {authReady && (
        <>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
