import Navbar from "../navbar/NavigationBar";
import Footer from "../footer/Footer";
import "./main.css";
const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
