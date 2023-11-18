import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth } from '../redux/admin/asyncActions';
import { selectAdmin } from '../redux/admin/selectors';

export const Register = () => {
  const dispatch = useDispatch();
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
        action: "registration"
      })
    );
    setIsErrorVisible(true);
  }

  useEffect(() => {
    const json = JSON.stringify(admin);
    localStorage.setItem('admin', json);
  }, [admin]);

  return (
    <div className="register__container">
      <h2 className="register__title">CREATE AN ACCOUNT</h2>
      <form className="register__form" onSubmit={handleAuth}>
        <label>
          <input 
            type="email" 
            placeholder='email' 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            onFocus={() => setIsErrorVisible(false)}
          />
        </label>
        <label>
          <input 
            type="password" 
            placeholder='password' 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            onFocus={() => setIsErrorVisible(false)}
          />
        </label>
        <button 
          type='submit'
        >CREATE</button>
      </form>
      {status ==="error" && isErrorVisible && <div>Something went wrong...</div>}
    </div>
  )
}
