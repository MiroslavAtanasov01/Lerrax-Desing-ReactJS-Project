const getNavigation = (userId) => {

    const links = [
        {
            title: "Products",
            link: "/"
        },
        {
            title: "Brochure",
            link: "/brochure"
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
            link: `/profile/${userId}`
        },
        {
            title: "Register",
            link: "/register"
        },
        {
            title: "Login",
            link: "/login"
        },
        {
            title: 'Logout',
            link: '/logout'
        }
    ]

    return links
}

export default getNavigation