import React from "react";

function Cart({ setCart }) {
  return (
    <div>
      <div
        className="w-screen max-w-sm p-8 pt-4 border border-gray-600"
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
      >
        <button
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          //   onClick={() => setCart(false)}
          className="relative block ml-auto -mr-4 text-gray-600 transition hover:scale-110"
        >
          <span className="sr-only">Close cart</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="mt-6 space-y-4">
          <ul className="space-y-4">
            <li className="flex items-center hover:bg-slate-800  bg-gray-100 hover:text-white p-1 rounded-lg shadow-md mt-2">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="object-cover w-16 h-16 rounded"
              />
              <div className="ml-4 ">
                <h3 className="text-sm  ">Basic Tee 6-Pack</h3>
                <dl className="mt-0.5 space-y-px text-[10px] ">
                  <div>
                    <dt className="inline">Price:</dt>
                    <dd className="inline">200</dd>
                  </div>
                  <div>
                    <dt className="inline">Categorey: </dt>
                    <dd className="inline">Headphone</dd>
                  </div>
                </dl>
              </div>
              <div className="flex items-center justify-end flex-1 gap-3">
                <form>
                  <div>
                    <label htmlFor="Quantity" className="sr-only">
                      {" "}
                      Quantity{" "}
                    </label>
                    <div className="flex items-center border border-gray-200 divide-x divide-gray-200 rounded">
                      <button
                        type="button"
                        className="w-6 h-10 leading-3  transition hover:opacity-75"
                      >
                        −
                      </button>
                      <span>
                        <input
                          type="number"
                          id="Quantity"
                          defaultValue={1}
                          className="h-10 text-gray-800 w-12 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                        />
                      </span>
                      <button
                        type="button"
                        className="w-6 h-10 leading-10  transition hover:opacity-75"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </form>
                <button className="text-gray-600 transition hover:text-red-600">
                  <span className="sr-only">Remove item</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>
            
          </ul>

          <div className=" space-y-4">
            <div className="flex justify-between !text-base font-medium">
              <dt>Total</dt>
              <dd>£200</dd>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <a
              href="#"
              className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
            >
              Checkout
            </a>
            <a
              href="#"
              className="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600"
            >
              Continue shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
