import React from 'react';
import '../components/styles/global.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Categorie from '../components/Categorie';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Search />
        <Categories>
          <Categorie title='Categoria numero 1'>
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
          <Categorie title='Categoria numero 2'>
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
        </Categories>
      </main>
    </>
  );
}

export default App;

