import "../../styles/globals.css";
import type { AppProps } from "next/app";
import AuthContext from "../lib/auth_context";
import Navbar from "../../components/navbar";
import { createContext, useEffect, useState } from "react";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure({ ...awsconfig, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContext>
      <Navbar />
      <Component {...pageProps} />
    </AuthContext>
  );
}
