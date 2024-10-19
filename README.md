<p align="center">
  <img src="AnonSend.git.png" width="60%" alt="ANONSEND.GIT-logo">
</p>
<p align="center">
    <h1 align="center">ANONSEND.GIT</h1>
</p>
<p align="center">
    <em>Unlock the Power of Secure Communication with AnonSend.git-Where Privacy Meets Simplicity!</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/LEVIII007/AnonSend.git?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/LEVIII007/AnonSend.git?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/LEVIII007/AnonSend.git?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/LEVIII007/AnonSend.git?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/OpenAI-412991.svg?style=flat&logo=OpenAI&logoColor=white" alt="OpenAI">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>

##### 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [🧩 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
    - [🔖 Prerequisites](#-prerequisites)
    - [📦 Installation](#-installation)
    - [🤖 Usage](#-usage)
    - [🧪 Tests](#-tests)
- [📌 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

I created a true anonymous feedback system where users can receive feedback and messages on specific topics. The platform allows users to share a link where others can send feedback anonymously.

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




## 👾 Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | Next.js based project leveraging TypeScript for type safety and React for frontend development. Follows a component-based structure for modularity and separation of concerns. MongoDB used as the database backend for data storage. |
| 🔩 | **Code Quality**  | Codebase maintains good quality with TypeScript enforcing strict typing rules and ESLint for linting. Follows modern JavaScript best practices. |
| 📄 | **Documentation** | Adequate inline comments and README present. Could benefit from more detailed documentation covering architecture and development setup. |
| 🔌 | **Integrations**  | Integrates with various libraries like bcrypt for password hashing, mongoose for MongoDB interactions, NextAuth for authentication, and Axios for API requests. |
| 🧩 | **Modularity**    | Components structured for reusability and maintainability. Encourages separation of concerns through clear component responsibilities. |
| 🧪 | **Testing**       | Testing frameworks like bcrypt-js for unit tests and possibly React Testing Library or Jest for frontend testing could be beneficial. |
| ⚡️  | **Performance**   | Performance is dependent on the efficiency of MongoDB queries and frontend rendering speed. Could benefit from optimizing database queries and frontend assets. |
| 🛡️ | **Security**      | Implements bcrypt for password hashing, uses JWT tokens for authentication, and NextAuth for secure user sessions. Room for improvement in data validation and input sanitization. |
| 📦 | **Dependencies**  | Relies on a wide range of dependencies including Next.js, TypeScript, bcrypt, mongoose, and Tailwind CSS for styling. |

---

## 📂 Repository Structure

```sh
└── AnonSend.git/
    ├── README.md
    ├── components.json
    ├── emails
    │   └── VerificationEmail.tsx
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── next.svg
    │   └── vercel.svg
    ├── react-email-starter
    │   ├── emails
    │   ├── package.json
    │   └── readme.md
    ├── src
    │   ├── app
    │   ├── components
    │   ├── context
    │   ├── helpers
    │   ├── hooks
    │   ├── lib
    │   ├── messages.json
    │   ├── middleware.ts
    │   ├── model
    │   ├── schemas
    │   └── types
    ├── tailwind.config.ts
    └── tsconfig.json
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File | Summary |
| --- | --- |
| [next.config.mjs](https://github.com/LEVIII007/AnonSend.git/blob/main/next.config.mjs) | Defines Next.js configuration for the repository. Facilitates custom settings for the Next.js framework. Supports enhancing the projects build, routing, and asset optimization. |
| [package-lock.json](https://github.com/LEVIII007/AnonSend.git/blob/main/package-lock.json) | VerificationEmail.tsx`**This code file, `VerificationEmail.tsx`, plays a crucial role in the parent repositorys email verification functionality. It facilitates the generation and sending of verification emails to users. By leveraging this file, the parent repository ensures a seamless and secure verification process, enhancing user experience and platform security. |
| [tsconfig.json](https://github.com/LEVIII007/AnonSend.git/blob/main/tsconfig.json) | Facilitates TypeScript configuration for the Next.js project, enforcing strict typing rules, JSX preservation, and module resolutions. Enables seamless integration of React components by aliasing paths for improved code organization and maintainability within the codebase structure. |
| [postcss.config.mjs](https://github.com/LEVIII007/AnonSend.git/blob/main/postcss.config.mjs) | Enables PostCSS to load Tailwind CSS configuration for styling in the project. |
| [package.json](https://github.com/LEVIII007/AnonSend.git/blob/main/package.json) | Implements essential scripts for project development and deployment. Manages dependencies for core functionality, utilities, authentication, and UI components. Aligns with the projects tech stack and ensures seamless integration of key libraries and tools. |
| [components.json](https://github.com/LEVIII007/AnonSend.git/blob/main/components.json) | Defines component configurations including style, TypeScript support, Tailwind setup, and path aliases. Supports structured component development within the repository. |
| [tailwind.config.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/tailwind.config.ts) | Defines Tailwind CSS configuration for styling across various project components leveraging custom color schemes, border radii, animations, and screen breakpoints. Enhances visual consistency and user experience within the application based on specified design variables. |

</details>

<details closed><summary>src</summary>

| File | Summary |
| --- | --- |
| [middleware.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/middleware.ts) | Implements middleware in `middleware.ts` for routing and authentication in the parent repository. Redirects users based on token presence and URL paths, enhancing user experience. |
| [messages.json](https://github.com/LEVIII007/AnonSend.git/blob/main/src/messages.json) | Displays messages from users with timestamps in a JSON format for interface rendering within the AnonSend project. This file contributes critical content for message display functionality within the applications UI architecture. |

</details>

<details closed><summary>src.types</summary>

| File | Summary |
| --- | --- |
| [next-auth.d.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/types/next-auth.d.ts) | Defines custom user schema for NextAuth session and JWT, expanding user fields beyond default. Enhances user object with properties like _id, isVerified, isAcceptingMessages, and username for broader functionality within the AnonSend repositorys architecture. |
| [ApiResponse.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/types/ApiResponse.ts) | Defines API response structure with success status, message, and optional fields for message acceptance and an array of messages from the user model. |

</details>

<details closed><summary>src.model</summary>

| File | Summary |
| --- | --- |
| [user.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/model/user.ts) | Defines MongoDB schemas for messages, analytics, projects, and users with properties like content, positive/negative keywords, and verification codes. Ensures type safety and structure for user data with username, email, and password, including message and project associations. |

</details>

<details closed><summary>src.lib</summary>

| File | Summary |
| --- | --- |
| [dbConnect.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/lib/dbConnect.ts) | Initiates and manages database connections to ensure performance optimization. Verifies existing connection to prevent strain and logs status updates for ease of monitoring. Core to maintaining database stability in the application architecture. |
| [resend.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/lib/resend.ts) | Enables email resending using the resend library with a specified API key. |
| [utils.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/lib/utils.ts) | Enhances CSS class handling by merging Tailwind CSS and clsx utility libraries, optimizing class concatenation and styling across components in the AnonSend.git repository. |

</details>

<details closed><summary>src.schemas</summary>

| File | Summary |
| --- | --- |
| [acceptMessageSchema.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/schemas/acceptMessageSchema.ts) | Defines a schema for accepting messages using the Zod library. |
| [messageSchema.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/schemas/messageSchema.ts) | Defines validation schema for accepting messages in the repository. Ensures message content is between 10 and 300 characters. Maintains data integrity for message inputs within the projects architecture. |
| [signinSchema.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/schemas/signinSchema.ts) | Validates user sign-in data before processing through Zod schema with identifier and password fields, ensuring password length requirement. Resides in signinSchema.ts within src/schemas, enhancing data integrity for authentication in the repository's architecture. |
| [signupSchema.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/schemas/signupSchema.ts) | Validates and ensures user input integrity for signup information. Employs Zod schema for username, email, and password fields, specifying length and format constraints. Facilitates seamless user registration process within the repositorys architecture. |
| [verifySchema.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/schemas/verifySchema.ts) | Defines verification schema with code validation rules using Zod for robust input handling. |

</details>

<details closed><summary>src.components</summary>

| File | Summary |
| --- | --- |
| [delete-button.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/components/delete-button.tsx) | Implements a message card with delete confirmation. Handles displaying dialog, deleting messages via API, and providing user feedback. Prominently features a cancel button and confirmation action. The interaction ensures users are aware of irreversible deletion actions. |
| [messageCard.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/components/messageCard.tsx) | Facilitates message deletion confirmation for users in a reusable UI card component. Integrates delete functionality with toast notifications and Axios requests, enhancing user experience and interaction. Time-stamps message creation and ensures secure message removal with a destructive variant. |
| [Navbar.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/components/Navbar.tsx) | Implements Navbar with dynamic user authentication handling. Renders session-specific content and logout functionality. Enhances user experience by displaying personalized greeting and logout button. Facilitates seamless navigation between pages for authenticated and unauthenticated users within the application environment. |

</details>

<details closed><summary>src.components.ui</summary>

| File | Summary |
| --- | --- |
| [toaster.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/components/ui/toaster.tsx) | Enables dynamic display of toast notifications in the UI with close functionality, driven by the toast provider and toast hook. |
| [alert-dialog.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/components/ui/alert-dialog.tsx) | Repository StructureThe code in `src/components/ui/alert-dialog.tsx` enhances user interaction by utilizing Radix UIs Alert Dialog component. It integrates seamlessly with the existing UI components in the repository. Key features include triggering alerts, handling dialog portals, and creating overlays for a smooth user experience. This code file focuses on improving the user interface through interactive alerts without disrupting the architectural integrity of the parent repository. |
| [label.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/components/ui/label.tsx) | Defines Label component with style variants for UI consistency, leveraging Radix UI for enhanced accessibility. Integrates with class-variance-authority for dynamic class handling. Exports Label component for reuse in UI elements across the repository. |
| [input.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/components/ui/input.tsx) | Enhances UI input component styling for better user experience and consistency across the application. It leverages Reacts capabilities to provide a customizable input element with various CSS classes for design flexibility. |
| [toast.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/components/ui/toast.tsx) | This code file, located at `src/components/ui/toast.tsx`, facilitates the integration of a toast notification system into the parent repositorys architecture. The main purpose is to provide a seamless and visually appealing way to display short-lived informational messages to users. By leveraging components from @radix-ui/react-toast" and other utilities, this code enhances the user experience by offering informative and easily dismissible notifications within the application interface. |
| [separator.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/components/ui/separator.tsx) | Implements a custom UI Separator component in the repositorys component structure. Renders a stylized visual separation element with configurable orientation, decorative styling, and dynamic class composition. |
| [form.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/components/ui/form.tsx) | The `src/components/ui/form.tsx` file in the AnonSend.git repository is responsible for managing form elements and their states within the React application. It leverages the `react-hook-form` library for efficient form handling and provides a seamless user experience. By encapsulating form logic and leveraging components from the `@radix-ui/react-label` and `@radix-ui/react-slot` libraries, this code file enhances the overall user interface of the application. The integration of these technologies showcases a commitment to maintainable and user-friendly design patterns within the codebase. |
| [button.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/components/ui/button.tsx) | Implements button variants for UI components using Class Variance Authority, enhancing visual styles and interactions. Integrates with React components to dynamically apply styles based on variant and size props, improving design consistency and flexibility within the repositorys architecture. |
| [carousel.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/components/ui/carousel.tsx) | The `carousel.tsx` file in the `src/components/ui` directory is crucial for displaying a carousel interface within the web application. It utilizes the `embla-carousel-react` library to manage and render the carousel functionality. The file implements navigation arrows using components from `lucide-react` and customizes the carousel appearance with the `Button` component from the project's UI elements. This component enhances user experience by enabling seamless navigation through carousel items.🚀 **Key Features:**-Implements a user-friendly carousel interface.-Utilizes the `embla-carousel-react` library for carousel functionality.-Integrates navigation arrows using components from `lucide-react`.-Customizes carousel appearance with the `Button` component from the projects UI elements. |
| [switch.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/components/ui/switch.tsx) | Enhances UI by implementing a customizable React switch component for interactive user input. It leverages Radix UI for seamless integration, providing accessibility and styling features essential for a polished user experience in the web application. |
| [card.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/components/ui/card.tsx) | Implements reusable UI card components with header, footer, title, description, and content sections styled for a consistent look and feel across the application. This promotes code reusability and enhances visual consistency in the user interface. |

</details>

<details closed><summary>src.hooks</summary>

| File | Summary |
| --- | --- |
| [use-toast.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/hooks/use-toast.ts) | The `use-toast.ts` file in the `src/hooks` directory of the `AnonSend.git` repository provides a custom React hook for managing toast notifications. Inspired by the `react-hot-toast` library, this code implements functionality for displaying toast messages on the client side. Key features include setting a limit on the number of toasts, defining a delay for removing them, and defining types for toast props and actions. This hook enhances the user interface by enabling the efficient and user-friendly display of toast notifications within the application. |

</details>

<details closed><summary>src.context</summary>

| File | Summary |
| --- | --- |
| [AuthProvider.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/context/AuthProvider.tsx) | Enables session management for authentication within the app using next-auth/react. Wraps children components with the SessionProvider to handle user sessions seamlessly. |

</details>

<details closed><summary>src.helpers</summary>

| File | Summary |
| --- | --- |
| [sendVerificationEmail.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/helpers/sendVerificationEmail.ts) | Sends verification emails using a reusable email function and a React component. Handles email sending errors gracefully, providing feedback to users. Informs user of successful or failed email delivery status. |

</details>

<details closed><summary>src.app</summary>

| File | Summary |
| --- | --- |
| [layout.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/layout.tsx) | Defines global layout for True Feedback app, setting metadata, font, and incorporating AuthProvider and Toaster components. |
| [globals.css](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/globals.css) | This code file, `VerificationEmail.tsx`, is a crucial component responsible for generating and sending verification emails in a React-based system. It plays a key role in enhancing user security and ensuring that only authenticated users can access specific features within the application. By handling the logic for creating and dispatching verification emails, this file significantly contributes to the systems overall authentication workflow. |

</details>

<details closed><summary>src.app.(auth)</summary>

| File | Summary |
| --- | --- |
| [layout.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/(auth)/layout.tsx) | Defines metadata and layout for Next.js app. Renders children within HTML body for consistent application structure. |

</details>

<details closed><summary>src.app.(auth).sign-in</summary>

| File | Summary |
| --- | --- |
| [page.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/(auth)/sign-in/page.tsx) | This code file in the `src/app/auth/sign-in/page.tsx` path facilitates user sign-in functionality within the `AnonSend.git` repository. It leverages various libraries like `react-hook-form` and `next-auth`, providing a seamless and secure sign-in experience for users. The file encapsulates form handling logic, form components, and integration with the `next-auth` library for authentication, essential components contributing to a robust authentication flow within the application. |

</details>

<details closed><summary>src.app.(auth).sign-up</summary>

| File | Summary |
| --- | --- |
| [page.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/(auth)/sign-up/page.tsx) | The code in `src/app/(auth)/sign-up/page.tsx` file focuses on handling user sign-up functionality within the parent repositorys architecture. It utilizes various React hooks and form management libraries to create a responsive and user-friendly sign-up page. The file emphasizes form validation, user interaction, and component reuse for a seamless sign-up experience. |

</details>

<details closed><summary>src.app.(auth).verify.[username]</summary>

| File | Summary |
| --- | --- |
| [page.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/(auth)/verify/[username]/page.tsx) | Implements a page for verifying user accounts by submitting a verification code. Utilizes form validation with zod, axios for API calls, and react-hook-form for form handling. Displays verification form and handles success/failure responses with toasts. |

</details>

<details closed><summary>src.app.(app)</summary>

| File | Summary |
| --- | --- |
| [layout.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/(app)/layout.tsx) | Defines Root Layout component rendering Navbar and child components, ensuring consistent UI across app screens. |
| [page.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/(app)/page.tsx) | Showcases the anonymous feedback platforms home page with a dynamic carousel displaying encrypted messages. Emphasizes user anonymity and engages with feedback in a secure environment. |

</details>

<details closed><summary>src.app.(app).dashboard</summary>

| File | Summary |
| --- | --- |
| [page.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/(app)/dashboard/page.tsx) | This code file in `src/app/(app)/dashboard/page.tsx` contributes to the parent repositorys architecture by providing a crucial dashboard page component. It utilizes various components like `MessageCard`, `Button`, `Separator`, and `Switch` to enhance user interaction. Additionally, it leverages hooks like `useToast` for displaying notifications and `Message` model for handling user messages. The code focuses on creating a seamless user experience and efficiently managing API responses through the `ApiResponse` type. |

</details>

<details closed><summary>src.app.u.[username]</summary>

| File | Summary |
| --- | --- |
| [page.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/u/[username]/page.tsx) | Enables user-specific page rendering for personalized experiences based on the username. Enhances user interaction and engagement within the repositorys broader application structure. |

</details>

<details closed><summary>src.app.api.get-messages</summary>

| File | Summary |
| --- | --- |
| [route.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/api/get-messages/route.ts) | Implements route to get messages for authenticated user, using NextAuth session. Aggregates messages for specified user, handling authentication errors and database queries. Allows retrieval and display of messages. |

</details>

<details closed><summary>src.app.api.accept-messages</summary>

| File | Summary |
| --- | --- |
| [route.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/api/accept-messages/route.ts) | Implements POST and GET routes for accepting messages, updating the users status in the database. Handles authentication using NextAuth session, allowing users to manage message preferences securely within the application. |

</details>

<details closed><summary>src.app.api.verify-code</summary>

| File | Summary |
| --- | --- |
| [route.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/api/verify-code/route.ts) | Handles user verification by checking the provided codes validity and expiration. Updates user verification status accordingly. Handles scenarios for code expiry, invalid codes, and errors. |

</details>

<details closed><summary>src.app.api.suggest-messages</summary>

| File | Summary |
| --- | --- |
| [route.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/api/suggest-messages/route.tsx) | Generates engaging questions for an anonymous social messaging platform. Utilizes OpenAI to create thought-provoking prompts, fostering friendly interactions. Handles API errors and general exceptions for robust error management. |

</details>

<details closed><summary>src.app.api.delete-message</summary>

| File | Summary |
| --- | --- |
| [route.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/api/delete-message/route.tsx) | Enables deletion of messages from the API route. Facilitates managing messages within the app, ensuring seamless user interaction. Integrates with the apps core functionalities for efficient message handling and moderation. |

</details>

<details closed><summary>src.app.api.delete-message.[messageid]</summary>

| File | Summary |
| --- | --- |
| [route.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/api/delete-message/[messageid]/route.tsx) | Deletes a message from a users account after authentication, handling errors and status codes appropriately. |

</details>

<details closed><summary>src.app.api.send-messages</summary>

| File | Summary |
| --- | --- |
| [route.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/api/send-messages/route.ts) | Handles sending messages to users, verifying user existence, and acceptance. Saves messages to the users model and returns appropriate responses based on the outcome. Critical for ensuring communication functionality within the apps architecture. |

</details>

<details closed><summary>src.app.api.signup</summary>

| File | Summary |
| --- | --- |
| [route.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/api/signup/route.ts) | Implements user signup logic, including verification and email sending. Handles existing and new users, hashing passwords, and setting verification codes. Ensures unique usernames and emails. If successful, confirms the verification email was sent; if not, returns an error message. |

</details>

<details closed><summary>src.app.api.auth.[...nextauth]</summary>

| File | Summary |
| --- | --- |
| [options.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/api/auth/[...nextauth]/options.ts) | Defines authentication options for Next.js with credential provider for login using email and password. Validates user credentials and enriches session token with user data for efficient access. Session strategy set to JWT with secret key. Customizes sign-in page path for NextAuth. |
| [route.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/api/auth/[...nextauth]/route.ts) | Implements authentication routes using NextAuth, utilizing defined options from options.ts for the parent repository's user authentication architecture. |

</details>

<details closed><summary>src.app.api.delete-all-messages</summary>

| File | Summary |
| --- | --- |
| [route.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/api/delete-all-messages/route.ts) | Implements DELETE request to delete all user messages after authentication check. Handles database update, error logging, and response status codes. Key features include user authorization, database manipulation, and error handling. |

</details>

<details closed><summary>src.app.api.check-username-unique</summary>

| File | Summary |
| --- | --- |
| [route.ts](https://github.com/LEVIII007/AnonSend.git/blob/main/src/app/api/check-username-unique/route.ts) | Validates and checks username uniqueness in the database, ensuring no duplicate verified usernames exist. Handles query parameters, error responses, and database queries. Key for user registration flow in the repositorys backend API architecture. |

</details>

<details closed><summary>emails</summary>

| File | Summary |
| --- | --- |
| [VerificationEmail.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/emails/VerificationEmail.tsx) | Generates a verification email with user-specific details for registration confirmation. Uses React components for structured layout and text rendering. Customizable fonts and styling enhance the emails visual appeal. |

</details>

<details closed><summary>react-email-starter</summary>

| File | Summary |
| --- | --- |
| [package.json](https://github.com/LEVIII007/AnonSend.git/blob/main/react-email-starter/package.json) | Implements email build, dev, and export scripts for react-email components with dependencies defined in package.json. This file is part of the React Email Starter project in the parent repository, facilitating smooth development and export workflows for email components. |

</details>

<details closed><summary>react-email-starter.emails</summary>

| File | Summary |
| --- | --- |
| [stripe-welcome.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/react-email-starter/emails/stripe-welcome.tsx) | The `StripeWelcomeEmail` component in `stripe-welcome.tsx` within the `react-email-starter` directory generates a visually appealing HTML email template for welcoming users to Stripe. This component leverages various elements like `Button`, `Container`, `Img`, and `Text` from the `@react-email/components` library to construct a professional and engaging email layout. Additionally, it dynamically adjusts the `baseUrl` based on the environment to ensure correct link generation within the email content. This component plays a crucial role in enhancing user experience by delivering captivating emails to users interacting with the Stripe platform. |
| [notion-magic-link.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/react-email-starter/emails/notion-magic-link.tsx) | This code file in `react-email-starter/emails/notion-magic-link.tsx` is crucial for generating a Notion Magic Link email template within the parent repository. It defines the structure and content of the email, including body, headings, images, and links, using React components tailored for email rendering. This enables seamless integration of Notion Magic Link functionality into the email system of the parent repository, enhancing user communication and interaction. |
| [plaid-verify-identity.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/react-email-starter/emails/plaid-verify-identity.tsx) | The plaid-verify-identity.tsx" file in the react-email-starter directory of the repository is responsible for generating an email template used for verifying identity in the Plaid integration flow. It utilizes React components for building the email structure, including headers, sections, images, text, and links. This file plays a critical role in enhancing the user experience by providing a visually appealing and informative email layout for the verification process within the application. |
| [vercel-invite-user.tsx](https://github.com/LEVIII007/AnonSend.git/blob/main/react-email-starter/emails/vercel-invite-user.tsx) | The `vercel-invite-user.tsx` file within the `react-email-starter/emails` directory is responsible for generating an email template for inviting users to a project on Vercel. This template includes personalized elements such as the users name, image, and the name of the person who invited them. The file utilizes React components for building the email layout and styling, ensuring a visually appealing and user-friendly email experience within the parent repository's architecture. |

</details>

---

## 🚀 Getting Started

### 🔖 Prerequisites

**TypeScript**: `version x.y.z`

### 📦 Installation

Build the project from source:

1. Clone the AnonSend.git repository:
```sh
❯ git clone https://github.com/LEVIII007/AnonSend.git
```

2. Navigate to the project directory:
```sh
❯ cd AnonSend.git
```

3. Install the required dependencies:
```sh
❯ npm install
```

### 🤖 Usage

To run the project, execute the following command:

```sh
❯ npm run build && node dist/main.js
```

### 🧪 Tests

Execute the test suite using the following command:

```sh
❯ npm test
```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/LEVIII007/AnonSend.git/issues)**: Submit bugs found or log feature requests for the `AnonSend.git` project.
- **[Submit Pull Requests](https://github.com/LEVIII007/AnonSend.git/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/LEVIII007/AnonSend.git/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/LEVIII007/AnonSend.git
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/LEVIII007/AnonSend.git/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=LEVIII007/AnonSend.git">
   </a>
</p>
</details>

---


## 🙌 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
