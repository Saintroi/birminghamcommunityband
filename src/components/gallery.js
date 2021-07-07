import React from "react";
import styled from "styled-components";

// styles

const MainWrap = styled.div`
  grid-area: content;
  z-index: 98;
  font-family: "Montserrat", sans-serif;
  overflow-x: hidden;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(200%)")};
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-template-rows: repeat(auto-fit, 260px);
  grid-auto-flow: dense;
  grid-gap: 0.3rem;
`;

const ImageCard = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

//JSX

const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

function getSpanEstimate(size) {
    console.log("SIZE " + size)
    if (size > 250) {
      return 2
    }
  
    return 1
  }
function GalleryPage() {
  importAll(require.context("../img/bandpics", false, /\.(png|jpe?g|svg)$/));
  const bandPictures = Object.entries(cache).map((module) => module[1].default);

  return (
    <MainWrap open={true}>
      <Gallery>
        {bandPictures.map((image, index) => (
          <ImageCard
            src={image}
            key={index}
            alt="error"
            style = 
            {{
                gridColumnEnd: `span ${getSpanEstimate(image.offsetWidth)}`,
                gridRowEnd: `span ${getSpanEstimate(image.offsetHeight)}`,
            }}
        />
        ))}
      </Gallery>
    </MainWrap>
  );
}
export default GalleryPage;
