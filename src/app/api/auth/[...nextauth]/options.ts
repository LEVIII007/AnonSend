import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/user';

export const authOptions: NextAuthOptions = {                          // based on credentials, this method will create a html page for login : email and password
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any): Promise<any> {          // this method will be called when user clicks on login button  
        await dbConnect();         
        try {
          const user = await UserModel.findOne({                // find the user by email or username, remember this method to find used based on more than one field
            $or: [
              { email: credentials.identifier },
              { username: credentials.identifier },
            ],
          });
          if (!user) {
            throw new Error('No user found with this email');
          }
          if (!user.isVerified) {
            throw new Error('Please verify your account before logging in');
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error('Incorrect password');
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],

  callbacks: {                                                  
    async jwt({ token, user }) {                                             // we are loading this token with user data so we can make it powerful so it can be used for user info instead of calling database again and again
      if (user) {
        token._id = user._id?.toString(); // Convert ObjectId to string
        token.isVerified = user.isVerified;
        token.isAcceptingMessages = user.isAcceptingMessages;
        token.username = user.username;
      }
      return token;
    },

    async session({ session, token }) {              // this method will be called when user is logged in
      if (token) {
        session.user._id = token._id;
        session.user.isVerified = token.isVerified;
        session.user.isAcceptingMessages = token.isAcceptingMessages;
        session.user.username = token.username;
      }
      return session;
    },
  },
  session: {                         // you can define strategy for session, jwt, etc
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,                 

  pages: {
    signIn: '/sign-in',                         // next auth will design this page itself
  },
};






// jahan bhi token ya fir session ka access mil jaye hum usme se user ki info nikal payenge easily