import React, {useContext} from 'react';
import { Title, Location } from '../index';

const B = () => {

    const title = useContext(Title);
    const location = useContext(Location);

  return (
    <div>
      {/* <Title.Consumer>
        {(newTitle) => {
            return <h1>this is B component, {newTitle} location is {Location}</h1>
        }}
      </Title.Consumer> */}
      <h4>Title is : {title}, Location is : {location}</h4>

     

    </div>
  )
}

export default B
