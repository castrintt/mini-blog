// CSS
import styles from "./Home.module.css";

// react
import { useState } from "react";
import {Link } from 'react-router-dom'

// components
import PostDetails from '../../components/postDetails/PostDetails.jsx'

//hooks
import {useFetchDocuments} from '../../hooks/useFetchDocuments.jsx'


const Home = () => {


  const [query, setQuery] = useState("");
  const {documents: posts, loading} = useFetchDocuments("posts")

  const handleSubmit = (e) => {
    e.preventDefault();


  };


  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div className="post-list">
        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/post/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetails key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Home;