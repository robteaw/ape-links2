import React from "react";
// styling and animation
import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <Resource>
          <p>
            <h5>Hours</h5>
          </p>
          <span>
            <p>7am - 10pm</p>
          </span>
          <p>
            <h5>Resource</h5>
          </p>
          <p>About SEO</p>
          <p>Careers</p>
        </Resource>
        <Info>
          <p>
            <h5>Contact</h5>
          </p>
          <p>
            <MdLocationOn /> 12355 Antoine Dr. Houston, TX 77067
          </p>
          <p>
            <BiPhoneCall /> <a href="tel:832-791-3428"> 832-791-3428</a>
          </p>
          <p>
            <HiOutlineMail />
            <a href="mailto:seoapelinks@gmail.com"> seoapelinks@gmail.com</a>
          </p>
          <span>
            <a href="https://www.facebook.com/DirectShadings/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/jonathan-yeras-40882b191/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/lilbillskills">
              <i className="fab fa-twitter"></i>
            </a>
          </span>
        </Info>
        <Newsletter>
          <p>
            <h5>Newsletter</h5>
          </p>
          <p>Join our newsletter to learn more.</p>
          <form action="" method="post">
            <input type="email" name="email" />
            <input className="submit" type="submit" value="Subscribe" />
          </form>
        </Newsletter>
      </Wrapper>
    </Container>
  );
}

// styling
const Container = styled.div`
  color: #fff;
  background: var(--teamColor);
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;

  h5 {
    margin-top: 1.5rem;
  }

  p {
    line-height: 2rem;
    text-align: left;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 10;
  }
`;

const Wrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  column-gap: 10rem;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
  }
`;

const Resource = styled.div`
  span p {
    margin-bottom: 1.5rem;
  }
`;

const Info = styled.div`
  span a {
    color: #fff;
    font-size: 15px;
    display: inline-block;
    background: transparent;
    line-height: 1;
    padding: 8px 0;
    margin: 1rem 1rem 0 0;
    border: 2px solid #fff;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.2s;

    &:hover {
      background: var(--navColor);
    }
  }
`;

const Newsletter = styled.div`
  input {
    margin: 1rem 0;
    padding: 0.5rem;
  }

  .submit {
    color: var(--linkColor);
    background-color: var(--navColor);
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    border-radius: 0.25rem;
    margin: 0.25rem;
    padding: 0.6rem 1.1rem;
    box-shadow: 0px 13px 24px -7px rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      color: black;
      background: var(--btnColor2);
      box-shadow: 0px 17px 16px -11px #ffd700;
    }
  }
`;
