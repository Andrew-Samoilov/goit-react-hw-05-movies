import { Link, Outlet } from "react-router-dom";
// import { MuviesList } from "../components/muviesList";
// import { getMuvies } from "../fakeAPI";

export const Muvies = () => {
    // const muvies = getMuvies();
    return (
        <main>
            <h1>Muvies</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
                laborum amet ab cumque sit nihil dolore modi error repudiandae
                perspiciatis atque voluptas corrupti, doloribus ex maiores quam magni
                mollitia illum dolor quis alias in sequi quod. Sunt ex numquam hic
                asperiores facere natus sapiente cum neque laudantium quam, expedita
                voluptates atque quia aspernatur saepe illo, rem quasi praesentium
                aliquid sed inventore obcaecati veniam? Nisi magnam vero, dolore
                praesentium totam ducimus similique asperiores culpa, eius amet
                repudiandae qua m ut. Architecto commodi, tempore ut nostrum voluptas
                dolorum illum voluptatum dolores! Quas perferendis quis alias excepturi
                eaque voluptatibus eveniet error, nulla rem iusto?
            </p>
            {/* тимчасово, щоб легше переходити */}
            <ul>
                <li>
                    <Link to="cast">Read about our Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Read reviews</Link>
                </li>
            </ul>
            <Outlet />
        </main>
    );
};
