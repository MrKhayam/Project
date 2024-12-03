import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logOut } from "../features/auth/authSlice";
import SideLeft from "../Components/SideLeft";
import Mid from "../Components/Mid";
import SideRight from "../Components/SideRight";

const Home = () => {
  const { isUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isUser) {
      navigate("/");
    }
  }, [navigate, isUser]);

  return (
    <>
      <div className="w-full h-screen">
        <div className="main flex w-[100%] mx-auto h-full">
          <div className="sidebarLeft bg-white w-[20%] h-full border-r">
            <SideLeft />
          </div>
          <div className="mid w-[56%] bg-[#dadada] border-x h-full border overflow-y-auto">
            <Mid />
          </div>
          <div className="sidebarRight bg-white w-[24%] h-full border">
            <SideRight />
          </div>
        </div>

        {/* <button
          onClick={() => {
            dispatch(logOut());
            navigate("/");
          }}
          className="px-5 py-3 bg-red-600 text-white m-4 rounded-xl active:scale-95 transition-all duration-75"
        >
          Logout
        </button> */}
              

              
      </div>
    </>
  );
};

export default Home;
