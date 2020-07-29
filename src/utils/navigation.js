const getNavigation = (loggedIn, user) => {

    const authLinks = [
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