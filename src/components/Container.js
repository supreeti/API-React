import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../redux/users/usersSlice';

const Container = () => {

    const dispatch = useDispatch();
    const { users, isLoading, isError} = useSelector((store) => store.myUser);
    
    useEffect(() => {
        dispatch(fetchUsers());
      }, [dispatch]);
      if(isLoading){
        return (
          <div className="display">
            <h1>Page Loading...</h1>
          </div>
        );
      }
if (isError) {
        return (
          <div className="error">
            <h1>Something went wrong...</h1>
          </div>
        );
      }
  return (
    <section className='main'>
    <header>
        <h1>Fetch Users</h1>
    </header>
    <div>
        <ul>
        {users.map((user) => {
            

            return <li key={user.id}><p>{user.name.first}{` `}{user.name.last} </p></li>
           
        })}
        </ul>
    </div>
</section>
  );
}

export default Container;