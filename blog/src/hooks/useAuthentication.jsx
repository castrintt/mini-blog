import { db } from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    //cleanup
    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }


    // register
    async function createUser(data) {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password,
            )

            await updateProfile(user, {
                displayName: data.displayName
            })
            setLoading(false)

            return user

        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)


            if (error.message.includes('Password')) {
                setError('A senha deve ter ao menos 6 caracteres.')
                setLoading(false)
            } else if (error.message.includes('email-already-in-use')) {
                setError('E-mail ja cadastrado.')
                setLoading(false)
            } else {
                setError('Ocorreu um erro, por favor tente novamente mais tarde.')
                setLoading(false)
            }
        }
    }

    //logout

    const logout = () => {

        checkIfIsCancelled()
        signOut(auth)

    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,

    }
}