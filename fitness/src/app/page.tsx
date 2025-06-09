  'use client';

import { SignedIn, SignedOut, SignInButton} from '@clerk/clerk-react';
import { SignOutButton } from '@clerk/nextjs';

import React from 'react'

const Homepage = () => {
  return (
    <div>Homepage 

<SignedOut>
      <SignInButton/>
     </SignedOut>


     <SignedIn>
      <SignOutButton/>
     </SignedIn>
    
    </div>
    
  )
}

export default Homepage;