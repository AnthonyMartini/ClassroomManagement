function Account({ studentData }) {
  return (
    <div className="flex flex-col gap-4 pt-4 items-center">
      <h1 className="font-bold text-[20px]">Account Details</h1>

      <div className="w-full sm:w-[800px] flex flex-col gap-4 p-4 mt-4 bg-[#fafafa] rounded-lg shadow-lg text-left">
        <div>
          <h2>
            <b>Name: </b>
            {studentData
              ? studentData.studentFirst + " " + studentData.studentLast
              : ""}
          </h2>
          <h2>
            <b>Student ID: </b>
            {studentData ? studentData.studentID : ""}
          </h2>
          <h2>
            <b>Address: </b>1234 Aberdeen Rd.
          </h2>
          <h2>
            <b>DOB: </b>
            {studentData ? studentData.birthdate : ""}
          </h2>
          <h2>
            <b>Age: </b>
            {studentData ? studentData.age : ""}
          </h2>
          <h2>
            <b>Grade: </b>
            {studentData ? studentData.grade : ""}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Account;
