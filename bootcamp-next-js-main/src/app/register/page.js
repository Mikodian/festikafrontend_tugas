"use client";

import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { postRegister } from "@/services/api/apiRegister";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Image from "next/image";
import right1pict from "@/assets/image/right1.png";

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const body = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const req = await postRegister(body);
    // console.log(req);

    // if (res.status === 200) {
    //   console.log("BERHASIL", res);
    //   router.push("/login"); // Redirect to login after successful registration
    //   setError("");
    // } else {
    //   setError("Failed to register. Please try again."); // Update error message accordingly
    // }
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex">
      <div className="left w-[50%] h-fit ml-[150px] mt-[150px]">
        <h1 className="text-3xl font-semibold pb-10">Register</h1>
        <div className="mb-5 w-[360px]">
          <label className="block text-sm mb-2">Username</label>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="username">Masukan Username</InputLabel>
            <OutlinedInput
              id="username"
              name="username" // Change name attribute to 'username'
              type="text"
              label="Masukan Username"
            />
          </FormControl>
        </div>
        <div className="mb-5 w-[360px]">
          <label className="block text-sm mb-2">Email</label>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="email">Masukan Email</InputLabel>
            <OutlinedInput
              id="email"
              name="email" // Keep name attribute as 'email'
              type="text"
              label="Masukan Email"
            />
          </FormControl>
        </div>
        <div className="mb-5 w-[360px]">
          <label className="block text-sm mb-2">Password</label>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="password">Masukan Password</InputLabel>
            <OutlinedInput
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Masukan Password"
            />
          </FormControl>
        </div>
        {error && <div className="text-red-500 mb-5">{error}</div>}
        <Button type="submit" title="Daftar" />
      </div>
      <div className="right w-[60%]">
        <Image src={right1pict} alt="Right Image" className="h-[100vh]" />
      </div>
    </form>
  );
}
