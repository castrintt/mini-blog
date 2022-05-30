import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useAuthentication } from '../../hooks/useAuthentication'

const CreatePost = () => {

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState('')

  const {loading, error} = useAuthentication()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.create_post}>
      <h1>Criar post</h1>
      <p>Escreva sobre o que você quiser e compartilhe o seu conhecimento!</p>
      <form
        onSubmit={handleSubmit}
      >
        <label>
          <span>
            Título:
          </span>
          <input
            type="text"
            name="title"
            placeholder='Pense em um título...'
            onChange={(e) => setTitle(e.target.value)}
            value={title} />
        </label>
        <label>
          <span>
            URL da imagem:
          </span>
          <input
            type="text"
            name="image"
            placeholder='Insira a Url da imagem do seu post'
            onChange={(e) => setImage(e.target.value)}
            value={image} />
        </label>
        <label>
          <span>
            Conteúdo:
          </span>
          <textarea
            name="body"
            required
            cols="30"
            rows="3"
            placeholder='Insira o conteúdo do post'
            onChange={(e) => setBody(e.target.value)}
            value={body}></textarea>
        </label>
        <label>
          <span>
            Tags:
          </span>
          <input
            type="text"
            name="tags"
            placeholder='Insira as tags do seu post separadas por vírgula'
            onChange={(e) => setTags(e.target.value)}
            value={tags} />
        </label>
        {loading === false ? (<button className='btn'>Criar post</button>) : (<button className='btn' disabled>Aguarde...</button>)}

                {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  )
}

export default CreatePost