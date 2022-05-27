import styles from './Register.module.css'
import { useState, useEffect } from 'react'

//hook
import { useAuthentication } from '../../hooks/useAuthentication'

const Register = () => {

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const { createUser, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError(null)

        const user = {
            name: displayName,
            email: email,
            password: password,
        }

        if (password != confirmPassword) {
            setError('As senhas precisam ser iguais')
            return
        }

        const res = await createUser(user)
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
        <div className={styles.register}>
            <h1>
                Cadastre-se para postar
            </h1>
            <p>
                Crie seu usuário e compartilhe suas histórias
            </p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>
                        Nome:
                    </span>
                    <input type="text" name="displayName" placeholder='Nome do usuário' required onChange={(e) => setDisplayName(e.target.value)} value={displayName} />
                </label>
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
                <label>
                    <span>
                        Confirmação de senha:
                    </span>
                    <input type="password" name="confirmPassword" placeholder='Confirme a sua senha' required onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </label>
                {loading === false ? (<button className='btn'>Cadastrar</button>) : (<button className='btn' disabled>Aguarde...</button>)}

                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    )
}

export default Register