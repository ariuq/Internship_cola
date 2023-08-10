
import { useState } from "react"
 const handleLogin = (isLogin, setLogin) => {
    setLogin(!isLogin);
  }
export const useLogin = () => {
  const [isLogin, setLogin] = useState(true);
  return {isLogin, handleLogin: () => handleLogin(isLogin, setLogin)};
}