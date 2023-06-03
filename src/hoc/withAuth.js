const withAuth = (Component) => {
    return (
        <div>
            <Component/>
            мы внутри HOC
        </div>
    )
}