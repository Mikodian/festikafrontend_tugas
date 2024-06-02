"use client";

import React, { useState } from "react";
import { Public, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { postLogin } from "@/services/api/apiLogin";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Image from "next/image";
import right1pict from "@/assets/image/right1.png";

export default function Login() {
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
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const res = await postLogin(body);

    if (res.status === 200) {
      console.log("BERHASIL", res);
      router.push("/");
      setError("");
    } else {
      setError("Username or Password is wrong");
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex">
      <div className="left w-[50%] h-fit ml-[150px] mt-[150px]">
        <h1 className="text-3xl font-semibold pb-10">Login</h1>
        <div className="mb-5 w-[360px]">
          <label className="block text-sm mb-2">Email</label>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="password">Masukan Email</InputLabel>
            <OutlinedInput
              id="email"
              name="email"
              type={"text"}
              label="masukan email"
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
        <div className="flex items-center mb-5">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        {error && <div className="text-red-500 mb-5">{error}</div>}
        <Button type="submit" title={"Login"} />
        <div className="flex items-center mt-2">
          <span>Belum punya akun? </span>
          <a href="/register" className="text-blue-500 ml-1">
            register
          </a>
        </div>
      </div>
      <div className="right w-[60%]">
        <Image src={right1pict} alt="Right Image" className="h-[100vh]" />
      </div>
    </form>
  );
}
