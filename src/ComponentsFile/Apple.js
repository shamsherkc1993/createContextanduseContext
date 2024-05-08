import React from 'react';
import { Title } from '../index';

export const Apple = () => {
  return (
    <div>
        <Title.Consumer>
          {(newTitle) => {
            return <h1>{newTitle}</h1>
          }}
        </Title.Consumer>
    </div>
  )
}
