import React from 'react';
import { connect } from 'react-redux';
import '../components/styles/global.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Categorie from '../components/Categorie';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

function Home({ myList, trends, originals }) {

  return (
    <section className='main'>
      <Search />
      <Categories>
        {myList.length > 0 && (
          <Categorie title='Mi categoria'>
            <Carousel>
              {myList.map((item) => <CarouselItem key={item.id} isList={true} {...item} />)}
            </Carousel>
          </Categorie>
        )}
        <Categorie title='Trends'>
          <Carousel>
            {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categorie>
        <Categorie title='Originals'>
          <Carousel>
            {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categorie>
      </Categories>
    </section>
  );
}

//pasar props (al componente)
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

//exportar home conectado
export default connect(mapStateToProps, null)(Home);
