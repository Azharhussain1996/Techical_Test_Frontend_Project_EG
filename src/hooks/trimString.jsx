import React from 'react';

const SplitText = React.memo(({ str }) => {
  return (
    <div>
      {str.split(' ').map((item, index) => {
        return (
          <div key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
});

export default SplitText;