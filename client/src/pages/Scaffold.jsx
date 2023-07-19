import { useState } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import MainPage from './MainPage'

export default function scaffoldContainer() {
    const [page, setPage] = useState('Main')

    const renderPage = () => {
        if (page === 'Main') {
            return <MainPage handlePageChange={handlePageChange} />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setPage(page);

    return (
        <>
            <Nav handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer handlePageChange={handlePageChange} />
        </>
    )
}