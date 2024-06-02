"use server";

import Satellite from "../satellite";

export const postRegister = async (body) => {
  try {
    const request = await Satellite.post("/auth/register", body);

    return request;
  } catch (error) {
    console.log(error);
    // return error.response;
  }
};
