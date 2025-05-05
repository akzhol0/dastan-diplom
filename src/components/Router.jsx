import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App.jsx";
import LinkSecurity from "./examples/linkSecurity/LinkSecurity.jsx";
import Header from "./header/Header.jsx";
import {useRef} from "react";
import Footer from "./footer/Footer.jsx";
import VirusCheck from "./examples/virusCheck/VirusCheck.jsx";

function Router() {
  const techRef = useRef(null);
  const importantRef = useRef(null);
  const keysRef = useRef(null);
  const moreRef = useRef(null);
  const typesRef = useRef(null);
  const examplesRef = useRef(null);

  return (
    <BrowserRouter>
      <Header
        moreRef={moreRef}
        keysRef={keysRef}
        importantRef={importantRef}
        techRef={techRef}
        typesRef={typesRef}
        examplesRef={examplesRef}
      />
      <Routes>
        <Route path="/" element={<App moreRef={moreRef}
                                      keysRef={keysRef}
                                      importantRef={importantRef}
                                      techRef={techRef}
                                      typesRef={typesRef}
                                      examplesRef={examplesRef}/>}></Route>
        <Route path="/link-security" element={<LinkSecurity/>}></Route>
        <Route path="/virus-check" element={<VirusCheck/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router