import { useDispatch } from "react-redux";
import { AddToCart } from "../../Redux/Web3CartReducer";
import WindowMaintanance from "../../Assets/window-maintanance.png";
import RoofMaintanance from "../../Assets/roof-maintenance.png";
import GutterClean from "../../Assets/gutter-cleaning.png";
import WindowReplacement from "../../Assets/window-screen-replacement.png";
import PowerWash from "../../Assets/powerwashing.png";
import Alluminum from "../../Assets/aluminum.png";

function Services() {
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-center services_heading font-jura text-capitalize">
        Choose your services
      </h1>
      <div className="services_intro_size font-jura text-capitalize">
        <div className="text-center services_intro">
          all of the services come with a 2 month labour warranty, any
          additional items/services outside of the scope of work are subject to
          an additional charge.
        </div>
      </div>
      <div className="pt-5 px-xxl-5">
        <div className="row px-xxl-5 px-5 g-5">
          <div className="pt-4 col-lg-4 col-md-6 col-sm-12 flex-container">
            <div
              className="px-3 pt-5 pb-3 shadow-md card w-100 d-flex align-items-center justify-content-center shadow"
              style={{
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 0px 25px",
              }}
            >
              <img
                src={WindowMaintanance}
                alt="#image not found"
                width="70px"
                height="70px"
                style={{ borderRadius: 999 }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-capitalize">
                  window maintenance
                </h5>
                <p className="card-text text-capitalize text-muted small">
                  3 windows included, a minimum of 3 window caulking and
                  maintenance on the exterior of the window
                </p>
                <br />
                <br />
                <button
                  type="button"
                  className="btn btn-danger service_order_btn"
                  style={{
                    left: "50%",
                    transform: "translate(-50%)",
                    bottom: "35px",
                    position: "absolute",
                  }}
                  onClick={() =>
                    dispatch(
                      AddToCart([
                        {
                          productTitle: "window maintenance",
                          productPrice: "150",
                          productImage:
                            "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80",
                        },
                      ])
                    )
                  }
                >
                  Order Now -$150
                </button>
              </div>
            </div>
          </div>
          <div className="pt-4 col-lg-4 col-md-6 col-sm-12 flex-container">
            <div
              className="px-3 pt-5 pb-3 shadow-md card w-100 d-flex align-items-center justify-content-center shadow"
              style={{
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 0px 25px",
              }}
            >
              <img
                src={RoofMaintanance}
                alt="#image not found"
                width="70px"
                height="70px"
                style={{ borderRadius: 999 }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-capitalize">
                  roof maintenance
                </h5>
                <p className="card-text text-capitalize text-muted small">
                  inspect entire roof for any water leakage penetrations,
                  services includes roof caulkin for any exposed nails, 2 pipe
                  collards, and any waterproofing
                </p>
                <br />
                <br />
                <button
                  type="button"
                  className="btn btn-danger service_order_btn"
                  style={{
                    left: "50%",
                    transform: "translate(-50%)",
                    bottom: "35px",
                    position: "absolute",
                  }}
                  onClick={() =>
                    dispatch(
                      AddToCart([
                        {
                          productTitle: "roof maintenance",
                          productPrice: "750",
                          productImage:
                            "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80",
                        },
                      ])
                    )
                  }
                >
                  Order Now -$750
                </button>
              </div>
            </div>
          </div>
          <div className="pt-4 col-lg-4 col-md-6 col-sm-12 flex-container">
            <div
              className="px-3 pt-5 pb-3 shadow-md card w-100 d-flex align-items-center justify-content-center shadow"
              style={{
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 0px 25px",
              }}
            >
              <img
                src={GutterClean}
                alt="#image not found"
                width="70px"
                height="70px"
                style={{ borderRadius: 999 }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-capitalize">
                  Gutter Cleaning
                </h5>
                <p className="card-text text-capitalize text-muted small">
                  clean the entire Gutter system, water hose the downspouts,
                  install Gutter Guard Filters, up to 100 Ift of gutters.
                </p>
                <br />
                <br />
                <button
                  type="button"
                  className="btn btn-danger service_order_btn"
                  style={{
                    left: "50%",
                    transform: "translate(-50%)",
                    bottom: "35px",
                    position: "absolute",
                  }}
                  onClick={() =>
                    dispatch(
                      AddToCart([
                        {
                          productTitle: "Gutter Cleaning",
                          productPrice: "250",
                          productImage:
                            "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80",
                        },
                      ])
                    )
                  }
                >
                  Order Now -$250
                </button>
              </div>
            </div>
          </div>
          <div className="pt-4 col-lg-4 col-md-6 col-sm-12 flex-container">
            <div
              className="px-3 pt-5 pb-3 shadow-md card w-100 d-flex align-items-center justify-content-center shadow"
              style={{
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 0px 25px",
              }}
            >
              <img
                src={WindowReplacement}
                alt="#image not found"
                width="70px"
                height="70px"
                style={{ borderRadius: 999 }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-capitalize">
                  window screen replacement
                </h5>
                <p className="card-text text-capitalize text-muted small">
                  Replace up to 5 window screens, at a price of $85 per screen,
                  a minimum of 5 window screens.
                </p>
                <br />
                <br />
                <button
                  type="button"
                  className="btn btn-danger service_order_btn"
                  style={{
                    left: "50%",
                    transform: "translate(-50%)",
                    bottom: "35px",
                    position: "absolute",
                  }}
                  onClick={() =>
                    dispatch(
                      AddToCart([
                        {
                          productTitle: "window screen replacement",
                          productPrice: "425",
                          productImage:
                            "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80",
                        },
                      ])
                    )
                  }
                >
                  Order Now -$425
                </button>
              </div>
            </div>
          </div>
          <div className="pt-4 col-lg-4 col-md-6 col-sm-12 flex-container">
            <div
              className="px-3 pt-5 pb-3 shadow-md card w-100 d-flex align-items-center justify-content-center shadow"
              style={{
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 0px 25px",
              }}
            >
              <img
                src={PowerWash}
                alt="#image not found"
                width="70px"
                height="70px"
                style={{ borderRadius: 999 }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-capitalize">
                  powerwashing
                </h5>
                <p className="card-text text-capitalize text-muted small">
                  powerwash driveways up to 20' * 10' and wood decks 20' * 10'
                  chemicals will be used according to home depot and lowes
                  recommendation
                </p>
                <br />
                <br />
                <button
                  type="button"
                  className="btn btn-danger service_order_btn"
                  style={{
                    left: "50%",
                    transform: "translate(-50%)",
                    bottom: "35px",
                    position: "absolute",
                  }}
                  onClick={() =>
                    dispatch(
                      AddToCart([
                        {
                          productTitle: "powerwashing",
                          productPrice: "550",
                          productImage:
                            "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80",
                        },
                      ])
                    )
                  }
                >
                  Order Now -$550
                </button>
              </div>
            </div>
          </div>
          <div className="pt-4 col-lg-4 col-md-6 col-sm-12 flex-container">
            <div
              className="px-3 pt-5 pb-3 shadow-md card w-100 d-flex align-items-center justify-content-center shadow"
              style={{
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 0px 25px",
              }}
            >
              <img
                src={Alluminum}
                alt="#image not found"
                width="70px"
                height="70px"
                style={{ borderRadius: 999 }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-capitalize">
                  alluminum fascia boards (cap)
                </h5>
                <p className="card-text text-capitalize text-muted small">
                  install 30 linear feet of alluminum cap fascia board, a
                  minimum of 30 linear feet $15 per foot after that. color does
                  not determine the price. wood replacement is $8.00 per foot
                </p>
                <br />
                <br />
                <button
                  type="button"
                  className="btn btn-danger service_order_btn"
                  style={{
                    left: "50%",
                    transform: "translate(-50%)",
                    bottom: "35px",
                    position: "absolute",
                  }}
                  onClick={() =>
                    dispatch(
                      AddToCart([
                        {
                          productTitle: "alluminum fascia boards (cap)",
                          productPrice: "540",
                          productImage:
                            "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80",
                        },
                      ])
                    )
                  }
                >
                  Order Now -$540
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className="row d-flex align-items-center justify-content-center px-5">
        <div className="col-md-6 col-12 d-flex align-items-center justify-content-center flex-column">
          <div>
            <h3>NFT WARRANTY TOKEN</h3>
            <p className="text-muted text-capitalize">
              Purchase a 4 month extra warranty. A NFT is sent to your wallet,
              and will serve as your token to receive a repair to your project
              for 5 months in total! NFT warranty
            </p>
            <button
              type="button"
              className="btn btn-danger text-capitalize"
              onClick={() =>
                dispatch(
                  AddToCart([
                    {
                      productTitle: "NFT WARRANTY TOKEN",
                      productPrice: "50",
                      productImage:
                        "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80",
                    },
                  ])
                )
              }
            >
              My order -$50
            </button>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-end bg-white shadow rounded">
          <img
            className="img-responsive p-4  rounded mx-auto"
            width={300}
            src={
              "data:image/png;base64,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"
            }
          />
        </div>
      </div>
    </>
  );
}
export default Services;
