import { useState } from "react";

function App() {
    const images = [
        "https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg",
        "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg",
        "https://images.pexels.com/photos/573306/pexels-photo-573306.jpeg",
        "https://images.pexels.com/photos/573300/pexels-photo-573300.jpeg",
        "https://images.pexels.com/photos/1217243/pexels-photo-1217243.jpeg"
    ];

    const [imageSlide, setImageSlide] = useState(0);

    const prevSlide = () => {
        setImageSlide(imageSlide === 0 ? images.length - 1 : imageSlide - 1);
    }

    const nextSlide = () => {
        setImageSlide(imageSlide === images.length - 1 ? 0 : imageSlide + 1);
    }

    return (
        <div>
            <h1>Project 1: Carousel</h1>
            <div className="slider">
                <div className="left-arrow" onClick={prevSlide}>⬅</div>
                {
                    images.map((image, index) =>
                        imageSlide === index && (
                            <div className="slide" key={index}>
                                <img src={image} alt="carousel" className="slider-image" />
                            </div>
                        )
                    )
                }
                <div className="right-arrow" onClick={nextSlide}>⮕</div>
            </div>
        </div>
    );
}

export default App;
