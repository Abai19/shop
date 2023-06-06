import withAuth from "../../hoc/withAuth"
import Header from "../../components/header/Header";
import Content from "../../components/content/Content";

const MainPage = ()=> {
    return (
        <div>
            <Header/>
            <Content/>
        </div>
    )
}

export default withAuth(MainPage);