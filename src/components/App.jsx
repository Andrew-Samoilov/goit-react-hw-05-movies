import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { MuviesDetails } from "../pages/MuviesDetails";
import { Muvies } from "../pages/Muvies";
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
          <Link to="/muvies">Muvies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/muvies" element={<Muvies />} />
        <Route path="/muvies/:id" element={<MuviesDetails />} >
          <Route path="/muvies/:id/cast" element={<Cast />} />
          <Route path="/muvies/:id/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Container>
  );
};
