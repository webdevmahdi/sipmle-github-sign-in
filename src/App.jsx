import app from "./firebase.init"
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'

let auth = getAuth(app);

function App() {
  let provider = new GithubAuthProvider();
  let handleSignIn = () =>{
    signInWithPopup(auth, provider)
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }
  return (
      <div>
        <button onClick={handleSignIn}>sign in</button>
      </div>
  )
}

export default App
