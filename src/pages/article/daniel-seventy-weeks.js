import DSW from '../../assets/seventy_sevens_of_daniel_9.pdf'
import React, { useState } from 'react'
import Timeline from '../../components/Articles/Timeline'

const Daniel = () => {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }

    const changePage = offset => {
        setPageNumber(prevPageNumber => prevPageNumber + offset)
    }

    const previousPage = () => {
        changePage(-1)
    }

    const nextPage = () => {
        changePage(1)
    }
    return (
        <main>
            <Timeline
                title="Daniel Seventy Weeks"
                load={onDocumentLoadSuccess}
                previousPage={previousPage}
                nextPage={nextPage}
                currentPage={pageNumber}
                totalPages={numPages}
                pdf={DSW}
            />
        </main>
    )
}

export default Daniel
