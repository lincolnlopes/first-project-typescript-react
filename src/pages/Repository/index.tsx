import React from 'react';
import CKEditor from 'ckeditor4-react';

const Repository: React.FC = () => {
  const [inputValue, setInputValue] = React.useState(null);

  const onChangeHandler = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <h1>
      Repository
      <CKEditor data={inputValue} onChange={onChangeHandler} />
    </h1>
  );
};

export default Repository;
