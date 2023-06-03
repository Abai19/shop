import withAuth from "../../hoc/withAuth"
import Header from "../../components/header/Header";

const MainPage = ()=> {
    return (
        <div>
            <Header/>
        </div>
    )
}

export default withAuth(MainPage);