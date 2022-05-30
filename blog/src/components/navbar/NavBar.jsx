// hooks
import { useAuthentication } from "../../hooks/useAuthentication";

//context
import { useAuthValue } from "../../context/AuthContext";

// react Router
import { NavLink } from "react-router-dom";

// css
import styles from "./NavBar.module.css";
import { useEffect } from "react";

const Navbar = () => {

  const { user } = useAuthValue()
  const { logout } = useAuthentication()


  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Home
          </NavLink>
        </li>
      {/* if user was logged, this may not appear */}
       {!user && 
       ( <>
           <li>
          <NavLink
            to="/login"
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Entrar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Cadastrar
          </NavLink>
        </li>
        </>)
       }
       {/* if user was logged, this may appear  */}
       {user && 
        <>
         <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Dashboard
          </NavLink>
        </li>
         <li>
          <NavLink
            to="/post/create"
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Novo post
          </NavLink>
        </li>
        </>
       }
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Sobre
          </NavLink>
        </li>
        {user && 
          <>
            <li>
              <button
                onClick={logout}
              >
                Sair
              </button>
            </li>
          </>
        }
      </ul>
    </nav>
  );
};

export default Navbar;