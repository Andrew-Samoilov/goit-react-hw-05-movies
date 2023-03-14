import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { MoviesDetails } from "../pages/MoviesDetails";
import { Movies } from "../pages/Movies";
import { Container, Header, Logo, Link } from "./App.styled";
import { Cast } from "../components/Cast";
import { Reviews } from "../components/Reviews";

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          Movie Search
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetails />} >
          <Route path="/movies/:id/cast" element={<Cast />} />
          <Route path="/movies/:id/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Container>
  );
};
