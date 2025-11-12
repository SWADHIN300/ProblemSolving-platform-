
import { SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import './App.css'

function App() {

  return (
    <>
        <h1>Welcomoe Buddy</h1>
     <SignedOut>
       <SignInButton mode="modal">
        <button>Login</button>
       </SignInButton>
     </SignedOut>
    
    <SignInButton>
       <SignOutButton/>
    </SignInButton>

    <UserButton />         
    </>
  )
}

export default App
