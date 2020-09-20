import HM from '../../assets/History_of_Man.pdf'
import React, { useState } from 'react'
import Timeline from '../../components/Articles/Timeline'

const HistoryOfMan = () => {
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
                title="History of Man"
                load={onDocumentLoadSuccess}
                previousPage={previousPage}
                nextPage={nextPage}
                currentPage={pageNumber}
                totalPages={numPages}
                pdf={HM}
            />
        </main>
    )
}

export default HistoryOfMan
