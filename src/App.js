import { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
//npx rtl-book serve query-notes.js
function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
