import "./App.css";
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
//SOLID PRINCIPLES

//SINGLE RESPONSABILITY

//CADA FUNCION/COMPONENTE DEBE TENER UNA UNICA FUNCIONALIDAD
//UNA UNICA RESPONSABILIAD

//CUANDO TENEMOS UN USEEFECT CONECTADO CON UN USESTATE, PODEMOS SACARLO A UN CUSTOM HOOK
const useUsers = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await fetch("/some-api");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return { users };
};

//CUANDO TENEMOS CASOS DE MAPS Y RENDERIZADOS, SI ES UN ONE-LINER ESTA BIEN
//DE RESTO PODEMOS EXTRAERLO Y MODULARIZARLO
const UserItem = ({ user }) => {
  return (
    <li>
      <img src={user.avatarUrl} />
      <p>{user.fullName}</p>
      <small>{user.role}</small>
    </li>
  );
};

//

export const ActiveUsersList = () => {
  const { users } = useUsers();

  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  return (
    <ul>
      {users
        .filter((user) => !user.isBanned && user.lastActivityAt >= weekAgo)
        .map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
    </ul>
  );
};

UserItem.propTypes = {
  user: PropTypes.object,
};
