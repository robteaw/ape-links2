import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";

const images = [
  {
    id: "1",
    imageName: "p1a.png",
    tag: "advertisements",
  },
  { id: "2", imageName: "p1b.png", tag: "advertisements" },
  { id: "3", imageName: "p1c.png", tag: "advertisements" },
  { id: "4", imageName: "p1d.png", tag: "advertisements" },
  { id: "5", imageName: "p1e.png", tag: "advertisements" },
  { id: "6", imageName: "p2a.jpg", tag: "photography" },
  { id: "7", imageName: "p2b.jpg", tag: "photography" },
  { id: "8", imageName: "p2c.jpg", tag: "photography" },
  { id: "9", imageName: "p2d.jpg", tag: "photography" },
  { id: "10", imageName: "p2e.jpg", tag: "photography" },
  { id: "11", imageName: "p2f.jpg", tag: "photography" },
  { id: "12", imageName: "p2g.jpg", tag: "photography" },
  { id: "13", imageName: "p2h.jpg", tag: "photography" },
  { id: "14", imageName: "p3a.png", tag: "concept" },
  { id: "15", imageName: "p3b.png", tag: "concept" },
  { id: "16", imageName: "p3c.png", tag: "concept" },
  { id: "17", imageName: "p3d.png", tag: "concept" },
  { id: "18", imageName: "p3e.png", tag: "concept" },
  { id: "19", imageName: "p3f.png", tag: "concept" },
  { id: "20", imageName: "p4a.png", tag: "vector" },
  { id: "21", imageName: "p4b.png", tag: "vector" },
  { id: "22", imageName: "p4c.png", tag: "vector" },
  { id: "23", imageName: "p4d.png", tag: "vector" },
  { id: "24", imageName: "p4e.png", tag: "vector" },
  { id: "25", imageName: "p4f.png", tag: "vector" },
];

export default function PortfolioSection() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <Container exit="exit" initial="hidden" animate="show">
      <div handleSetTag={setTag}>
        <div className="tags">
          <TagButton
            name="all"
            handleSetTag={setTag}
            tagActive={tag === "all" ? true : false}
          />
          <TagButton
            name="Advertisements"
            handleSetTag={setTag}
            tagActive={tag === "advertisements" ? true : false}
          />
          <TagButton
            name="Photography"
            handleSetTag={setTag}
            tagActive={tag === "photography" ? true : false}
          />
          <TagButton
            name="Concept Art"
            handleSetTag={setTag}
            tagActive={tag === "concept" ? true : false}
          />
          <TagButton
            name="Vector Art"
            handleSetTag={setTag}
            tagActive={tag === "vector" ? true : false}
          />
        </div>
      </div>
      <SRLWrapper>
        <div className="container">
          {filteredImages.map((image) => (
            <div key={image.id} className="image-card">
              <a href={`/images/${image.imageName}`}>
                <img
                  className="image"
                  src={`/images/${image.imageName}`}
                  alt=""
                />
              </a>
            </div>
          ))}
        </div>
      </SRLWrapper>
    </Container>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

// Styling
const Container = styled.div`
  height: 100vh;
  padding-top: 4rem;
  .container {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding-bottom: 10rem;
    align-items: center;
    justify-content: center;
  }
  .image-card {
    border: 10px solid #ccc;
    box-shadow: 2px 2px 2px #999;
  }
  img {
    height: 15rem;
    width: 25rem;
  }
  .image-card:hover {
    border: 10px solid var(--hoverColor);
    transition: 0.5s ease-in;
  }
  .tags {
    text-align: center;
    padding: 20px 0px;
    margin-bottom: 3rem;
  }
  .tag {
    outline: none;
    border: none;
    color: #eee;
    margin: 0px 10px;
    background-color: transparent;
    cursor: pointer;
  }
  .active {
    font-weight: bold;
    color: var(--mainColor);
    border: 1px solid var(--mainColor);
  }
  @media (max-width: 1270px) {
    .container {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
