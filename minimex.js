import React from 'react';
import './VerticalStack.css';

const VerticalStack = ({ children, gap = '10px' }) => {
  const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: gap,
  };

  return <div style={stackStyle}>{children}</div>;
};

const App = () => (
  <VerticalStack>
    <div className="item">Item 1</div>
    <div className="item">Item 2</div>
    <div className="item">Item 3</div>
  </VerticalStack>
);

export default App;
