import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth } from '../redux/admin/asyncActions';
import { selectAdmin } from '../redux/admin/selectors';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {status, ...admin} = useSelector(selectAdmin);
  const [ email, setEmail] = useState("test@gmail.com");
  const [ password, setPassword] = useState("test");
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  useEffect(() => {
    if (status === "error" && isErrorVisible) {
      setIsErrorVisible(true);
    }
  }, [status, isErrorVisible]);

  const handleAuth = async (e) => {
    e.preventDefault();

    dispatch(
      fetchAuth({
        email,
        password,
        action: "login"
      })
    );
    setIsErrorVisible(true);
  }

  useEffect(() => {
    const json = JSON.stringify(admin);
    localStorage.setItem('admin', json);

    if (admin.isAuth) {
      navigate("/")
    }
  }, [admin]);

  return (
    <div className="login__wrapper">
    <div className="login__container">
      <h2 className="login__title">SIGN IN</h2>
      <form className="login__form" onSubmit={handleAuth}>
        <label>
          <input 
            type="email" 
            placeholder='email' 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            onFocus={() => setIsErrorVisible(false)}
            autoComplete="email"
          />
        </label>
        <label>
          <input 
            type="password" 
            placeholder='password' 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            onFocus={() => setIsErrorVisible(false)}
            autoComplete="current-password"
          />
        </label>
        <button className="button" type='submit'>SIGN IN</button>
      </form>
      {status ==="error" && isErrorVisible && <div className="error">Something went wrong...</div>}
      <p><Link to="/register">Create a new account</Link></p>
      <p><Link to="/">Go to home page</Link></p>
    </div>
    </div>
  )
}

export default Login;