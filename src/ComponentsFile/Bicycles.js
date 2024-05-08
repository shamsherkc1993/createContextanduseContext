import React from 'react';
import { Title } from '../index';

const Bicycles = () => {
  return (
    <div>
      <Title.Consumer>
        {(newTitle) => {
            return <h1>Bicycle component: {newTitle}</h1>
        }}
      </Title.Consumer>
    </div>
  )
}

export default Bicycles
