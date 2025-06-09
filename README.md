This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


---

## 🏋️‍♂️ Fitness App using AI — Setup Guide

Yeh ek **Fitness App** hai jisme hum **AI + Voice + Auth** use kar rahe hain:

* 🗣️ **Vapi** → Voice control (AI commands ke liye)
* 🔐 **Clerk** → Authentication (Login/Signup)

App bana rahe hain **Next.js** ke saath — aur ye mera **first project** hai Next.js ke saath, toh step by step seekh raha hoon.

---

## 🚀 How to Install Next.js

Hamesha latest version install karo:

```bash
npx create-next-app@latest
```

Is command ke baad kuch setup options puche jaate hain:

---

### 🛠️ Setup Options (Easy Explanation)

| Option           | Meaning (Hinglish)                                                                                                   |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| **TypeScript**   | JavaScript ka upgraded version jisme datatype define hota hai (`string`, `number`, etc). Code error-proof banta hai. |
| **ESLint**       | Code checker tool — tumhare code ke errors aur warnings detect karta hai.                                            |
| **Tailwind CSS** | CSS framework jisme sirf class names se design ban jata hai — fast and responsive.                                   |
| **App Router**   | Next.js ka new routing system jo React Server Components ke saath kaam karta hai. Flexible aur modern.               |
| **Turbopack**    | Webpack ka fast version. Development server ko super-fast banata hai.                                                |

---

## 📁 File Explanation: `src/app/page.tsx`

### ℹ️ Notes on Extensions:

* 🟢 `.jsx` = JavaScript + JSX
* 🔵 `.tsx` = **TypeScript + JSX**

Next.js TypeScript support ke saath use kar rahe hain, isliye file ka naam **`page.tsx`** hai.

---

## ⚛️ `rafc` Kya Hota Hai?

`rafc` = **React Arrow Function Component**
Ye ek VS Code shortcut hai jo ek **React component ka template** ready kar deta hai.

---

### ✨ `rafc` Se Bana Code:

```tsx
import React from 'react';

const Page = () => {
  return (
    <div>Page</div>
  );
};

export default Page;
```

---

### 🧠 Line by Line Explanation:

| Code                         | Meaning                                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| `import React from 'react';` | React ko import karna padta hai. *(Next.js 13+ mein auto ho jata hai, lekin likhna safe hai)*         |
| `const Page = () => {}`      | Ek arrow function se **React functional component** bana rahe hain.                                   |
| `return (<div>Page</div>)`   | Component ek `<div>` return karta hai — React me return ke andar sirf **ek parent tag** hona chahiye. |
| `export default Page;`       | Is component ko hum doosri files me use (import) kar sakte hain.                                      |

---

## 📌 Summary (Cheat Sheet Style):

| Concept                     | Explanation                                     |
| --------------------------- | ----------------------------------------------- |
| **Next.js**                 | React ka powerful framework                     |
| **TypeScript (`.tsx`)**     | Type-safe code likhne ke liye                   |
| **rafc**                    | VS Code shortcut for React Functional Component |
| **React Component Rule**    | Name should start with **Capital Letter**       |
| **Single Parent in Return** | `<div>` ya `<>` required around elements        |

---
Great, Shubham! Let’s **clearly understand the Next.js folder structure**, routing system, and layouts — especially for **Next.js 13+ (App Router)** because tu uska use kar raha hai.

---

## 📁 Next.js Folder Structure (App Router Version)

After you run:

```bash
npx create-next-app@latest
```

You get a folder like this:

```
my-fitness-app/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── (more folders = routes)
├── public/
├── styles/
├── node_modules/
├── next.config.js
├── tailwind.config.js (if used)
├── tsconfig.json (if TypeScript)
└── package.json
```

---

## 🔍 Folder & File Explanation

| Folder/File      | Purpose                                                     |
| ---------------- | ----------------------------------------------------------- |
| `app/`           | 💡 **Main folder for routing and pages**.                   |
| `app/page.tsx`   | 🏠 Your **Home Page** (`/`)                                 |
| `app/layout.tsx` | 📦 **Wrapper for all pages** — contains header/footer, etc. |
| `public/`        | 🖼️ Static files like images (`/logo.png`)                  |
| `styles/`        | 🎨 CSS or Tailwind files                                    |
| `package.json`   | 📦 Lists all dependencies                                   |
| `tsconfig.json`  | 🧠 TypeScript config                                        |
| `next.config.js` | ⚙️ Custom Next.js settings                                  |

