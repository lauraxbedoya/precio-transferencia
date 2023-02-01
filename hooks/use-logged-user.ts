import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { findLoggedUser } from "../redux/actions/session.action";
import { clearSession } from "../redux/slices/session.slice";
import { useAppDispatch } from "../redux/store";

const useLoggedUser = (): [boolean, () => void] => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter();
  const dispatch = useAppDispatch();

  const checkIsUserLogged = () => {

    // const token = localStorage.getItem('tkn');
    // if (!token) {
    //   router.push(`/sign-in`);
    // } else {
    dispatch(findLoggedUser());
    // }
    setIsLoading(false);
  }

  const handleLogout = () => {
    localStorage.removeItem('tkn');
    dispatch(clearSession());

    router.push(`/sign-in`);
  }

  useEffect(checkIsUserLogged, [router.pathname]);

  return [isLoading, handleLogout];
}

export default useLoggedUser;