import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux"
import { fetchUsers } from "../features/users/usersSlice";
import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";


function User() {

    const data = useSelector(state => state.users);
    const dispatch = useDispatch();
  
    const fetchData = () => {
        dispatch(fetchUsers());
    }

    return (
    <div className="usersContainer">
        <h3>Users :</h3>
        <p>Get users api with Redux Asyinc Thunk</p>
        {
            !data.users.length && 
            <button onClick={fetchData}>
                {!data.Loading && <>Click On Me To Show Users!</>}
                <div className="sweet-loading">
                    <PulseLoader
                        color="#646cff"
                        loading={data.Loading}
                        size={8}
                        aria-label="Loading Users"
                        data-testid="loader"
                    />
                </div>    
            </button>
        }

        <div className="users">
            {
                data.users.length ? 
                data.users.map(user => (
                    <p key={user.id}>{user.name}</p>
                )) : null
            }
        </div>
        
    </div>
    )
}

export default User