import s from '../Articles/individualArticles.scss'
import React, { useEffect } from 'react'
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

const Timeline = ({
    title,
    load,
    totalPages,
    currentPage,
    previousPage,
    nextPage,
    pdf,
}) => {
    useEffect(() => {
        ScrollTrigger.create({
            trigger: '#trigger',
            start: 'top',
            onEnter: () => gsap.to('#icon', { opacity: 1 }),
            onEnterBack: () => gsap.to('#icon', { opacity: 0 }),
        })
    }, [])

    // const prevBtnVisibility = currentPage <= 1 ? 'hidden' : 'visible'
    // const nextBtnVisibility = currentPage >= totalPages ? 'hidden' : 'visible'

    return (
        <section className={s.pdfmain}>
            <h1 className={s.title} style={{ marginBottom: 70 }}>
                {title}
            </h1>
            <a
                className={s.pdfmain__download}
                href={pdf}
                target="_blank"
                rel="noreferrer"
                tabIndex="0"
            >
                Download
            </a>

            <div className={s.pdfmain__container}>
                <div id="trigger" className={s.pdfmain__container__doc}>
                    {totalPages > 1 && (
                        <div
                            id="icon"
                            className={s.lchevron}
                            // style={{ visibility: prevBtnVisibility }}
                        >
                            <i
                                aria-label="previous"
                                role="button"
                                tabIndex="-1"
                                className={s.lchevron__left}
                                onClick={currentPage <= 1 ? null : previousPage}
                            ></i>
                        </div>
                    )}

                    <div className={s.pdfmain__container__doc__wrapper}>
                        <p className={s.pdfmain__container__doc__wrapper__p}>
                            Page {currentPage || (totalPages ? 1 : '--')} of{' '}
                            {totalPages || '--'}
                        </p>
                        <Document
                            file={pdf}
                            onLoadSuccess={load}
                            options={options}
                        >
                            <Page scale={1.8} pageNumber={currentPage} />
                        </Document>
                    </div>
                    {totalPages > 1 && (
                        <div
                            id="icon"
                            className={s.rchevron}
                            // style={{ visibility: nextBtnVisibility }}
                        >
                            <i
                                role="button"
                                tabIndex="-2"
                                aria-label="next"
                                className={s.rchevron__right}
                                onClick={
                                    currentPage >= totalPages ? null : nextPage
                                }
                            ></i>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Timeline
