import Services from "../../Components/Homepage/Services";
import TopInto from "../../Components/Homepage/TopIntro";
import "./Homepage.css";
import BillingDetails from "../../Components/Homepage/BillingDetails";
import UseDefaultLayout from "../../layouts/UseDefaultLayout";

function Homepage() {
  return (
    <div>
      <TopInto />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Services />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <BillingDetails />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default UseDefaultLayout(Homepage);
