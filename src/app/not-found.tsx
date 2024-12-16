import { Suspense } from 'react';

// import Link from 'next/link'

// export default function NotFound() {
//   return (
//     <div className='dark:bg-dark-background '>
//       <h2>Not Found</h2>
//       <p>Could not find requested resource</p>
//       <Link href="/">Return Home</Link>
//     </div>
//   )
// }

// app/not-found.tsx
import { notFound } from 'next/navigation';

export default function NotFound() {
  notFound(); // Triggers the "Not Found" page handling

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Oops! Page Not Found</h1>
      </Suspense>
    </>
  );
}
