import { Container, Arrow } from './styles';

import { useRef } from 'react';

import { api } from '../../services/api';

import { Card } from '../Card';
import { ButtonIcon } from '../ButtonIcon';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import defaultProductImage from '../../assets/default_product.png';

export function Carousel({category}) {
  const carousel = useRef();
  const arrows = document.getElementsByClassName("arrow");

  function handleCarouselScroll(direction, carousel) {
    carousel.current.scrollLeft += direction === "left" 
      ? - 226
      : 226;

    setTimeout(() => handleShowArrows(carousel), 70)
  };
  
  function handleShowArrows(carousel) {
    let scrollWidth = carousel.current.scrollWidth - carousel.current.clientWidth;
    
    if(carousel.current.id == 1) {
      arrows[0].style.display = carousel.current.scrollLeft == 0 ? "none" : "block";
      arrows[1].style.display = carousel.current.scrollLeft == scrollWidth ? "none" : "block";
      return
    }

    if(carousel.current.id == 2) {
      arrows[2].style.display = carousel.current.scrollLeft == 0 ? "none" : "block";
      arrows[3].style.display = carousel.current.scrollLeft == scrollWidth? "none" : "block";
    }

    if(carousel.current.id == 3) {
      arrows[4].style.display = carousel.current.scrollLeft == 0 ? "none" : "block";
      arrows[5].style.display = carousel.current.scrollLeft == scrollWidth ? "none" : "block";
    }  
  };

  return (
    <Container id={category.category_id} ref={carousel}>
      {
        category.products && 
        category.products.map((product, index) => (
          <Card
            key={index}
            product={product}
            id={product.id}
            title={product.name}
            price={product.price}
            image={product.image ? `${api.defaults.baseURL}/files/${product.image}` : defaultProductImage}
            description={product.description}
          />
        ))
      }

      <Arrow className="arrow button_left_arrow">
        <ButtonIcon 
          onClick={() => handleCarouselScroll("left", carousel)} 
          icon={BsChevronLeft} 
        />
      </Arrow>

      <Arrow className="arrow button_right_arrow">
        <ButtonIcon 
          onClick={() => handleCarouselScroll("right", carousel)} 
          icon={BsChevronRight} 
        />
      </Arrow>
    </Container>
  );
};