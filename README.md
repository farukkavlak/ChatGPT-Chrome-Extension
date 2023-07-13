<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a>
    <img src="https://github.com/farukkavlak/ChatGPT-Chrome-Extension/blob/main/extension/gpt.png" alt="Logo" width="180" height="180">
  </a>

<h3 align="center">ChatGPT Chrome Extension</h3>

  <p align="center">
    Chrome Extension that uses ChatGPT effectively/quickly
    <br>
    <a href="#usage">Demo</a>
    ·
    <a href="https://github.com/farukkavlak/Vocab-Learning-Chrome-Extension/issues">Report Bug</a>
    ·
    <a href="https://github.com/farukkavlak/Vocab-Learning-Chrome-Extension/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#external-services">External Services</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
It is designed to enable effective and efficient communication with ChatGPT. The project provides multiple example prompts that can be customized according to your preferences.
Example Prompts:
<ol>
  <li>
    <a>
      Translate / Improve: Turkish -> English
    </a>
  </li>
  <li>
    <a>
      English Correct
    </a>
  </li>
    <li>
    <a>
      Summarize
    </a>
  </li>
    <li>
    <a>
      Paraphrase
    </a>
  </li>
    <li>
    <a>
      Extract Keywords
    </a>
  </li>
    <li>
    <a>
      Ask me Anything
    </a>
  </li>
</ol>
<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![javascript][javascript]][javascript]
* [![node-js][node-js]][node-js]
* [![next-js][next-js]][next-js]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### External Services

* ChatGPT

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

1. Get a API Key at [https://platform.openai.com/](https://platform.openai.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/farukkavlak/ChatGPT-Chrome-Extension.git
   ```
3. There are three folder in project such as extension, next-app, server
4. Install NPM packages in the server and next-app folder
   ```sh
   npm install
   ```
5. Create .env file in server folder for environment variables and enter your OpenAI API key 
     ```js
   STATUS = dev
   DEV_PORT = 3000
   PROD_PORT = 80
   OPENAI_API_KEY = 'ENTER YOUR API KEY'
   
   ```
6. Run server
    ```sh
   nodemon index.js
   ```
7. Create .env.local file in next-app folder for environment variables and enter your URLS of endpoints
     ```js
   NEXT_PUBLIC_PROMPTS_API_URL = http://localhost:3000/api/prompts
   NEXT_PUBLIC_CHATGPT_API_URL = http://localhost:3000/api/chat-gpt
   
   ```
8. Run commands in next-app folder
    ```sh
   npm run build
   ```
9. Enter your server url to content.js file in extension folder
    ```js
   chatgptAPIUrl = "http://localhost:3000/api/chat-gpt?input=
   NEXT_PUBLIC_CHATGPT_API_URL = http://localhost:3000/api/chat-gpt
   
   ```
10. Load chrome extension from chrome://extensions/ by using extension folder


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
You can use the extension from the toolbar to view the results directly, or you can select text from any website, right-click, and choose the 'prompt'. The program will then provide an alert with the results.




https://github.com/farukkavlak/ChatGPT-Chrome-Extension/assets/79375232/44135247-c99f-4dde-ac95-8ae37753d590





https://github.com/farukkavlak/ChatGPT-Chrome-Extension/assets/79375232/2d7fa5c0-9ea8-4913-a793-1165d2a31071







<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Ömer Faruk Kavlak -  [linkedin.com/in/ömerfarukkavlak](https://www.linkedin.com/in/ömerfarukkavlak/)- [@ofarukdev](https://twitter.com/ofarukdev) - ofaruk.kavlak@gmail.com


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[javascript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[node-js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[next-js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
