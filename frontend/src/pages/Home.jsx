import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Home = () => {
  const [isAccount, setIsAccount] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="w-full flex-col h-screen flex gap-4 items-center justify-center">
        <h1 className="text-3xl font-semibold">It's Happening Now.</h1>
        <button
          onClick={() => setIsAccount(true)}
          className="text-black text-lg px-4 py-2 bg-[#dadada] rounded-lg"
        >
          Create New Account
        </button>
        <button onClick={() => setIsLogin(true)} className="text-black text-lg">
          Login
        </button>

        <div
          className={`${
            !isAccount ? "hidden" : "block"
          } absolute top-0 right-0 flex items-center justify-center bg-[#00000096] w-full h-screen`}
        >
          <IoClose
            onClick={() => setIsAccount(false)}
            size={25}
            cursor="pointer"
            className="absolute top-5 right-5 "
            color="white"
          />
          <div className="w-96 h-auto gap-4 p-8 flex flex-col bg-white rounded-lg shadow-md">
            <div className="flex flex-col w-full">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                placeholder="Name"
                className="p-2 outline-none border rounded-lg border-black"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                placeholder="Email"
                className="p-2 outline-none border rounded-lg border-black"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="pass">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                id="pass"
                placeholder="Password"
                className="p-2 outline-none border rounded-lg border-black"
              />
            </div>
            <button
              className={`w-full py-3 rounded-full ${
                name && email && password ? "bg-black" : "bg-gray-400"
              } text-white`}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div
          className={`${
            !isLogin ? "hidden" : "block"
          } absolute top-0 right-0 flex items-center justify-center bg-[#00000096] w-full h-screen`}
        >
          <IoClose
            onClick={() => setIsLogin(false)}
            size={25}
            cursor="pointer"
            className="absolute top-5 right-5 "
            color="white"
          />
          <div className="w-96 h-auto gap-4 p-8 flex flex-col bg-white rounded-lg shadow-md">
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                placeholder="Email"
                className="p-2 outline-none border rounded-lg border-black"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="pass">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                id="pass"
                placeholder="Password"
                className="p-2 outline-none border rounded-lg border-black"
              />
            </div>
            <button
              className={`w-full py-3 rounded-full ${
                name && email && password ? "bg-black" : "bg-gray-400"
              } text-white`}
            >
              Login In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
