import UserCard from "../userCard";

const User = ({ user }) => {
  return (
    <div className="container">
      {user.map((char) => (
        <UserCard key={char.id} char={char} />
      ))}
    </div>
  );
};
export default User;
