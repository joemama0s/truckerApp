// TODO research react context api
import { createContext, useState } from "react";
import { UserContextInt } from "../interfaces/user_context_int";

export type UserContextType = {
  username: string;
  profileType: string;
  saveUsername: (usrnm: string | undefined) => void;
  saveProfileType: (profileTp: string | undefined) => void;
};

export const UserCtx = createContext<UserContextType | null>(null);
