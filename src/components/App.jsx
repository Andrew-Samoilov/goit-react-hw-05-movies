import { Route, Routes } from "react-router-dom";
import { lazy , Suspense} from "react";
import { Container, Header, Logo, Link } from "./App.styled";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MoviesDetails = lazy(() => import("../pages/MoviesDetails"));
const Cast = lazy(() => import("../components/Cast"));
const Reviews = lazy(() => import("../components/Reviews"));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesDetails />} >
            <Route path="/movies/:id/cast" element={<Cast />} />
            <Route path="/movies/:id/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
