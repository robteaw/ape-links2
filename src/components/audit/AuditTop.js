import React from "react";
// styling and animation
import styled from "styled-components";

export default function AuditTop() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <h1>72 Hour Website Audit</h1>
          <p>Manual Website Crawling. Click below to crawl your website.</p>
          <button>Crawl</button>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

// styling
const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15rem 0 0 0;

  h2 {
    text-align: center;
  }

  p {
    margin: 3rem 0;
  }
`;

const Wrapper = styled.div`
  height: 100%;
`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 851px) {
    flex-direction: column;
    padding: 2rem;

    h2 {
      font-size: 2rem;
      margin-top: 3rem;
    }

    p {
      margin-bottom: 3rem;
      margin: 1rem 0;
    }
  }
`;
