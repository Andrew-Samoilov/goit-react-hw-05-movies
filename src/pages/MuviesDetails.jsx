import { Link, Outlet } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { getProductById } from "../fakeAPI";

export const MuviesDetails = () => {
    // const { id } = useParams();
    // const product = getProductById(id);
    return (
        <main>
        <img src="https://via.placeholder.com/960x240" alt="" width="100%"/>
            <div>
                <h2>
                    MuviesDetails
                    {/* - {product.name} - {id} */}
                </h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
                    sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
                    a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
                    atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
                    praesentium ipsum quos unde voluptatum?
                </p>
                <ul>
                    <li>
                        <Link to="cast">Read about our Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Read reviews</Link>
                    </li>
                </ul>
                <Outlet />
            </div>
        </main>
    );
};
