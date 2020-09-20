import pdf from '../../assets/Lang_TonguesMovement.pdf'
import s from '../../components/Articles/individualArticles.scss'
import React, { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals('ScrollTrigger', ScrollTrigger)

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
}

const TonguesMovement = () => {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    const [file, setFile] = useState(pdf)

    useEffect(() => {
        ScrollTrigger.create({
            trigger: '#pdf',
            start: 'top',
            markers: true,
            // end: 'bottom 50%+=100px',
            onEnter: () => gsap.to('#icon', { opacity: 1 }),
            onEnterBack: () => gsap.to('#icon', { opacity: 0 }),
        })
    }, [])

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
        <main className={s.pdfmain}>
            <h1 className={s.title} style={{ marginBottom: 70 }}>
                Modern Tongues Movement
            </h1>
            <a
                className={s.pdfmain__download}
                href={pdf}
                target="_blank"
                rel="noreferrer"
            >
                Download
            </a>

            <div className={s.pdfmain__container}>
                <div id="pdf" className={s.pdfmain__container__doc}>
                    <div id="icon" className={s.lchevron}>
                        <i
                            aria-label="previuos"
                            role="button"
                            className={s.lchevron__left}
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                        ></i>
                    </div>

                    <div className={s.pdfmain__container__doc__wrapper}>
                        <p className={s.pdfmain__container__doc__wrapper__p}>
                            Page {pageNumber || (numPages ? 1 : '--')} of{' '}
                            {numPages || '--'}
                        </p>
                        <Document
                            file={file}
                            onLoadSuccess={onDocumentLoadSuccess}
                            options={options}
                        >
                            <Page scale={1.8} pageNumber={pageNumber} />
                        </Document>
                    </div>
                    <div id="icon" className={s.rchevron}>
                        <i
                            aria-label="next"
                            role="button"
                            className={s.rchevron__right}
                            disabled={pageNumber >= numPages}
                            onClick={nextPage}
                        ></i>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TonguesMovement
