import React, { memo } from 'react';

const Person = ({ person }) => {
  console.log('rendering');
  // it will rendering every parent component rendered
  return (
    <div>
      <p>{person.name}</p>
      <p>{person.age}</p>
    </div>
  );
};

// using memo makes memoize Person component only for
// when parent component rendered as default

// or if Person component has rendered on first time,
// and next, if it has changes 

// but memo has cons, for first render it takes longer time than
// without memo
export default memo(Person);
