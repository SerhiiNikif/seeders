import React, { useState, useRef, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreate } from '../../redux/user/asyncActions';
import { selectAdmin } from '../../redux/admin/selectors';
import { selectUsers } from '../../redux/user/selectors';

const defaultValue = {
  name: "",
  password: "",
  email: "",
  avatar: "",
}

export const CreateUser = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector(selectAdmin);
  const [user, setUser] = useState(defaultValue);
  const { statusCreate } = useSelector(selectUsers);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  useEffect(() => {
    if (statusCreate === "error" && isErrorVisible) {
      setIsErrorVisible(true);
    }
  }, [statusCreate, isErrorVisible]);

  const handleCreate = (e) => {
    e.preventDefault();

    dispatch(fetchCreate({user, accessToken}));
    // setUser(defaultValue)
    setIsErrorVisible(true);
  }

  const fileInputRef = useRef();

  const handleFileChange = () => {
    const selectedFile = fileInputRef.current.files[0];
    setUser({...user, avatar: selectedFile})
  };

  return (
    <div className="create__container">
      <h2 className="create__title">Create new user:</h2>
      <form className="create__form" onSubmit={handleCreate}>
        <label>
          <input 
            type="text" 
            placeholder='name' 
            value={user.name} 
            onChange={e => setUser({...user, name: e.target.value})}
            onFocus={() => setIsErrorVisible(false)}
          />
        </label>
        <label>
          <input 
            type="text" 
            placeholder='password' 
            value={user.password} 
            onChange={e => setUser({...user, password: e.target.value})}
            onFocus={() => setIsErrorVisible(false)}
            autoComplete="current-password"
          />
        </label>
        <label>
          <input 
            type="email" 
            placeholder='email' 
            value={user.email} 
            onChange={e => setUser({...user, email: e.target.value})}
            onFocus={() => setIsErrorVisible(false)}
            autoComplete="email"
          />
        </label>
        <label>
          <input 
            ref={fileInputRef}
            type="file" 
            accept="image/*"
            placeholder='avatar' 
            // value={user.avatar} 
            onChange={handleFileChange}
          />
        </label>
        <button className="button" type='submit'>Create</button>
      </form>

      {statusCreate === "error" && isErrorVisible && <div className="error">Something went wrong...</div>}
    </div>
  )
}
