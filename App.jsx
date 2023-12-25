import React from "react";
import Row from './Netflix/components/Row'
import request from "./Netflix/request";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./Netflix/components/MovieDetails";
import Header from "./Netflix/components/Header";
import CastDetails from "./Netflix/components/CastDetails";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes> 
          <Route path="/" element={
            <> 
            <Header/>
            <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} islargeRow/>,
            <Row title="Trending Movies" fetchUrl={request.fetchTrending}/>,
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} />,
            <Row title="Action" fetchUrl={request.fetchingActionMovies} />,
            <Row title="Horror" fetchUrl={request.fetchingHorrorMovies} />,
            <Row title="Romance" fetchUrl={request.fetchingRomanceMovies} />,
            <Row title="Documentry" fetchUrl={request.fetchingDocumentaries} />
            <Row title="Comedy" fetchUrl={request.fetchingComedyMovies} />
            </>
             }/>
          <Route path="/movie/:id" element={<MovieDetails/>}/>
          <Route path="/cast/:castId/:castName" element={<CastDetails/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;