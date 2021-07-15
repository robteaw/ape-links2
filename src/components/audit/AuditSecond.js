import React from "react";
// styling and animation
import styled from "styled-components";
import { Container, Wrapper } from "../Container";

export default function AuditSecond() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <p>
            Nowadays, it's easy to find a web analysis tools. Some free, some
            paid. Before you pull out your wallet and pay some Joe Shmoe web
            crawl software read this section.
          </p>
          <p>
            You want to avoid the ones that give you an analysis yet only
            provide general information and data, even vanity metrics.
          </p>
          <p>
            A lot of the automated tools out there, particularly the free ones,
            are infamous for giving users with extra data that will have you go
            down a rabbit hole of wrong information.
          </p>
          <Box>
            <InnerBox>
              <p>
                <b>
                  These are questions you need answers to, and a proper website
                  analysis will provide good answers:
                </b>
              </p>
              <span>
                <p>
                  1. How well does my website perform against your competitors?
                  Is there more room for adjustments?
                </p>
                <p>
                  2. What's my keyword strategy? Are there keywords you should
                  be ranking for?
                </p>
                <p>3. Does my website structure and setup engender success?</p>
                <p>
                  4. Is my website optimized correctly for traffic from organic
                  search?
                </p>
                <p>
                  5. Do I have a content strategy? What is it? Does it work?
                </p>
                <p>6. What's my social media strategy? Does it work?</p>
                <p>
                  7. Is my reporting and tracking setup properly and capturing
                  the best data I can use?
                </p>
              </span>
            </InnerBox>
          </Box>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

// styling
const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    text-align: left;
    margin-bottom: 1rem;
  }
`;

const Box = styled.div`
  color: #fff;
  background: var(--navColor);
  width: fit-content;
  border: 3px solid #ccc;
  padding: 0.5rem;
  margin-top: 3rem;

  span p {
    margin-left: 2rem;
  }
`;

const InnerBox = styled.div`
  border: 3px solid #ccc;
  padding: 1rem;
`;
