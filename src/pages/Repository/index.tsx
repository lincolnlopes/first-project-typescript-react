/* eslint-disable no-unused-vars */
import React from 'react';
import CKEditor from 'ckeditor4-react';

const Repository: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [inputValue, setInputValue] = React.useState(null);

  const onChange = (event: any) => {
    console.log(event.target);
  };

  return (
    <h1>
      Repository
      <CKEditor data={inputValue} onChange={onChange} />
    </h1>
  );
};

export default Repository;
