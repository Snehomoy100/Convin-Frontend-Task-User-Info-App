import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, getUsersList } from "./utils/usersSlicer";

import UserCard from "./components/UserCard";

const App = () => {
  const dispatch = useDispatch();
  const { totalUsers } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  return (
    <div className="h-[100vh] w-[100vw] bg-gradient-to-r from-red-300 to-yellow-800 flex flex-col align-middle justify-center">
      <UserCard />
      <footer className="mx-auto mt-[5rem] space-x-6 text-white font-mono">
        {[...Array(totalUsers)].map((el, idx) => (
          <button
            className="text-xl rounded-xl  p-4 px-6 drop-shadow-lg bg-orange-800 active:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-400"
            key={idx}
            onClick={() => {
              dispatch(getSingleUser(idx + 1));
            }}
          >
            {idx + 1}
          </button>
        ))}
      </footer>
    </div>
  );
}

export default App;
