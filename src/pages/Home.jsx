import { Quotes } from "../components/Quotes";
import { MovieList } from "../components/MovieList";
import { Logout } from "../components/Logout";
import { Login } from "../components/Login";



function Home() {

  return (
    <div>
      <Login />
      <Logout />
      <Quotes />
      <MovieList />
    </div>
  )}

export { Home };