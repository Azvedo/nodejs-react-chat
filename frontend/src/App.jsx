import { useState } from "react";
import AuthPage from './components/loginpage';
import ChatsPage from "./components/chatspage";
import "./App.css";

function App() {
  const [user, setUser] = useState();

  if(!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;