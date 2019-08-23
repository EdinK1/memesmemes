import React, { useState, useEffect } from "react";
import { Meme } from "./compontents/Meme";
import { Wrapper, WrapItem } from "./compontents/Wrapper";
import { Header } from "./compontents/Header";
import { FinalMeme } from "./compontents/FinalMeme";
import { BackButton } from "./compontents/Button";
import {
  StyledForm,
  FormContent,
  FormButton,
  FormInput
} from "./compontents/Form";
import { Footer } from "./compontents/Footer";

import "./App.css";

const objectToQueryParam = obj => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + params.join("&");
};

const App = () => {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);
  const [topText, setToptext] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(data =>
      data.json().then(response => setTemplates(response.data.memes))
    );
  });

  if (meme) {
    return (
      <StyledForm>
        <FinalMeme src={meme} alt='meme' />
        <p>Right click on the image to save it.</p>
        <BackButton
          onClick={() => {
            // eslint-disable-next-line
            window.location = window.location;
          }}
        >
          Go to main page
        </BackButton>
      </StyledForm>
    );
  }

  return (
    <>
      {template && (
        <StyledForm
          onSubmit={async e => {
            e.preventDefault();
            const params = {
              template_id: template.id,
              text0: topText,
              text1: bottomText,
              username: "edink1",
              password: "12meme2111"
            };
            const response = await fetch(
              `https://api.imgflip.com/caption_image${objectToQueryParam(
                params
              )}`
            );
            const json = await response.json();
            setMeme(json.data.url);
          }}
        >
          <FormContent>
            <Meme template={template} />
            <FormInput
              placeholder='Top text'
              value={topText}
              onChange={e => setToptext(e.target.value)}
            />
            <FormInput
              placeholder='Bottom text'
              value={bottomText}
              onChange={e => setBottomText(e.target.value)}
            />
            <FormButton type='submit'>Create Meme</FormButton>
          </FormContent>
        </StyledForm>
      )}
      {!template && (
        <>
          <Header />
          <Wrapper>
            {templates.map(template => {
              return (
                <WrapItem>
                  <Meme
                    template={template}
                    onClick={() => {
                      setTemplate(template);
                    }}
                  />
                </WrapItem>
              );
            })}
          </Wrapper>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
