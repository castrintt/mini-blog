import React from 'react'
import PostDetail from '../../components/postDetails/PostDetails'

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'

//react router dom
import {Link} from 'react-router-dom'



const Search = () => {

    const query = useQuery()
    const search = query.get("q")

    const { documents: posts } = useFetchDocuments("posts", search)

    return (
        <div>
            <h2>
                Search
            </h2>
            <div>
                {posts && posts.length === 0 && (
                    <>
                        <p>Não foram encontrados posts a partir da sua busca...</p>
                        <Link to='/' className='btn btn-dark'>
                            Voltar
                        </Link>
                    </>
                )}
                {posts && posts.map((post) => (
                    <PostDetail key='post.id' post={post} />
                ))}
            </div>
        </div>
    )
}

export default Search