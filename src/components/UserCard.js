import React from "react";

import { useSelector } from "react-redux";

const UserCard = () => {
  const { singleUser } = useSelector((store) => store.users);
  return (
    <section className="bg-yellow-900 drop-shadow-lg rounded-xl mx-auto  p-8 text-white font-mono ">
      {!singleUser ? (
        <div className="p-10 text-xl ">Click on any button below to get user data</div>
      ) : (
        <figure className="flex justify-between">
          <img
            className="w-28 h-28 object-cover rounded-2xl "
            src={singleUser?.data.avatar}
            alt="user"
          />
          <div className="px-5 flex flex-col align-middle justify-center  ">
            <div className="text-2xl">
              Name: {singleUser?.data.first_name} {singleUser?.data.last_name}
            </div>
            <div className="text-2l pt-3 italic">Email: {singleUser?.data.email}</div>
          </div>
        </figure>
      )}
    </section>
  );
};

export default UserCard;
