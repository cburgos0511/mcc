import CT from '../../assets/Condensed_Timeline.pdf'
import React, { useState } from 'react'
import Timeline from '../../components/Articles/Timeline'

const AdamToChrist = () => {
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
            title="Adam to Christ"
                load={onDocumentLoadSuccess}
                previousPage={previousPage}
                nextPage={nextPage}
                currentPage={pageNumber}
                totalPages={numPages}
                pdf={CT}
            />
        </main>
    )
}

export default AdamToChrist
