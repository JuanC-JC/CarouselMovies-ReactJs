import React from 'react';
import '../components/styles/global.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Categorie from '../components/Categorie';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import data from '../db/data.json';


const { initalState } = data;

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Search />
        <Categories>
          {initalState.mylist.length > 0 && (
            <Categorie title='Mi categoria'>
              <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
              </Carousel>
            </Categorie>
          )}
          <Categorie title='Trends'>
            <Carousel>
              {initalState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
            </Carousel>
          </Categorie>
          <Categorie title='Originals'>
            <Carousel>
              {initalState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
            </Carousel>
          </Categorie>
        </Categories>
      </main>
    </>
  );
}

export default App;

