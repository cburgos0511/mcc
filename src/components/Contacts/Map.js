import React from 'react'
import s from './map.scss'
// import { graphql, useStaticQuery } from 'gatsby'
import GoogleMapReact from 'google-map-react'

const Marker = ({ text, $hover }) => {
    const style = $hover ? s.markerScale : s.marker

    return <div className={style}></div>
}

const Map = () => {
    // const { allLocationData } = useStaticQuery(
    //     graphql`
    //         query LocationQuery {
    //             allLocationData {
    //                 edges {
    //                     node {
    //                         results {
    //                             geometry {
    //                                 location_type
    //                                 location {
    //                                     lat
    //                                     lng
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     `
    // )

    return (
        <div>
            <p>hello@millardcommunity.church</p>
            <p className={s.address}>12656 Weir St, Omaha, NE 68137</p>

            <div className={s.map}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'AIzaSyAQTy5W2_46KgjaqDbR_MJHyLSx0nR-s70',
                    }}
                    defaultCenter={{ lat: 41.2064881, lng: -96.1117639 }}
                    defaultZoom={16}
                    hoverDistance={75}
                >
                    <Marker text="MCC" lat={41.2064881} lng={-96.1117639} />
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default Map
