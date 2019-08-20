import React, { useState, useEffect } from "react";
import { Meme } from "./compontents/Meme";
import "./App.css";

const objectToQueryParam = obj => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + params.join("&");
};

function App() {
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
      <>
        <img style={{ width: 200 }} src={meme} alt='meme' />
      </>
    );
  }

  return (
    <main className='App'>
      {template && (
        <form
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
          <Meme template={template} />
          <input
            placeholder='Top text'
            value={topText}
            onChange={e => setToptext(e.target.value)}
          />
          <input
            placeholder='Bottom text'
            value={bottomText}
            onChange={e => setBottomText(e.target.value)}
          />
          <button type='submit'>Create Meme</button>
        </form>
      )}
      {!template && (
        <>
          <h1>Pick a Meme</h1>
          {templates.map(template => {
            return (
              <Meme
                template={template}
                onClick={() => {
                  setTemplate(template);
                }}
              />
            );
          })}
        </>
      )}
    </main>
  );
}

export default App;
