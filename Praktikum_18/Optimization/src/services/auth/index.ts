import { signIn } from "next-auth/react";

export const authServices = {
  // Login dengan Email & Password
  login: async (payload: any) => {
    return await signIn("credentials", {
      redirect: false,
      email: payload.email,
      password: payload.password,
      callbackUrl: payload.callbackUrl,
    });
  },

  // Login dengan Social Provider (Google/GitHub)
  socialLogin: async (provider: string, callbackUrl: string) => {
    return await signIn(provider, { callbackUrl, redirect: false });
  }
};