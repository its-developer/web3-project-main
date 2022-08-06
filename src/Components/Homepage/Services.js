import { useDispatch } from "react-redux";
import { AddToCart } from "../../Redux/Web3CartReducer";

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
                src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80"
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
                src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80"
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
                src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80"
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
                src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80"
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
                src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80"
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
                src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80"
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
        <div className="col-md-6 d-flex align-items-center justify-content-end">
          <img
            className="img-responsive w-100 p-4 shadow bg-white rounded"
            src="https://images.unsplash.com/photo-1659720879386-923f2a19f19e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </div>
      </div>
    </>
  );
}
export default Services;
