This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Reflection
1. Did you run into any “gotchas” along the way? If so, what were they and how did you address them?
  - Not having an auth endpoint to rely on meant I would have to rely on the cookie saved for authentication.
  - The BE would not take the value from authorization in the cookies (its encoded) when using credentials: include, meaning that i had to manually set the authorization header, this meant a challenge
    especially for server side requests.
3. How did you handle forms? In a largely form driven project, would you do anything differently? If so, what? I used react-hook-form and yup which is what i do in larger projects. what i'd do different
   is have my custom <Form/> <Input/> <Button/> components for easier integration.
4. How did you handle authorization? In your ideal FE/BE scenario, what auth strategy would you use? As mentioned above fixing the BE not being able to read the encoded cookie value. Ideally we would have
   the token saved in the cookies, and also implement csrf protection.
5. Is there anything you’d like to share about your project prior to my evaluating it? At the end I could not finish implementing the server side rendering react query request, the idea behind this is having
   data ready by the time the client loads, and the client request just checks the cache. This provides a much nicer user experience. Also better error messages are pending. CSS modules were used since they are
   supported out of the box by next but ideally a styled components solution would be my go to.
6. How long did you spend on this exercise? If you had unlimited more time to spend on this, how would you spend it and how would you prioritize each item? i spent about 6 hours. I would prioritize using a library that makes 
   sense, for instance in this case chakra UI would be great and easy to customize. Then address log in/auth, once that's correct SSR would be possible and we could implement react query for caching. Then Dashboard, modify   
   the BE with a slightly different schema, implement a dates library like moment to handle scheduled times and durations. Add meaningful unit/integration tests.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
