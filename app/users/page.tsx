interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersList: User[] = await res.json();
  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1>Users: {usersList.length}</h1>
      <ul>
        {usersList.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
};

export default UsersPage;
