import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from '../../assets/Images/image1.jpg';
import img2 from '../../assets/Images/image2.jpg';
import img3 from '../../assets/Images/image3.jpg';

function CarouselComponent() {
  return (
    <Carousel fade className="h-64 w-full mx-auto mb-1" controls={false} indicators={false} interval={2000}>
      <Carousel.Item>
        <img className="d-block w-full h-[580px] object-cover" src={img1} alt="orthopedics" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-full h-[580px] object-cover" src={img2} alt="orthopedics" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-full h-[580px] object-cover" src={img3} alt="orthopedics" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
