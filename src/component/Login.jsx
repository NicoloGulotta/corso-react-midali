import { useGoogleLogin } from '@react-oauth/google';

function Login() {
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            const tokenId = tokenResponse.credential;
            console.log(tokenId);
            console.log(tokenResponse);
        },
        onError: (error) => {
            console.error(error);
        },
    });

    return (
        <button onClick={() => login()}>
            Accedi con Google
        </button>
    );
}
export default Login;