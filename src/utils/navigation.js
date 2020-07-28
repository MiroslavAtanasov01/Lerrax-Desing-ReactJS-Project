const getNavigation = (loggedIn, user) => {

    const authLinks = [
        {
            title: "Products",
            link: "/"
        },
        {
            title: "Contacts",
            link: "/contacts"
        },
        {
            title: "About us",
            link: "/about"
        },
        {
            title: "Profile",
            link: `/profile/${user && user.id}`
        },
    ]

    const guestLinks = [
        {
            title: "Products",
            link: "/"
        },
        {
            title: "Register",
            link: "/register"
        },
        {
            title: "Login",
            link: "/login"
        },
    ]

    return loggedIn ? authLinks : guestLinks
}

export default getNavigation