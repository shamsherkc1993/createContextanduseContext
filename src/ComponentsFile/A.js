import React, {useContext} from 'react';
import { Title, About,  Location, User} from '../index';

const A = () => {
    const newTitle = useContext(Title);
    const aboutMe = useContext(About);
    const location = useContext(Location);
    const user = useContext(User);


  return (
    <div>
      {/* <Title.Consumer>
        {(newTitle) => {
            return (
                <About.Consumer>
                {(aboutMe) => {
                    return <h1>About is : , {aboutMe}</h1>
                }}
              </About.Consumer>
            );
        }}
      </Title.Consumer> */}

      <h1>Title is : {newTitle}</h1>
      <h1>About me : {aboutMe}</h1>
      <h1>Location is : {location}</h1>

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
                let a = 0;
                return  <tr key={values.id}>
                            <td>{values.id}</td>
                            <td>{values.name}</td>
                            <td>{values.email}</td>

                        </tr>
            })
        }
     

    </tbody>
  </table>




     
    </div>
  )
}

export default A
