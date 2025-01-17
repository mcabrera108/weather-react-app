// Import Components
import Header from "../components/ui/Header";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer";
import "../index.css";
function BaseLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
BaseLayout.propTypes = {
  children: PropTypes.object,
};
export default BaseLayout;
