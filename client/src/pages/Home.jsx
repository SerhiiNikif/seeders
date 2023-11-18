import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectUsers } from "../redux/user/selectors";
import { UserBlock, Pagination, CreateUser } from "../components";
import { fetchUsers, fetchGenerate, fetchDeleteUsers } from "../redux/user/asyncActions";
import { setCurrentPage } from "../redux/user/slice";
import { selectAdmin } from "../redux/admin/selectors";
import { removeAdmin } from "../redux/admin/slice";
import { fetchLogout } from '../redux/admin/asyncActions';

const Home = () => {
  const dispatch = useDispatch();
  const { statusCreate, statusGenerate, statusDeleteUsers, status, items, limit, countPages, currentPage } = useSelector(selectUsers);
  const isMounted = useRef(false);
  const {email, isAuth, accessToken, refreshToken} = useSelector(selectAdmin);
  const [notFound, setNotFound] = useState(false);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
    setNotFound(false)
  };

  const handleGenerate = () => {
    dispatch(fetchGenerate())
    setNotFound(false)
  }

  const handleDeleteUsers = () => {
    dispatch(fetchDeleteUsers({email}))
    setNotFound(false)
  }

  const handleShowMore = () => {
    dispatch(fetchUsers({currentPage, limit}))

    if (items.length === 0 && status === "success") {
      setNotFound(true)
    }
  };

  const handleLogout = () => {
    dispatch(
      fetchLogout({refreshToken})
    );
    dispatch(removeAdmin());
  };

  useEffect(() => {
    if (isMounted.current) {
      dispatch(fetchUsers({
        currentPage, 
        limit
      }))
    }

    isMounted.current = true;
  }, [ currentPage, statusCreate, statusDeleteUsers, limit, dispatch ]);

  useEffect(() => {
    const json = JSON.stringify({email, isAuth, accessToken});
    localStorage.setItem('admin', json);
  }, [email, isAuth, accessToken]);

  console.log(notFound, "UUUUUUUUUUUU");
  return (
    <div>
      <div className="wrapper">
        <div className="auth">
          {!isAuth && <button className="button"><Link to="/register">SIGN UP</Link></button>}
          {!isAuth && <button className="button"><Link to="/login">SIGN IN</Link></button>}
          {isAuth && <button className="button" onClick={handleLogout}>Log out</button>}
        </div>

        {isAuth && (
          <div className="admin">
            {isAuth && <h2>You are logged in</h2>}
            {isAuth && <CreateUser />}
          </div>
        )}

        {!isAuth && <div className="not-authorized">You are not authorized, so you will not be able to create a user</div>}
        
        <div className="users">
          <button className="button generate-users" onClick={handleGenerate}>Generate users</button>
          <button className="button delete-users" onClick={handleDeleteUsers}>Delete users</button>
          <button className="button show-more" onClick={handleShowMore}>Show more</button>
          {statusGenerate === "loading" && <div className="warning">Users are generated...</div>}
          {statusGenerate === "error" && <div className="error">Failed to generate users 😕</div>}

          {items.length === 0 ? (
            ((statusGenerate !== "success" && notFound) ||
              (statusDeleteUsers !== "success" && notFound) ||
              (statusGenerate === "success" && statusDeleteUsers === "success" && notFound)
              ) && (
              <div className="no-users">No users found 😕</div>
            )
          ) : (
              <div className="users-list">
                <h2>All users</h2>
                <div className="users_container">
                  {items.map((obj) => <UserBlock key={obj.id} {...obj} />)}
                </div>
                <Pagination 
                  limit={limit} 
                  countPages={countPages} 
                  currentPage={currentPage} 
                  onChangePage={onChangePage} 
                />
              </div>
            )
          }

          {/* {items.length !== 0 && 
            <div className="users-list">
              <h2>All users</h2>
              <div className="users_container">
                {items.map((obj) => <UserBlock key={obj.id} {...obj} />)}
              </div>
              <Pagination 
                limit={limit} 
                countPages={countPages} 
                currentPage={currentPage} 
                onChangePage={onChangePage} 
              />
            </div>
          }

          {notFound && <div className="no-users">No users found 😕</div>} */}

        </div>
      </div>
    </div>
  );
}

export default Home;
