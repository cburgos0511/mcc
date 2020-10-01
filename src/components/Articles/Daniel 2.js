
import s from '../Articles/individualArticles.scss'
import React, { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
}

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals('ScrollTrigger', ScrollTrigger)

const Daniel = () => {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }

    const changePage = offset => {
        setPageNumber(prevPageNumber => prevPageNumber + offset)
    }

    return (
        <section className={s.pdfmain}>
            <h1 className={s.title} style={{ marginBottom: 70 }}>
                Daniel Seventy Weeks
            </h1>
            <a
                className={s.pdfmain__download}
                href={DSW}
                target="_blank"
                rel="noreferrer"
            >
                Download
            </a>

            <div className={s.pdfmain__container}>
                <div id="pdf" className={s.pdfmain__container__doc}>
                    <div className={s.pdfmain__container__doc__wrapper}>
                        <p className={s.pdfmain__container__doc__wrapper__p}>
                            Page {pageNumber || (numPages ? 1 : '--')} of{' '}
                            {numPages || '--'}
                        </p>
                        <Document
                            file={DSW}
                            onLoadSuccess={onDocumentLoadSuccess}
                            options={options}
                        >
                            <Page scale={1.8} pageNumber={pageNumber} />
                        </Document>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Daniel
