import LoginBox from '../../components/Login/LoginBox';

const LOGIN_PAGE_WRAPPER_STYLES = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

function Login() {
    return (
        <div style={LOGIN_PAGE_WRAPPER_STYLES}>
            <LoginBox />
        </div>
    );
}

export default Login;
