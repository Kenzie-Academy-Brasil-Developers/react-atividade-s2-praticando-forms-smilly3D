import User from "../../components/user";
import { Link } from "react-router-dom";
import "./style.css";

const Cadastrados = ({ user }) => {
  console.log(user);
  return (
    <>
      <div className="top">
        <h1>Cadastrados</h1>
      </div>
      <User user={user} />
      <Link to="/">Voltar</Link>
    </>
  );
};
export default Cadastrados;
