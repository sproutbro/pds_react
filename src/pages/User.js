
const User = () => {

  const logOut = () =>{
    localStorage.removeItem("Authorization");
    window.location.replace("/");
  }
  return (
    <>
      <h1>User</h1>
      <button onClick={logOut}>로그아웃</button>
    </>
  )
}

export default User;