import styles from "./UserBar.module.css";

const UserBar = ({ details }) => {
  //   const handleUserNameChange = (event) => {
  //     details.setUserName(event.target.value);
  //   };
  //   const handlePasswordChange = (event) => {
  //     details.setUserPassword(event.target.value);
  //   };

  const handleCredentials = (event) => {
    details.setCredentials((prevCredentials) => {
      return {
        ...prevCredentials,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    alert(
      `logged in with username: ${details.userName} and password: ${details.userPassword}`
    );
  };

  return (
    <div className={styles.userBarContainer}>
      <form onSubmit={handleLogin}>
        <label>username</label>
        <input
          name="userName"
          onChange={handleCredentials}
          value={details.userName}
        />
        <br />
        <label>password</label>
        <input
          name="password"
          type="password"
          onChange={handleCredentials}
          value={details.userPassword}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default UserBar;
