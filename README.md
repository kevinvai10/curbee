This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Project Reflection

Did you run into any “gotchas” along the way? If so, what were they and how did you address them?
  - Not having an auth endpoint to rely on meant I would have to rely on the cookie saved for authentication.
  - The BE would not take the value from authorization in the cookies (its encoded) when using credentials: include, meaning that i had to manually set the authorization header, this meant a challenge
    especially for server side requests.

How did you handle forms? In a largely form driven project, would you do anything differently? If so, what? I used react-hook-form and yup which is what i do in larger projects. what i'd do different is have my custom components for form, input and button for example.

How did you handle authorization? In your ideal FE/BE scenario, what auth strategy would you use? Ideally, setting the token in the cookies, and implementing csrf protection. Have the BE accept the encoded token value since cookies automatically encode the string, and when sending the credentials with credentials: include, it will be sent that way.

Is there anything you’d like to share about your project prior to my evaluating it?
One of the things I didn't have time to complete was adding react query SSR fetching, this in order to have cached data and also a smoother UX since we would get data by the time the client loads.
I used css modules just because you have a template out of the box but usually i would rely on styled components, emotion, or even better something like Chakra UI or Radix UI
I left todos with how i would actually address certain decisions.

How long did you spend on this exercise? If you had unlimited more time to spend on this, how would you spend it and how would you prioritize each item?
I spent about 6 hours. If I had more time I would prioritize this way:

- Set up a library like Chkara UI or Radix UI and create the color palette for this project.
- Set up react testing library, a testing file with all the custom logic needed for rendering our components.
- Work on log in/auth, since once we get that right, we can address SSR authenticated requests and redirects.
- Work on dashboard, use a date library like moment to handle scheduled times and durations.
- Work on a better UI/UX for selecting availability, probably using a calendar library for it (right now it's hardcoded with only avaialble to check the day after the current day
- Add meaningful tests and mock API.
- move types to live under /src and have modules by API or page for better organization.
- Get React Query Cache working.
- Improve loading states and error messages for both the developer and the user.
- Mobile support

## Getting Started

First, run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Log in page:
<img width="1270" alt="Screenshot 2023-09-26 at 0 14 27" src="https://github.com/kevinvai10/curbee/assets/43870516/379784bb-2474-4315-b396-6636e08c5773">


Dashboard: 

<img width="760" alt="Screenshot 2023-09-25 at 23 08 02" src="https://github.com/kevinvai10/curbee/assets/43870516/66918047-381b-453f-9061-089853644d87">


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
