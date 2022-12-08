export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToSignUpPage = (navigate) => {
    navigate("/signup")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToDetailsPage = (navigate, recipeId) => {
    navigate(`/recipe/${recipeId}`)
}