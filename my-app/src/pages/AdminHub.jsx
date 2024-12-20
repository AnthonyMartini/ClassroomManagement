import React, { useState } from "react";

function AdminHub() {
  return (
    <div className="flex flex-col gap-4 pt-4 items-center">
      <h1 className="font-bold text-[20px]">District Details</h1>

      <div className="w-full sm:w-[800px] flex flex-col gap-4 p-4 mt-4 bg-[#fafafa] rounded-lg shadow-lg text-left">
        <div>
          <h2>
            <b>District ID: </b>1
          </h2>
          <h2>
            <b>District Name: </b>Taylor High School
          </h2>
          <h2>
            <b>Address: </b>1234 Aberdeen Rd.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AdminHub;
