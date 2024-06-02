"use client";

import Button from "@/components/Button";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <div>
      
      <div className="aside h-[100vh]">
        <h1>Home Pagee</h1>
        <Button
          title={"Logout"}
          onClick={() => {
            console.log("cek button");
            deleteCookie("TOKEN");
            router.push("/login");
          }}
        />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Most Popular Movies
          </h2>
          <p className="text-gray-600">19 February 2024</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {/* Movie 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Movie Title</h3>
              <p className="text-gray-600">Synopsis of the movie goes here.</p>
            </div>
          </div>
          {/* Movie 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Movie Title</h3>
              <p className="text-gray-600">Synopsis of the movie goes here.</p>
            </div>
          </div>
          {/* Movie 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Movie Title</h3>
              <p className="text-gray-600">Synopsis of the movie goes here.</p>
            </div>
          </div>
          {/* Movie 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Movie Title</h3>
              <p className="text-gray-600">Synopsis of the movie goes here.</p>
            </div>
          </div>
          {/* Movie 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Movie Title</h3>
              <p className="text-gray-600">Synopsis of the movie goes here.</p>
            </div>
          </div>
          {/* Movie 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Movie Title</h3>
              <p className="text-gray-600">Synopsis of the movie goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
