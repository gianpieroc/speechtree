import React from 'react';
import {Link} from 'react-router-dom';
import createPath from './createPath';
import Input from '../Input';
import './style.css';

const List = ({
  hideArrow = false,
  style,
  items,
  itemId,
  path,
  name,
  state,
  disabled,
  showInput,
}) => {
  return (
    <ul className="container" style={style}>
      <h3>{name}</h3>
      {showInput && <Input hidden={!showInput} />}
      {Object.values(items).map((item, index) => {
        const linkPath = createPath(path, ':' + itemId, item[itemId]);
        return (
          <Link
            key={index}
            to={{pathname: linkPath, state: {...state, [name]: item}}}>
            {item.key && <h4>{item.key}</h4>}
            <h4>{item.value || item.name}</h4>
            {!hideArrow && <h4>></h4>}
          </Link>
        );
      })}
    </ul>
  );
};

export default List;
