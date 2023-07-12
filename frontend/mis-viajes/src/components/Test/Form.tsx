import {useState} from 'react'

const LoginPageExample = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };


  const handleOnClick = (e) => {
    e.preventDefault()
    //El código para hacer login …
		console.log(email, password)
  }

  return (
    <div>
      <label>Email</label>
      <input type="email" name="email" onChange={handleEmail} />

      <label>Password</label>
      <input type="password" name="password" onChange={handlePassword}/>

      <button type="submit" onClick={handleOnClick}>Login</button>
    </div>
  )
}

export default LoginPageExample