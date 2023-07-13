import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from "@mui/material";
import axios from "axios";

export default function IndexPage({prompts}) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState();

  
  async function submitFunc(input,choice) {
    try {
      const axiosOptions = {
        method: "GET",
        url: process.env.NEXT_PUBLIC_CHATGPT_API_URL,
        params: {
          input: input,
          choice: choice
        }
      };
      const data = await axios.request(axiosOptions);
      if (data.status !== 200) {
        throw data.error || new Error(`Request failed with status ${data.status}`);
      }
      setResult(data.data.result);
      setInput("");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }


  useEffect(() => {
    const mytextarea = document.querySelector(`.${styles.mytextarea}`);
    mytextarea.style.height = "auto";
    mytextarea.style.height = mytextarea.scrollHeight + "px";
  }, [input]);
  
  return (
    <div>
      <Head>
        <title>OpenAI Extension</title>
      </Head>

      <main className={styles.main}>
        <textarea
          className={styles.mytextarea}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter an input"
        />
        {
          prompts && 
          <div className={styles.options}>
          {
            Object.keys(prompts).map((key) => {
              return (
                <button className={styles.button} key = {key} onClick={async () => {
                  await submitFunc(input,key);
                }}>
                  {key}
                </button>
              )
            })
          }
        </div>
        }

        <div className={styles.result}>{result}</div>
        {
          result && <IconButton aria-label="delete" className={styles.copy} onClick={() => {
            navigator.clipboard.writeText(result);
            alert("Copied to clipboard");
          }}>
            <ContentCopyIcon />
          </IconButton>
        }

      </main>
    </div>
  );
}

export async function getStaticProps() {
  let chatgptAPIUrl = process.env.NEXT_PUBLIC_PROMPTS_API_URL;
  const res = await fetch(chatgptAPIUrl);
  const prompts = await res.json();
  return {
    props: {
      prompts
    },
    revalidate: 86400
  };
}