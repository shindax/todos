import { Link } from "react-router-dom";

export default function Error404()
{
    return (
        <section>
            <h1>Дело не существует!</h1>
            <p>
                Вернитесь на <Link to="/">Перечень дел</Link>  и выберите что-нибудь другое
            </p>
        </section>
    );
}