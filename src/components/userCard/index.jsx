import "./style.css";
const UserCard = ({ char: { name, user, email, password } }) => {
  console.log(name, user, email, password);
  return (
    <div className="card">
      <div>Usuario: {user}</div>
      <div>Nome: {name}</div>
      <div>Email: {email}</div>
      <div>Senha: {password}</div>
    </div>
  );
};
export default UserCard;
