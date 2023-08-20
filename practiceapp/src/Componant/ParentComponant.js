// import ChildComponant from "./ChildComponant"

import Navbar from "./Navbar";
import Background from "./Background";
import Footer from "./Footer";
import ProfileDailog from "./ProfileDailog";

const Parentcomponant = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Router>
          <Route path="/" element={ProfileDailog}></Route>
        </Router>
      </BrowserRouter> */}

      <Navbar />
      <Background />
      <Footer />
    </>
  );
};
export default Parentcomponant;
