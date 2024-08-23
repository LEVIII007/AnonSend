import { getServerSession} from "next-auth";

import { AuthOptions } from "next-auth";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user";
import {User} from  "next-auth";                          // this is not the user we stored in session before. it comes with session in next auth

