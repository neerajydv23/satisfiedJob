import React, { useEffect } from "react";
import Link from "next/link";
import { TiTick } from "react-icons/ti";
import { MdArrowBackIos } from "react-icons/md";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerStudent } from "@/redux/actions/studentAction";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterUser = () => {
  const router = useRouter();
  const { student, error } = useSelector((state) => state.student);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    dispatch(registerStudent(data));
  });

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (student) {
      router.push("/");
    }
  }, [student]);

  return (
    <div className="flex relative">
      <Link
        href="/"
        className="absolute top-2  left-2 md:left-4 md:top-2  text-white flex items-center  cursor-pointer justify-center"
      >
        <MdArrowBackIos className="text-md " />
        <p>Back</p>
      </Link>

      <div className="w-[40%] md:w-[60%] lg:w-[40%] hidden md:flex h-[100vh]  flex-col items-center py-[100px] bg-[#4080ED]  px-10 relative">
        <div className="text-white flex flex-col gap-3 ">
          <div>
            <p className="text-[25px] font-semibold">
              Complete your profile! 👋
            </p>
            <p className="text-[16px]">
              Unlock 500+ jobs from top companies and receive direct calls from
              HRs
            </p>
          </div>

          <div className="flex flex-col gap-3 mt-[40px]">
            <div className="flex items-center gap-1">
              <div className="w-[16px] h-[16px] flex  items-center justify-center rounded-full bg-[#C8C2C9]">
                <TiTick className="text-[#37283A]" />
              </div>
              <p>Takes only 4 steps</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[16px] h-[16px] flex  items-center justify-center rounded-full bg-[#C8C2C9]">
                <TiTick className="text-[#37283A]" />
              </div>
              <p>Takes only 4 steps</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[16px] h-[16px] flex  items-center justify-center rounded-full bg-[#C8C2C9]">
                <TiTick className="text-[#37283A]" />
              </div>
              <p>Takes only 4 steps</p>
            </div>
          </div>
          <div className="flex gap-8 text-2xl text-white absolute bottom-8 ">
            <FaFacebookSquare />
            <FaSquareXTwitter />
            <IoLogoInstagram />
            <FaLinkedin />
        </div>
        </div>
      </div>
      <div className="w-[100%] px-[20px] md:w-[60%] h-[100vh] flex	md:bg-white md:text-black  flex-col justify-center items-center">
      <Link
          href={"/"}
          className="text-[#4080ED] text-[33px] font-semibold flex items-center"
        >
          SATISFIED <span className="text-black">JOB</span>
        </Link>
        <h1 className="text-2xl capitalize font-semibold my-5">Welcome</h1>

        <form
          onSubmit={onSubmit}
          className="flex w-[300px] md:w-[50%] flex-col  gap-[10px] items-center justify-center"
        >
          <div className="w-full">
            <p className="text-[18px] my-2 font-[500]">First Name</p>
            <input
              type="text"
              style={{ border: "2px solid #D1CED4" }}
              className="  px-3 py-2  w-[100%] rounded-md outline-none"
              placeholder="please enter your First Name"
              {...register("firstname", { required: true })}
            />
            {errors.firstname && (
              <p className="text-[15px] text-red-500">
                please Enter first Name.
              </p>
            )}
          </div>

          <div className="w-full">
            <p className="text-[18px] my-2 font-[500]">Last Name</p>
            <input
              type="text"
              style={{ border: "2px solid #D1CED4" }}
              className="  px-3 py-2  w-[100%] rounded-md outline-none"
              placeholder="please enter your First Name"
              {...register("lastname", { required: true })}
            />
            {errors.lastname && (
              <p className="text-[15px] text-red-500">
                Please Enter last Name.
              </p>
            )}
          </div>

          <div className="w-full">
            <p className="text-[18px] my-2 font-[500]">Email</p>
            <input
              type="text"
              style={{ border: "2px solid #D1CED4" }}
              className="  px-3 py-2  w-[100%] rounded-md outline-none"
              placeholder="please enter your email address"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-[15px] text-red-500">Please Enter Email.</p>
            )}
          </div>

          <div className="w-full">
            <p className="text-[18px] my-2 font-[500]">Password</p>
            <input
              type="text"
              style={{ border: "2px solid #D1CED4" }}
              className="  px-3 py-2  w-[100%] rounded-md outline-none"
              placeholder="please enter your password "
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-[15px] text-red-500">Please Enter password.</p>
            )}
          </div>
          <div></div>
          <button className="bg-blue-500 rounded-3xl  bg-[#4080ED]  w-[100%] text-white bg-green font-bold py-2 px-4  focus:outline-none focus:shadow-outline  border-2 hover:text-white mt-4">
      Register
    </button>

    <p className="text-sm mt-2">
      Already have an account ?{"  "}
      <Link href="/loginUser" className="text-[#4080ED] hover:underline">
         Login
      </Link>
    </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterUser;
