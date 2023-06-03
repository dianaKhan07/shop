const WithAuth = (Component) => {
    return(
        <div>
            <Component/>
            мы внутри Hoc
        </div>
    )
}