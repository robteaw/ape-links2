import React from "react";
// styling and animation
import styled from "styled-components";

export default function AboutSeo() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <h2>What is SEO?</h2>
          <p>
            SEO is the science of search engines. Learning and predicting how an
            AI search algorithm. SEO stands for Search engine optimization.
            People who practice this study can effectively outrank authoritative
            websites in only thirty-five weeks. While once the big brands had
            the top ranks in google. More and more computer nerds are learning
            how to outrank these companies with the simple art of SEO and a
            helpful blog.
          </p>

          <hr />

          <h2>Why is SEO important?</h2>
          <p>
            SEO is your undercover spy on your competitor's website. This work
            breaks up in several different tasks you will have to do every week
            for all your content on your website. This is to stay relevant in
            the google search engine. Those who follow the right steps to the
            tea will succeed.
          </p>

          <hr />

          <h2>Code Development</h2>
          <p>
            Do not learn how to code if your planning to focus on SEO. Leave the
            coding to the coders. Try hiring a webmaster. If you have the time,
            do so, but if you can work for the creative marketing team, that
            would be better.
          </p>

          <hr />

          <h2>KW's (Keywords)</h2>
          <p>
            KW's are stings of words that are fed into the google search
            algorithm to help it predict what users will ask before they finish
            typing it out. It's fairly good scary enough. I almost never write
            out a query all the way through. KW's are also used to have more
            insight into what people search on google. Usually, if google auto
            suggest predict your search, it means your search is very relevant,
            believe it or not. This is why SEO analysts tend to use KW's to
            write interesting blog posts. It doesn't do much help if you write a
            blog no one is interested in. Keywords analytics show you what
            topics people are interested in. KW's are also good to be used on
            H1, H2, H3, H4 and so on. Use your KW's responsibly.
          </p>
          <p>
            When starting off its a good idea to use a free KW research tool.
            Sites like, https://www.wordstream.com/KWs https://KWtool.io/
            https://semrush.com/ (Free version has some tools) Giving you the
            edge over other similar businesses who know nothing about SEO. You
            will be able to find KW's you would have never thought of. Use these
            tools in conjunction with Google search predictions. Writing
            something like “Nema enclosures” you start by going down a list of
            queries. “Nema enclosures, Nema enclosure b, Nema enclosure c and so
            on. Google will spit out a list of search terms relating to your
            product. Now you know how to promote your website.
          </p>

          <hr />

          <h2>Long-tail KWs</h2>
          <p>
            KW's can be broad and excessive (these are usually called “head
            KWs”), or they can be more specific combinations of different terms
            - these are called “long-tail KWs. ” KWs on there own might appear
            to be your ultimate goal as they often have temptingly high search
            volume. However, you can expect to have an extremely hard time with
            your competition. You may want your comic book shop to rank for
            “comics,” but it’s going to be tough to rank above Marvel and DC.
          </p>

          <hr />

          <h2>Google Page Insight</h2>
          <p>
            There are a lot of disputable ways to fix a website and have it rank
            higher. You can try experimenting with KWs, writing exceptional
            blogs or captivating videos. But one thing that can without a doubt
            cripple your website, is page speed. If you think about it
            rationally. When we go to a website, we want to be delivered with
            the content we need fast or else we will back out of your site and
            move on to your competitor. Page speed is determined by a lot of
            different factors. If you could think of a website as a club and the
            elements are a line of people waiting outside for the page to start
            loading. Every element on your page needs to be loaded individually.
            Meaning you would have to set priority on what needs to be loaded
            first. If you place a javascript element that is all the way at the
            end of the page, instead of the elements on your header, The user
            will be sitting there with nothing but a half-loaded javascript
            element at the end of the page. This is what Google deems as bad
            user experience and can be a serious factor when trying to rank on
            top of your competitors. If you think users care more about content
            over user experience you will be having a wakeup call soon. There
            have been cases where the difference between ranking first and
            ranking fifth is page speed and nothing else. Lucky for you, google
            page speed index is a free tool you can use to determine your page
            speed. When looking at Google PageSpeed index, you will notice that
            Google is throwing a lot of information at you all at once. Fear
            not, as there are only a few important sections that will be vital
            to the success of your page. Follow this guide to learn more about
            SEO The next lesson will be on Keyword Research.
          </p>
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
  justify-content: center;
  align-items: center;
  margin: 15rem 0 10rem 0;

  h2 {
    margin: 2rem 0;
    text-align: left;
  }

  p {
    text-align: left;
    line-height: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 1100px) {
    padding: 0 2rem;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  column-gap: 10rem;
`;
