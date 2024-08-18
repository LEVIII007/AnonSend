import "next-auth";

declare module "next-auth" {                // here we are declaring custom user schema for next-auth user. 
    //next auth only have name and email fields so we need to tell it that we have a custom user schema
    interface Session {
        user: {
          _id?: string;
          isVerified?: boolean;
          isAcceptingMessages?: boolean;
          username?: string;
        } & DefaultSession['user'];
      }
    
      interface User {
        _id?: string;
        isVerified?: boolean;
        isAcceptingMessages?: boolean;
        username?: string;
      }
}


declare module 'next-auth/jwt' {             // this is another way to build schema for next-auth. both ways are fine
    interface JWT {
        _id?: string;
        isVerified?: boolean;
        isAcceptingMessages?: boolean;
        username?: string;
    }
}