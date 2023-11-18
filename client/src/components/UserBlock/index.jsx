
export const UserBlock = ({ name, email, avatar }) => {
  return (
      <div className="users__block">
      <img src={avatar} alt="Avatar" />
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
};