---

## 🌐 Routing in Next.js (App Router)

### ✅ Automatic Routing

* Every **folder inside `/app`** = **URL route**
* Every `page.tsx` = one **page**

### 🚀 Example:

```bash
app/
├── page.tsx              → /
├── about/
│   └── page.tsx          → /about
├── contact/
│   └── page.tsx          → /contact
```

🟢 Automatically ho jata hai routing. No need to manually set up routes like React Router.

---

## 📦 layout.tsx — Layout Flow

Every folder can have its own `layout.tsx`.
Ye hota hai **page ke around common UI** (header, nav, footer, etc).

### 🔁 Flow:

```
app/layout.tsx         → Wraps entire app
app/about/layout.tsx   → Wraps only about page
```

### 🔄 Code Example:

```tsx
// app/layout.tsx

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}  {/* All pages will render here */}
        <Footer />
      </body>
    </html>
  );
}
```

---

## 📘 Recap

| Concept                  | Description                |
| ------------------------ | -------------------------- |
| `page.tsx`               | Page content               |
| `layout.tsx`             | Common layout wrapper      |
| Folder name              | Becomes part of the URL    |
| Nested folders           | Nested routes              |
| No need for React Router | Next.js handles everything |

---

## 🧠 Bonus Tip: Dynamic Routes

```bash
app/product/[id]/page.tsx  →  /product/42
```

`[id]` is a dynamic placeholder. You can access it using:

```tsx
import { useParams } from 'next/navigation'

const page = () => {
  const params = useParams(); // { id: '42' }
  return <div>Product ID: {params.id}</div>;
};
```

---
Bilkul Shubham! Tu **Next.js App Router + TypeScript + shadcn/ui + Clerk** sikh raha hai, toh main teri baat ko thoda **aur clearly + correct way** mein explain kar deta hoon. Yeh version beginner-friendly bhi hoga **aur accurate** bhi.

---

## 🧠 Day 2: UI + Auth Setup

Hum ab UI aur authentication pe focus kar rahe hain:

---

### ✨ UI Library: `shadcn/ui`

`shadcn/ui` ek **modern React UI component library** hai jo bana hai:

| Tech             | Purpose                                           |
| ---------------- | ------------------------------------------------- |
| **Tailwind CSS** | Styling ke liye — utility-first classes           |
| **Radix UI**     | Accessibility aur open behavior ke liye           |
| **Open Source**  | Fully customizable components — tere control mein |

---

### ❗ Important: `shadcn/ui` Installation Style

`shadcn/ui` ek **normal NPM package nahi hai** — ismein:

> 📦 Tum components ko generate karke apne project mein **copy-paste** karte ho, isliye tumhare paas **poora control** hota hai customization ka.

Yeh approach kaafi **real-world friendly** hai. Tum sirf wahi components generate karte ho jo tumhe chahiye.

---

### ✅ Setup Steps (Simplified):

1. Tailwind setup hone ke baad:

```bash
npx shadcn-ui@latest init
```

2. Phir, koi bhi component chahiye toh:

```bash
npx shadcn-ui@latest add button
```

Yeh `components/ui/button.tsx` file bana dega. Ab tum is component ko **full control** ke saath use aur customize kar sakte ho.

---

## 🔐 Authentication with Clerk

Ab aate hain authentication pe — hum use kar rahe hain:

### 👉 **Clerk** = Cloud-based authentication provider

---

### ☁️ Clerk ke Features (Easy Explanation):

| Feature                  | Explanation                                                                  |
| ------------------------ | ---------------------------------------------------------------------------- |
| **Cloud-based**          | Clerk ka backend cloud mein hota hai — tumhe DB ya session handle nahi karna |
| **No middleware needed** | Bas Clerk ka React provider use karo — sab ready milta hai                   |
| **Free Plan**            | Personal projects ke liye **free tier available**                            |
| **Built-in UI**          | Ready-made `SignIn`, `SignUp`, `UserButton` components milte hain            |

