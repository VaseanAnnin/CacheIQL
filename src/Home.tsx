import { useEffect, useRef } from 'react';
import githubIcon from './assets/githubIcon.png';
import NpmIcon from './assets/NpmLogo.png';
import LinkedinLogo from './assets/LinkdinLogo.webp';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
import Taskbar from './Taskbar';
//import { useNavigate } from 'react-router';

function Home() {
  //const navigate = useNavigate();
  const codeSnippetRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (codeSnippetRef.current) {
      codeSnippetRef.current.scrollTop = codeSnippetRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (codeSnippetRef.current) {
      codeSnippetRef.current.textContent = ''; // Clear existing content
    }
    const code1 = `const cache = new Map();
  async function getPeople(setCharacterInfo, cacheTime = 60000) {
      const endpoint = 'http://localhost:3000/graphql';
      const query = \`{
          people {
              _id
              gender
              birth_year
              skin_color
              hair_color
              name
              species_id
              homeworld_id
          }
      }\`;
      const cacheKey = 'getPeopleA';
      const cachedData = cache.get(cacheKey);
      const now = Date.now();
      if (cachedData && now - cachedData.timestamp < cacheTime) {
          console.log('Returning cached data');
          setCharacterInfo(cachedData.data);
          return;
      }
      try {
          const response = await fetch(endpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ query })
          });
          if (!response.ok) {
              throw new Error(\`HTTP error! Status: \${response.status}\`);
          }
          const responseData = await response.json();
          if (responseData.errors) {
              throw new Error(\`GraphQL error: \${responseData.errors.
              map(e => e.message).join(', ')}\`);
          }
          const peopleData = responseData.data.people;
          cache.set(cacheKey, { data: peopleData, timestamp: now });
          setCharacterInfo(peopleData);
      } catch (error) {
          console.error('Error fetching people data:', error);
      }
  }
    `.split('\n');

    const code2 = `Import {cacheIt} from 'cacheiql-client'
    const responseCharacter: ResponseObject = await cacheIt({
    endpoint: 'http://localhost:3000/graphql',
    query: \`
      {
        people {
          _id
          gender
          birth_year
          skin_color
          hair_color
          name
          species_id
          homeworld_id
        }
      }\`,
    time: 3600,
});
setCharacterinfo(responseCharacter.data.people);`.split('\n');
    let codeLines = code1;
    let currentLine = 0;

    const typeCode = () => {
      if (currentLine < codeLines.length) {
        console.log(currentLine);

        const line = document.createElement('pre');
        const codeElement = document.createElement('code');
        codeElement.classList.add('language-javascript');
        codeElement.innerHTML = `${currentLine + 1} ${Prism.highlight(
          codeLines[currentLine],
          Prism.languages.javascript,
          'javascript'
        )}`;
        line.appendChild(codeElement);
        codeSnippetRef.current!.appendChild(line);
        Prism.highlightElement(codeElement);
        scrollToBottom();

        ++currentLine;
        setTimeout(typeCode, 200);
      } else {
        setTimeout(() => {
          if (codeSnippetRef.current) {
            codeSnippetRef.current.textContent = '';
          }
          codeLines = codeLines === code1 ? code2 : code1;
          currentLine = 0;
          setTimeout(typeCode, 200);
        }, 5000);
      }
    };

    typeCode();
  }, []);

  // const handleClick = (buttonName: string) => {
  //   // switch (buttonName) {
  //   //   case 'docs':
  //   //     navigate('/docs');
  //   //     break;
  //   //   case 'about':
  //   //     navigate('/about');
  //   //     break;
  //   //   case 'contact':
  //   //     navigate('/contact');
  //   //     break;
  //   // }
  //   if (buttonName === 'docs') {
  //     navigate('/docs');
  //   } else if (buttonName === 'about') {
  //     navigate('/about');
  //   } else if (buttonName === 'contact') {
  //     navigate('/contact');
  //     // navigate to contact
  //   }
  // };
  return (
    <>
      {/* <div className='taskBar'>
        <button className='taskBarButtons' onClick={() => handleClick('docs')}>
          Docs
        </button>
        <button className='taskBarButtons' onClick={() => handleClick('about')}>
          About
        </button>
        <button
          className='taskBarButtons'
          onClick={() => handleClick('contact')}
        >
          Contact
        </button>
      </div> */}
      <Taskbar />
      <div className='dashboard'>
        <div className='mainBox'>
          <h1 className='title'> CacheIQL.</h1>
          <p className='subtext'>The one stop tool for GraphQL</p>
          <button className='mainButton'>
            <a href='https://medium.com/@matzec42/cacheiql-the-one-stop-tool-for-graphql-cc8fbd7f915d'>
              Check Us Out
            </a>
          </button>
          <div className='hotLinks'>
            <button className='Github'>
              <a href='https://github.com/oslabs-beta/CacheIQL'>
                <img src={githubIcon} />
              </a>
            </button>
            <button className='NPM' id='NPM-server'>
              <a href='https://www.npmjs.com/package/cacheiql-server'>
                <img src={NpmIcon} />
              </a>
            </button>
            <button className='NPM' id='NPM-client'>
              <a href='https://www.npmjs.com/package/cacheiql-client'>
                <img src={NpmIcon} />
              </a>
            </button>
            <button className='Linkdin'>
              <img src={LinkedinLogo} />
            </button>
          </div>
        </div>
        <div className='codeSnippet' ref={codeSnippetRef}></div>
      </div>
    </>
  );
}

export default Home;
