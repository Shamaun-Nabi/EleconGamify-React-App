import React from "react";

function Search() {
  return (
    <div> <div
    className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="exampleModalLg"
    tabIndex={-1}
    aria-labelledby="exampleModalLgLabel"
    aria-modal="true"
    role="dialog"
  >
    <div className="modal-dialog modal-lg relative w-auto pointer-events-none">
      <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div className="modal-header  relative items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
         <form action="" method="get">
            <input type="text" placeholder="Search Here" className=" text-center form-control w-[95%] h-[50px] border border-gray-300 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" />
         </form>
          <button
            type="button"
            className=" absolute bottom-8  right-4 lg:right-8 btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body relative p-4">
        <ul className="space-y-4">
            <li className="flex items-center hover:bg-slate-800  bg-gray-100 hover:text-white p-1 rounded-lg shadow-md mt-2 py-2 px-3">
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
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>
     
    </div>
  );
}

export default Search;
