import { useDispatch } from "react-redux";
import { AddToCart } from "../../Redux/Web3CartReducer";

function TopInto() {
  const dispatch = useDispatch();

  return (
    <div className="container-fluid p-0 m-0">
      <div className="row px-5 mt-4">
        <div className="col-md-6 col-12 d-flex align-items-center justify-content-center flex-column">
          <div className="">
            <h1 className="font-jura text-capitalize">
              Real life services at your fingertip
            </h1>

            <div className="pt-3">
              <i style={{ fontSize: "24px" }} className="fa fa-check">
                &emsp;100% Local Workers.
              </i>
              <br />
              <i style={{ fontSize: "24px" }} className="fa fa-check">
                &emsp;100% satisfaction gurranteed.
              </i>
              <i style={{ fontSize: "24px" }} className="fa fa-check">
                &emsp;1 month labor warranty is included on all services.
              </i>
            </div>
            <button
              type="button"
              className="btn btn-danger btn-xl text-capitalize mt-4"
            >
              Service areas
            </button>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            className="img-responsive w-100 p-4 shadow bg-white rounded"
            src="https://images.unsplash.com/photo-1659720879386-923f2a19f19e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </div>
      </div>

      <br className="br_till_md" />
      <br className="br_till_md" />
      <br className="br_till_md" />
      <br className="br_till_md" />

      <div className="px-2 px-md-5">
        <div className="second_div_container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 d-flex align-items-center justify-content-start">
              <img
                className="img-responsive w-100 p-4 shadow bg-white rounded"
                src="https://images.unsplash.com/photo-1659720879386-923f2a19f19e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="font-jura">Sleep Calm with a warrantied home</h1>
              <h4 className="font-jura fw-normal text-secondary">
                WARRANTY your project for 6 months
              </h4>
              <br />
              <p className="font-jura text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                nisi nostrum modi, magni at totam repellat quasi ducimus saepe
                accusantium, similique, rerum ab commodi cumque consequatur?
                Quas saepe placeat quod nihil laborum dolorem est eos, quidem,
                cum voluptatem nulla unde iusto adipisci doloribus? Aut nobis,
                facilis unde fuga ut aliquam.
              </p>
              <button
                type="button"
                className="btn btn-danger btn-lg-md"
                onClick={() =>
                  dispatch(
                    AddToCart([
                      {
                        productTitle: "WARRANTY your project for 6 months",
                        productPrice: "100",
                        productImage:
                          "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80",
                      },
                    ])
                  )
                }
              >
                Labour warranty - $100
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopInto;
