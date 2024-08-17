import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";

import { ApiResponse} from "@/types/ApiResponse";


export async function sendVerificationEmail(email : string, username : string, verifyCode : string) : Promise<ApiResponse>
{
    try
    {
        await resend.emails.send({
            from : "onboarding@resend.dev>",
            to : email,
            subject : "Verify your email for AnonSend",
            react : VerificationEmail({username, otp : verifyCode}),
        });

        return {success : true, message : "Email sent"};
        
    }
    catch(err)
    {
        console.log( "error sending email" , err);
        return {success : false, message : "Falied to send email"};
    }

}