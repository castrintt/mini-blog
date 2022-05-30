import styles from './Login.module.css'

// hook
import { useAuthentication } from '../../hooks/useAuthentication'

import { useState, useEffect } from 'react'


const Login = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError(null)

    const user = {
      email: email,
      password: password,
    }

    const res = await login(user)
    console.log(res)
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
      setTimeout(() => {
        setError('')
      }, 2500);
    }
  }, [authError])


  return (
    <div className={styles.login}>
      <h1>
        Entrar
      </h1>
      <p>
        Faça o login para poder utilizar o sistema
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>
            E-mail:
          </span>
          <input type="email" name="displayEmail" placeholder='E-mail do usuário' required onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>
        <label>
          <span>
            Senha:
          </span>
          <input type="password" name="displayPassword" placeholder='Insira sua senha' required onChange={(e) => setPassword(e.target.value)} value={password} />
        </label>
        {loading === false ? (<button className='btn'>Entrar</button>) : (<button className='btn' disabled>Aguarde...</button>)}
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  )
}

export default Login