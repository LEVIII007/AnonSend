# Project: True Anonymous Feedback System

## Overview

I created a true anonymous feedback system where users can receive feedback and messages on specific topics. The platform allows users to share a link where others can send feedback anonymously.

## Key Features

- **Anonymous Feedback**: Users can receive feedback anonymously through shared links.
- **Email OTP Signup and Authentication**: Implemented an email OTP signup process and user authentication using NextAuth.
- **Type Validation**: Utilized Zod for type validation to ensure data integrity.
- **AI Summarization**: Integrated OpenAI API to summarize feedback and extract key insights.
- **Keyword Aggregation**: Implemented functionality to aggregate and analyze keywords from feedback messages.
- **Username Uniqueness Check**: Incorporated debouncing to efficiently check for username uniqueness.

## Technologies Used

- **Framework**: Next.js
- **Frontend**: React, Shadcn, TailwindCSS
- **Database**: MongoDB
- **APIs and Services**: OpenAI API, Resend for OTP delivery, Vercel AI SDK
- **Validation**: Zod
- **Language**: TypeScript

## Description

The system leverages Next.js and React for a seamless user experience and efficient development. MongoDB serves as the database for storing feedback and user information, while the OpenAI API enhances the user experience with AI-powered summarization. Zod ensures type safety and data validation throughout the application. The integration of Resend and Vercel AI SDK further streamlines user authentication and feedback processing.
