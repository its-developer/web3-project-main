import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import HeaderLogo from "../../Assets/HeaderLogo/HeaderLogo.jpeg";
import { toast } from "react-toastify";

function Header() {
  const [shadow, setShadow] = React.useState(false);
  async function getAccount() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    return account;
  }

  React.useEffect(() => {
    // if (typeof window !== "undefined") {
    //   window.addEventListener("scroll", () =>
    //     setShadow(window.pageYOffset > 200)
    //   );
    // }
  }, []);

  function connectButtonOnClick() {
    if (typeof window !== "undefined") {
      getAccount()
        .then((response) => {
          console.log(response);
        })
        .catch(() => toast.error("User didn't connect with metamask"));
    }
  }

  return (
    <>
      <nav
        className={`navbar border-bottom border-grey border-2 sticky-top ${
          shadow ? "shadow" : ""
        }`}
        style={{ backgroundColor: "white", height: 60 }}
      >
        <div className="container-md padding_left_after_md_scrn">
          <Link className="p-0 navbar-brand" to="/">
            {/* <img src={HeaderLogo} width={100} alt="#" /> */}
            <h4 className="font-jura m-0 p-0">
              E-BEN<span style={{ color: "red" }}>ZERS</span>
            </h4>
          </Link>
          <div className="d-flex">
            {/* <Link to="/login" className="btn btn-danger">Login</Link> */}
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => connectButtonOnClick()}
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
