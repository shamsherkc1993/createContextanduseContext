import React, {useContext} from 'react';
import { User } from '../index';


const Cars = () => {
  let user = useContext(User);
  console.log(user)
  return (
    <div>
        <p>Car components</p>
        <table className="table">
        <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
        </tr>
        </thead>
        <tbody>
          {
            user.map((values) => {
              return <tr>
                      <th>{values.id}</th>
                      <th>{values.name}</th>
                      <th>{values.email}</th>
                    </tr>
            })
          }
        </tbody>
    </table>
    </div>
  )
}

export default Cars