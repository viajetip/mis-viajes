const LoginPageExampleB = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
		const data = {
			email: e.target.email.value,
			password: e.target.password.value
		}
        //El código para hacer login …
		console.log(data.email, data.password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" name="email" />

      <label>Password</label>
      <input type="password" name="password" />

      <button type="submit">Login</button>
    </form>
  )
}

export default LoginPageExampleB