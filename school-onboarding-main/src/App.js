import { Route, Routes } from "react-router-dom";
import SetOrgPage from './pages/set-org-page';
import EmailInputPage from './pages/emailinputpage'; 
import VerificationPage from "./pages/verificationpage";

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/setuporg" element={<SetOrgPage />} />
        <Route path="/" element= { <EmailInputPage />}/>
        <Route path="/verification" element= { <VerificationPage />}/>
      </Routes>
    </div>
  );
}

export default App;
