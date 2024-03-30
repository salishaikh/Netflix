import React from 'react'
import Main from '../component/Main'
import Row from '../component/Row'
import request from '../Request'
const Home = () => {
    return (
        <>
            <Main />
            <Row title='Up Coming' fetchURL={request.requestTopRated} />
            <Row title='Trending' fetchURL={request.requestTrending} />
            <Row title='comedy' fetchURL={request.requestlist} />


        </>
    )
}

export default Home