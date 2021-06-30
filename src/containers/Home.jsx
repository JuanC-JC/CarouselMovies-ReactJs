/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../components/styles/global.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Categorie from '../components/Categorie';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

function Home({ isHoverAvaliable, myList, trends, originals, user }) {

  //remove all events from categoria__items when is add in myList
  useEffect(() => {
    if (isHoverAvaliable) {
      const carouselItems = document.querySelectorAll('.categoria__item');
      carouselItems.forEach((item) => item.classList.remove('oneSiblingIsClicked', 'isClicked'));
    }
  }, [myList]);

  //listener for close the elemetns, every time that value of isHoverAvaliable change we assing again the event
  useEffect(() => {
    if (!isHoverAvaliable) {
      document.querySelector('.main').onclick = (e) => {
        if (!e.target.classList.contains('item__img')) {
          document.querySelectorAll('.categoria__item').forEach((item) => item.classList.remove('isClicked', 'oneSiblingIsClicked'));
        }
      };
    }

    return (() => {
      const main = document.querySelector('.main');
      main ? main.onclick = null : undefined;
    });

  }, [isHoverAvaliable]);

  return (
    <section className='main'>
      <Search />
      <Categories>
        {myList.length > 0 && user.email && (
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
    user: state.user,
    isHoverAvaliable: state.isHoverAvaliable,
  };
};

//exportar home conectado
export default connect(mapStateToProps, null)(Home);
