import withAuth from "../../hoc/withAuth"

const MainPage = ()=> {
    return (
        <div>
            Это наша главная страница! 
            Велкам!
        </div>
    )
}

export default withAuth(MainPage);