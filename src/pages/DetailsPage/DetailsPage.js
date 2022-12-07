import React from 'react'
import { useParams } from 'react-router-dom'

const DetailsPage = () => {
    const params = useParams()

    return (
        <>
            <div>DetailsPage</div>
            {params.recipeId}
        </>
    )
}

export default DetailsPage