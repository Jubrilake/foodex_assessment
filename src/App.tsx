import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppSidebar } from "./components/shared/app-sidebar";
import Home from "./pages/Home";
import JoinWaitlist from "./pages/JoinWaitlist";

function App() {
  return (
    <Router>
      <div className="lg:flex min-h-screen">
        <AppSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join-waitlist" element={<JoinWaitlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
