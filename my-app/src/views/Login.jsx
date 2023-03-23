import PropTypes from 'prop-types';
import RegisterForm from '../components/RegisterForm';
import LoginForm from './../components/LoginForm';

const Login = (props) => {
  return (
    <>
      <LoginForm />
      <RegisterForm />
    </>
  );
};

Login.propTypes = {};

export default Login;
