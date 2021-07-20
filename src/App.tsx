import React, { useState, Fragment } from "react";
import UserList from "./components/UserList";

interface Props {}

const App: React.FC<Props> = (props) => {
  const [page, setPage] = useState(1);
  return (
    <div className="flex flex-col items-center p-5 space-y-8 bg-black">
      <UserList page={page} />
      <div className="flex justify-center w-1/2">
        <button
          className="mx-2 py-2 w-1/2 rounded-xl bg-white hover:bg-gray-200 font-semibold"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
        <button
          className="mx-2 py-2 w-1/2 rounded-xl bg-white hover:bg-gray-200 font-semibold"
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export default App;
