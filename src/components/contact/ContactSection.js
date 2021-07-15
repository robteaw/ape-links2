import React from "react";
// styling and animation
import styled from "styled-components";
import { Container, Wrapper } from "../Container";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";

export default function ContactSection() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <h1>Contact</h1>
          <p>
            For more information, please send an email, call or fill out the
            form.
          </p>
          <Bottom>
            <Left>
              <Box>
                <InnerBox>
                  <h4>Contact Information</h4>
                  <span>
                    <p>
                      <HiOutlineMail />
                      <a href="mailto:seoapelinks@gmail.com">
                        {" "}
                        seoapelinks@gmail.com
                      </a>
                    </p>
                    <p>
                      <BiPhoneCall />
                      <a href="tel:832-791-3428"> 832-791-3428</a>
                    </p>
                  </span>
                </InnerBox>
              </Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.5674455937215!2d-95.47740988454167!3d29.963118229363985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cbf84abb7a9d%3A0x4935b9e8a2faf02!2s12355%20Antoine%20Dr%2C%20Houston%2C%20TX%2077067!5e0!3m2!1sen!2sus!4v1625522915571!5m2!1sen!2sus"
                width="100%"
                height="auto"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </Left>
            <Form>
              <form action="">
                <input className="field" type="text" placeholder="Full Name" />
                <input className="field" type="email" placeholder="Email" />
                <input
                  className="field"
                  type="text"
                  placeholder="Phone Number"
                />

                <label htmlFor="">What service will you be requesting?</label>
                <select name="service" id="service">
                  <option disabled selected value></option>
                  <option value="graphic">Graphic Design</option>
                  <option value="marketing">Online Marketing</option>
                  <option value="photography">Photography</option>
                  <option value="pr">PR</option>
                  <option value="seo">SEO & PPC</option>
                  <option value="videography">Videography</option>
                </select>

                <label htmlFor="">How long will this project be?</label>
                <select name="service" id="service">
                  <option disabled selected value></option>
                  <option value="freeaduit">Free Audit</option>
                  <option value="3-6weeks">3-6 Weeks</option>
                  <option value="7-22weeks">7-22 Weeks</option>
                  <option value="22-35weeks">22-35 Weeks</option>
                  <option value="52-104weeks">52-104 Weeks</option>
                </select>

                <label htmlFor="">How would you like us to work?</label>
                <select name="service" id="service">
                  <option disabled selected value></option>
                  <option value="remote">Remote</option>
                  <option value="onlocation">On Location</option>
                </select>

                <label htmlFor="">Would you like a free web crawl?</label>
                <select name="service" id="service">
                  <option disabled selected value></option>
                  <option value="accept">Accept</option>
                  <option value="decline">Decline</option>
                </select>

                <button>Submit</button>
              </form>
            </Form>
          </Bottom>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

// styling
const InnerWrapper = styled.div`
  text-align: center;

  h1 {
    margin-bottom: 1.5rem;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8rem;
  margin-top: 5rem;

  iframe {
    height: 20rem;
    width: 20rem;
    margin-top: 3rem;
  }

  @media (max-width: 851px) {
    flex-direction: column-reverse;

    button {
      margin-bottom: 5rem;
    }
  }
`;

const Left = styled.div`
  p {
    text-align: left;
    line-height: 3rem;
    margin-left: 2rem;
  }
`;

const Box = styled.div`
  color: #fff;
  background: var(--navColor);
  border: 3px solid #ccc;
  padding: 0.5rem;
`;

const InnerBox = styled.div`
  border: 3px solid #ccc;
  padding: 1rem;

  span p {
    margin-left: 2rem;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Form = styled.div`
  height: auto;
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;

    label {
      text-align: left;
    }

    input {
      margin: 1rem 0;
      padding: 0.75rem;
    }

    select {
      margin: 1rem 0;
      padding: 0.75rem;
    }
  }
`;
