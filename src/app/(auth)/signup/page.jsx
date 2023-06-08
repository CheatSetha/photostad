"use client";
import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FcGoogle } from "react-icons/fc";

const validationShcema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};
const handleSubmit = (values) => {
  console.log(values);
};
const page = () => {
  return (
    <div className="bg-white dark:bg-slate-800 w-full flex flex-wrap  ">
      <div className="w-1/2 hidden md:flex justify-center items-center ">
        <img
          className="w-96 "
          src="./assets/images/signup.png"
          alt="sign up logo"
        />
      </div>
      <div className="md:w-1/2 w-full">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationShcema}
        >
          <div className="form-container w-[90%] md:w-[500px] xl:w-[600px] mx-auto  border p-10 rounded-[16px]">
              <h1 className="font-bold text-2xl ">Sign Up</h1>
              <div class="mb-6">
                <label
              
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <Field
                  placeholder="enter your email"
                  type="email"
				  name = "email"
                  
                  class="bg-gray-50 border rounded-[16px] border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
			  <ErrorMessage name = "email" component = "div" className = "text-red-500 text-sm mb-6" />
              <div class="mt-6">
                <label
                 
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <Field
                  placeholder="enter your password"
                  type="password"
				  name = "password"
                
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[16px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
				
              </div>
			  <ErrorMessage name = "password" component = "div" className = "text-red-500 text-sm mb-6" />
              <div class="mt-6">
                <label
              
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <Field
				name = "confirmPassword"
                  placeholder="confirm your password"
                  type="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-[16px]"
                />
              </div>
			  <ErrorMessage name = "confirmPassword" component = "div" className = "text-red-500 text-sm mb-6" />
              <div className="mt-6">
                <button class="bg-[#E85854] mb-6 hover:bg-slate-600 text-white font-bold p-2.5  rounded-[16px] w-full">
                  {" "}
                  Sign up{" "}
                </button>
              </div>
              <hr />
              <button className=" p-3 mt-6 border w-full rounded-[16px]">
                <FcGoogle className="inline" /> sign up with google
              </button>
            </div>
     
        </Formik>
      </div>
    </div>
  );
};

export default page;
