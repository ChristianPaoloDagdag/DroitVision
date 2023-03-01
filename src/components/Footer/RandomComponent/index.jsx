import React, { useState } from 'react';

export default function RandomCompoenent(props) {
  const { randomProps, randomPropsTwo } = props;

  const [pao, setPao] = useState('BYC');

  const fullName = `${randomProps}${randomPropsTwo}`;

  setPao(fullName);

  'aosdfjl;kasdjflkasdjf;lkasdjf;lajsdf';

  return (
    <>
      <div>{fullName}</div>
      <div>
        {pao}
      </div>
    </>
  );
}
