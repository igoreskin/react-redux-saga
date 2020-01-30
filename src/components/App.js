import React from 'react';

function* testing() {
  yield 1;
  yield 2;
  yield 3
}

function App() {
  const iterator = testing();
  console.log(iterator.next())

  return (
    <div>test</div>
  );
}

export default App;
