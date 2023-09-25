import Cookies from "universal-cookie";
/**
 * needs to check if the token is available in cookies
 * if yes return true else false
 */
function useAuth () {
    // ideally we would have an endpoint that returns
    // a token if the user has been authenticated
    const cookies = new Cookies();
    const isAuth = Boolean(cookies.get('Authorization'));
    console.log('isAuth hook', isAuth)
    return isAuth;
}

export default useAuth;