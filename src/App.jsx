// Import Components
import BaseLayout from "./layouts/BaseLayout";
import PropTypes from "prop-types";

function App() {
  return <BaseLayout></BaseLayout>;
}
App.propTypes = {
  content: PropTypes.object,
};
export default App;
