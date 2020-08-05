const getNavigation = (loggedIn, user) => {

    const authLinks = [
        {
            title: "English",
            link: "/"
        },
        {
            title: "Wishlist",
            link: "/wishlist"
        },
        {
            title: "Account",
            link: `/profile/${user && user.id}`
        },
        {
            title: "Shopping cart",
            link: "/cartPage"
        },
    ]

    const guestLinks = [
        {
            title: "English",
            link: "/"
        },
        {
            title: "Log in",
            link: "/login"
        },
        {
            title: "Sign up",
            link: "/register"
        },
    ]

    return loggedIn ? authLinks : guestLinks
}

export default getNavigation