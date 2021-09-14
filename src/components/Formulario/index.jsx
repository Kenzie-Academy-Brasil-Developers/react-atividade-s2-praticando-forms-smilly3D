import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import { Link } from "react-router-dom";

function Form({ user, setUser }) {
  const formSchema = yup.object().shape({
    user: yup.string().required("Nome de usuario obrigatório"),
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    emailConfirm: yup
      .string()
      .required("Email obrigatório")
      .oneOf([yup.ref("email"), null], "Os emails tem que ser igual."),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g,
        "Deve conter no minimo 1 Letra Maiuscula, 1 Letra Minuscula, e um caractere especial"
      ),
    passwordConfirm: yup
      .string()
      .required("Senha obrigatória")
      .oneOf([yup.ref("password"), null], "As senhas não são iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    setUser([...user, data]);
  };

  return (
    <div className="Box">
      <span className="elements">
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="alertArea">{errors.user?.message}</div>
          <input
            maxLength="18"
            placeholder="Nome do usuário*"
            pattern="[a-zA-Z0-9]+"
            {...register("user")}
          />
          <div className="alertArea">{errors.name?.message}</div>
          <input placeholder="Nome completo*" {...register("name")} />
          <div className="alertArea">{errors.email?.message}</div>
          <input placeholder="Endereço de Email*" {...register("email")} />
          <div className="alertArea">{errors.emailConfirm?.message}</div>
          <input
            placeholder="Confirme seu Email*"
            {...register("emailConfirm")}
          />
          <div className="alertArea">{errors.password?.message}</div>
          <input placeholder="Senha" {...register("password")} />

          <div className="alertArea">{errors.passwordConfirm?.message}</div>
          <input
            placeholder="Confirme sua Senha*"
            {...register("passwordConfirm")}
          />

          {/* <span>
            <input type="checkbox" {...register("checkbox")} />
            <label htmlFor="">smilly</label>
          </span> */}
          <span>
            <button type="submit">
              <span>ACADASTRAR</span>
            </button>

            <Link className={Link} to="/Cadastrados">
              <button>
                <span>VER CADASTRADOS</span>
              </button>
            </Link>
          </span>
        </form>
      </span>
    </div>
  );
}

export default Form;