---

### ✨ Why Clerk is Easy:

| Task                | Traditional Way           | Clerk Way                  |
| ------------------- | ------------------------- | -------------------------- |
| Auth logic          | Khud likhna padta hai     | Clerk sab handle karta hai |
| DB setup            | MongoDB/PostgreSQL needed | Not required               |
| Sessions, JWT, etc. | Manually manage           | Auto-managed by Clerk      |

---

### 🔧 Setup Flow (After shadcn/ui)

1. Create Clerk project (on [clerk.com](https://clerk.com))
2. Install Clerk:

```bash
npm install @clerk/nextjs
```

3. Wrap your app in ClerkProvider:

```tsx
// app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
```

4. Add pages:

```bash
app/
├── sign-in/
│   └── page.tsx  →  <SignIn />
├── sign-up/
│   └── page.tsx  →  <SignUp />
```

---

## ✅ Summary

| Topic           | Quick Recap                                                |
| --------------- | ---------------------------------------------------------- |
| `shadcn/ui`     | Component generator, Tailwind-based, lives in your project |
| Clerk           | Cloud-based auth, easy to set up, no DB/middleware needed  |
| After shadcn/ui | Setup Clerk for login/signup                               |
| No React Router | Next.js handles routing automatically                      |

---

Bilkul Shubham! 👨‍💻
Yeh raha tera **Clerk Auth Setup with Next.js** ka ek **simple, easy-to-read, and well-explained version**, jisme sab kuch clearly samjha gaya hai — **installation**, **directory structure**, aur even **code explanation** bhi!

---

# 🧾 Clerk Auth Setup with Next.js (Full Guide)

---

## 🔧 Step-by-Step Installation

### ✅ Step 1: Go to Clerk Dashboard

* Visit: [https://dashboard.clerk.com](https://dashboard.clerk.com)
* Click on **“Create Application”**

### ✅ Step 2: Fill Details

* Give your app a **name**
* Choose **Sign-in methods** like:

  * Google
  * GitHub
  * Email

### ✅ Step 3: Click **Create Application** button

### ✅ Step 4: Select Framework

* Choose **Next.js**

### ✅ Step 5: Follow Clerk’s setup guide shown on the screen

---

## 🧱 Project Setup

### ✅ Step 6: Install Clerk Package

Open terminal and run:

```bash
npm install @clerk/nextjs
```

---

### ✅ Step 7: Add Clerk API Keys

Create a file: `.env.local` in the root folder

Add this inside it:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

> ✅ **Note:** This keeps your API keys safe and secure.

---

### ✅ Step 8: Create Middleware

Create a file: `middleware.ts` in the root folder

Paste this code:

```ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
```

> 💡 This middleware helps protect routes that require login.

---

### ✅ Step 9: Update Layout File

Open this file: `src/app/layout.tsx`
Wrap the whole app with `<ClerkProvider>`

```tsx
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
```

> ✅ Now Clerk will work globally in your app.

---

## 🧪 Create Sign In & Sign Up Pages

### ✅ Step 10: Folder Structure

Inside `src/app`, create this structure:

```
src/app/
│
├── (auth)/
│   ├── sign-in/
│   │   └── [[...sign-in]]/page.tsx
│   └── sign-up/
│       └── [[...sign-up]]/page.tsx
```

> 📁 `(auth)` is just a **group folder**, doesn't show in URL
> 📁 `[[...sign-in]]` is a **catch-all route**, used by Clerk

---

### 🖊️ Sign In Page Code

File: `src/app/(auth)/sign-in/[[...sign-in]]/page.tsx`

```tsx
import { SignIn } from '@clerk/nextjs';
import React from 'react';

const SignInPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
      <SignIn />
    </main>
  );
};

export default SignInPage;
```

🧠 **Explanation:**

* `SignIn` component shows the Clerk sign-in form
* `main` tag is used to center it with Tailwind CSS

---

### 🖊️ Sign Up Page Code

File: `src/app/(auth)/sign-up/[[...sign-up]]/page.tsx`

```tsx
import { SignUp } from '@clerk/nextjs';
import React from 'react';

const SignUpPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
      <SignUp />
    </main>
  );
};

export default SignUpPage;
```

---


Bilkul Shubham! 👨‍💻
`.env.local` file mein jo variables tu Clerk ke liye use karta hai, wo sab **important configurations** hote hain. Chaliye inko **ek-ek karke detail mein** samjhte hain:

---

## 🔐 `.env.local` — Clerk Environment Variables

### 1. `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

🟢 **Purpose:**
Ye key **Clerk frontend SDK** ke liye hoti hai. Isse tu **browser side** pe Clerk ke features (like SignIn, SignUp, UserButton) access kar sakta hai.

🛡️ **Security:**

* Ye **public** key hai, isliye iska name `NEXT_PUBLIC_` se shuru hota hai.
* Browser mein visible hoti hai, lekin **limited access** deti hai.

📦 **Use hoti hai kahaan?**

* Automatically Clerk SDK ke andar use hoti hai
* `<ClerkProvider>` component is key ko internally use karta hai

---

### 2. `CLERK_SECRET_KEY`

🔴 **Purpose:**
Ye hai **Clerk ki server-side secret key**. Iska use sirf **backend ya server actions** mein hota hai (e.g., API route, middleware, server-side validation, tokens verify karna, etc.)

🛡️ **Security:**

* Ye **kabhi bhi frontend mein expose nahi karni chahiye**
* Isko backend ke endpoints ya Clerk ke Node.js SDK ke functions mein use karte hain

📦 **Example Usage:**

```ts
import { clerkClient } from "@clerk/nextjs/server";
const user = await clerkClient.users.getUser("user_id");
```

> Clerk SDK ye `CLERK_SECRET_KEY` automatically `.env.local` se le leta hai

---

### 3. `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`

🟢 **Purpose:**
Ye URL batata hai ki **Sign In page** kis path par available hai. Jab user ko sign-in ki zarurat hoti hai (jaise kisi protected route pe jaata hai), toh Clerk is path pe redirect karta hai.

🛡️ **Customizable:**
Tu agar sign-in page ka URL `/login` banana chahe, toh yahan likh de:

```env
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
```

📦 **Must Match with:**

* Tu jo page banata hai `src/app/(auth)/sign-in/[[...sign-in]]/page.tsx` wo isi path pe ho

---

### 4. `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`

🟢 **Purpose:**
Ye batata hai ki **Sign Up page** ka URL kya hai. New user ko jab register karwana hota hai, Clerk is URL pe redirect karta hai.

📦 **Example:**
Tu `SignUpButton` click karega, toh wo is path pe user ko le jayega:

```tsx
<SignUpButton />
```

> Agar URL change karna ho (`/register`), toh:

```env
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/register
```

---

## 📌 Summary Table:

| Variable Name                       | Public/Private | Purpose                            |
| ----------------------------------- | -------------- | ---------------------------------- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Public         | For frontend SDK and UI components |
| `CLERK_SECRET_KEY`                  | Private        | For secure server-side API usage   |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`     | Public         | Path where Sign-In UI is shown     |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL`     | Public         | Path where Sign-Up UI is shown     |

---


---
#now we can easy access without any authentication our profile,generate-program page , to stop this we use middleware.tsx , 

Bilkul Shubham!
Tu `middleware.ts` file mein Clerk ka `clerkMiddleware` use kar raha hai to **protect certain routes**. Yeh bahut **efficient aur clean way** hai specific routes ko login-required banane ka.

Chalo is code ko line-by-line **simple aur detail** mein explain karte hain:

---

## 🔐 Purpose of this Middleware

👉 Iska kaam hai:
**Kuch specific pages (like `/generate-program` or `/profile`) par bina login ke user ko access na dena.**

---

## 📂 Code Explanation

```ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
```

### ✅ What’s happening here?

* `clerkMiddleware` ➝ Clerk ka **function** jo `Next.js middleware` banata hai
* `createRouteMatcher` ➝ Ek function hai jo tujhko route list define karne deta hai jaise:

```ts
'/generate-program'
'/profile'
```

---

```ts
const isProtectedRoute = createRouteMatcher([
  '/generate-program', 
  '/profile',
]);
```

### ✅ What this line does:

* Tu define kar raha hai kaunse URLs **protected** honge
* `isProtectedRoute(req)` check karega: kya requested URL inme se ek hai?

---

```ts
export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) await auth.protect();
});
```

### ✅ Line-by-line breakdown:

* `clerkMiddleware(...)` ➝ Wraps your logic into a Clerk-enabled middleware
* `auth` ➝ Clerk ka helper object, jo login status verify kar sakta hai
* `req` ➝ Incoming HTTP request (URL, headers, etc.)
* `isProtectedRoute(req)` ➝ Checks: Kya current URL protected routes mein se hai?
* `await auth.protect();` ➝ Agar route protected hai, toh:

  * Agar user logged in hai: ✅ allow
  * Agar user **not logged in**: ❌ redirect to **Sign-In page**

---

## 🤖 Example Scenario

| Requested URL       | Logged In? | What Happens?              |
| ------------------- | ---------- | -------------------------- |
| `/profile`          | ❌          | Redirect to Sign-In        |
| `/generate-program` | ✅          | Page opens                 |
| `/about`            | ❌          | Page opens (not protected) |

---

## 🧠 Why Use This?

✅ Only **selected routes are protected**
✅ Clean & flexible (easy to add/remove routes)
✅ Clerk handles everything: redirects, sessions, etc.

---

## ✅ Final Middleware Setup (Complete View)

```ts
// middleware.ts (at project root)

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  '/generate-program', 
  '/profile',
]);

// Middleware logic
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect(); // Only allow logged-in users
  }
});

// Optional: Route matcher configuration
export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // Ignore static files
};
```

---

## 🔧 Want to Protect All Routes?

Use this instead:

```ts
export default clerkMiddleware((auth) => auth.protect());
```

But agar tujhe sirf **kuch pages** secure rakhne hai (like tu kar raha hai), toh `createRouteMatcher` best hai.

---



---

## 🔍 Code Part:

```ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  '/generate-program', 
  '/profile',
]);
```

---

## 🧠 Let's Break It Down:

---

### ✅ `import { clerkMiddleware, createRouteMatcher }`

**Yeh 2 cheezein Clerk ke server SDK se import ki gayi hain:**

| Function             | Purpose                                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| `clerkMiddleware`    | Ye Next.js ke liye Clerk ka middleware hai — jo har request pe run hota hai.                   |
| `createRouteMatcher` | Ye ek helper hai jo **check karta hai ki koi URL ek specific list ke andar aata hai ya nahi.** |

---

### ✅ `createRouteMatcher([...])` kya karta hai?

Is function ke andar tu ek **array of routes** de raha hai:

```ts
[
  '/generate-program', 
  '/profile',
]
```

➡️ Iska matlab:

* Tu keh raha hai ki:

  > "Agar user in 2 routes me se kisi pe jaaye, toh check karo wo logged in hai ya nahi."

🧩 `createRouteMatcher()` internally ek function return karta hai jo:

* Input me `req` (request object) lega
* Output me `true` ya `false` dega depending on whether the route is protected or not

---

### ✅ `const isProtectedRoute = createRouteMatcher([...])`

Yahan hum ek **custom function** bana rahe hain — `isProtectedRoute`

Ab jab tu niche use karega:

```ts
if (isProtectedRoute(req))
```

Toh Clerk check karega:

* Kya user ne `/profile` ya `/generate-program` open kiya?
* Agar haan → protect the route using Clerk
* Agar nahi → allow freely

---

## 🎯 Example Flow:

1. User ne `/about` page khola → **Not in list** → Open ho jayega without login
2. User ne `/profile` khola → **In list** → Clerk check karega:

   * Logged in → Show page
   * Not logged in → Redirect to Sign In page

---

## 🧾 Final Notes:

✅ `createRouteMatcher([...])` lets you **control exactly which pages need authentication**
✅ It returns a function (`isProtectedRoute`) you can call with `req` to check
✅ Ye bahut flexible hai: tu chahe toh aur bhi routes add kar sakta hai:

```ts
const isProtectedRoute = createRouteMatcher([
  '/profile',
  '/generate-program',
  '/dashboard',
  '/settings',
]);
```

---





