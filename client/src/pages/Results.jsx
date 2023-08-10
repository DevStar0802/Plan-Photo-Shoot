import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

//Map stuff
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';

//import the fetch request to get lat and long
import getTomTomData from '../utils/Map'

import createList from '../utils/PackingList';

function Results() {
    //Map stuff
    const mapElement = useRef();
    const [mapZoom, setMapZoom] = useState(10);
    const [map, setMap] = useState({});
    const [coordinates, setCoordinates] = useState({ lat: 33.42919, lon: -111.73205 });
    const [searchData, setSearchData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    //useEffect to reset packlist
    useEffect(() => {
        const oldData = JSON.parse(localStorage.getItem('searchForm'));
        oldData.packingList = []
        localStorage.setItem('searchForm', JSON.stringify(oldData));
        window.scrollTo(0, 0);
        geocodeData()
        packingList()
    }, []);

    //useEffect for creating map after geocode data returns
    useEffect(() => {
        let map = tt.map({
            key: import.meta.env.VITE_MAP_API_KEY1,
            container: mapElement.current,
            center: coordinates,
            zoom: mapZoom
        });
        map.addControl(new tt.FullscreenControl());
        map.addControl(new tt.NavigationControl());
        map.on('load', () => {
            new tt.Marker().setLngLat(coordinates).addTo(map)
        })
        setMap(map);

        return () => map.remove();
    }, [coordinates]);



    //sends address to geocode function to return coordinates
    const geocodeData = async function () {
        const savedSearchForm = JSON.parse(localStorage.getItem('searchForm'));
        let tomTomData = await getTomTomData(savedSearchForm)
        setCoordinates(tomTomData)
        setIsLoading(false)
        return tomTomData

    }

    //calls createList to get detailed data and saves to storage/searchData
    const packingList = function () {
        const object = JSON.parse(localStorage.getItem('searchForm'));
        const newObject = createList(object)
        localStorage.setItem('searchForm', JSON.stringify(newObject))
        setSearchData(newObject)
    }


    const renderPhotos = function () {
        return (
            searchData?.photos === true && searchData?.numPhotos ? (
                <div className="row">
                    <div className="col-sm-12 col-lg-8 mx-auto mt-4">
                        <div className=" text-lg-left">
                            <div className="card" id="photo-card" >
                                <h5 className="card-header fw-bold">Number of HDR Photos</h5>
                                <div className="card-body">
                                    <p id="num-photos" className='fs-5'>{searchData.numPhotos}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : <></>
        )
    }

    const renderDrone = function () {
        return (
            searchData.drone == true ?
                <div className="row" id="drone-card" >
                    <div className="col-sm-12 col-lg-8 mx-auto mt-4">
                        <div className=" text-lg-left">
                            <div className="card">
                                <h5 className="card-header fw-bold">Flight Restrictions</h5>
                                <div className="card-body">
                                    <p id="flight-restrictions" className='fs-5'>{searchData.fRestrictions}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : <></>
        )
    }

    const renderPackingList = function () {
        if (searchData.packingList) {
            return searchData.packingList.map(pack =>
                <div key={pack}>
                    <li key={pack}>{pack}</li>
                </div>)
        }
    }

    // Scroll to the top of the page
    const handleNewSearchClick = () => {
        window.scrollTo(0, 0);
    };

    return (isLoading ?
        <section className="projects-section bg-light" id="results" >
            <div className="container px-4 px-lg-5" id="results-cont">
                <div className='row'>
                    <div className="d-flex justify-content-center mt-5">
                        <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center justify-content-center">
                    {/* Div for map render */}
                    <div className="col-sm-10 col-lg-8 ">
                        <div className="mapContainer">
                            <div xs="8" className=''>
                                <div ref={mapElement} className="mapDiv w-100 mx-auto mt-5 visually-hidden" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        :
        <section className="projects-section bg-light" id="results" >
            <div className="container px-4 px-lg-5" id="results-cont">
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center justify-content-center">
                    {/* Div for map render */}
                    <div className="col-sm-10 col-lg-8 ">
                        <div className="mapContainer">
                            <div xs="8" className=''>
                                <div ref={mapElement} className="mapDiv w-100 mx-auto mt-5" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-lg-8 mx-auto mt-4">
                        <div className=" text-center">
                            <h2 className="mb-4">Your Preparation </h2>
                        </div>
                    </div>
                </div>
                {renderPhotos()}
                {renderDrone()}
                <div className="row">
                    <div className="col-sm-12 col-lg-8 mx-auto mt-4">
                        <div id="list mt-4 text-lg-left">
                            <div className="card">
                                <h5 className="card-header fw-bold">Packing List</h5>
                                <div className="card-body">
                                    <h5 className="card-title ">Bring the following...</h5>
                                    <ul id="packing-list">
                                        {renderPackingList()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-lg-8 mx-auto text-center mt-4">
                <Link to={'/'} onClick={handleNewSearchClick} className="btn btn-warning text-center mx-auto" id="new-search">New Search</Link>
            </div>
        </section>
    )
}

export default Results