import React, { useState } from "react";

function AdminHub() {
  return (
    <div className="flex flex-col gap-4 pt-4 items-center">
      <h1 className="font-bold text-[20px]">Account Details</h1>

      <div className="w-full sm:w-[800px] flex flex-col gap-4 p-4 mt-4 bg-[#fafafa] rounded-lg shadow-lg text-left">
        <div>
          <h2>
            <b>Name: </b>Anthony Martini
          </h2>
          <h2>
            <b>Student ID: </b>22050
          </h2>
          <h2>
            <b>Address: </b>1234 Aberdeen Rd.
          </h2>
          <h2>
            <b>DOB: </b>6/15/2007
          </h2>
          <h2>
            <b>Age: </b>17
          </h2>
          <h2>
            <b>Grade: </b>11
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AdminHub;
