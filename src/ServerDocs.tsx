import Taskbar from './Taskbar';
//import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
//import howitWorks from './assets/howitworks.png';
//import ImageB from './assets/imageA.webp';
//import ImageA from './assets/ImageB.webp';
function ServerDocs() {
  return (
    <>
      <Taskbar />

      <div className='readMe'>
        <div className='paragraph'>
          <h1>@cacheiql/Server</h1>
          <hr />
          <p>
            <strong>cacheiql-server</strong> is a middleware that is simple to
            implement, providing a server-side caching solution for GraphQL
            applications designed to enhance performance by reducing redundant
            query executions. It seamlessly integrates into your GraphQL server,
            caching queries and intelligently invalidating them after a mutation
            occurs, all while leveraging Redis to manage cache responses
            efficiently.
          </p>
          <hr />
          <h1>Installation</h1>
          <hr />
          <h2>Installing and Connecting a Redis Server</h2>
          <p>
            <strong>Redis Installation</strong>
          </p>
          <ul>
            <li>
              <strong>Mac (Homebrew):</strong>
              <ol>
                <li>
                  Open your terminal and run:
                  <p className='instructions'>brew install redis</p>
                </li>
                <li>
                  Start the Redis server with:
                  <p className='instructions'>redis-server</p>
                </li>
                <li>
                  Note the port number where the Redis server is listening.
                </li>
              </ol>
            </li>
            <li>
              <strong>Linux or Non-Homebrew</strong>
              <ol>
                <li>
                  Download the appropriate version of Redis from{' '}
                  <a href='https://redis.io/downloads/' className='links'>
                    redis.io/download.
                  </a>
                </li>
                <li>
                  Follow the installation instructions provided for your system.
                </li>
                <li>
                  Start the Redis server and note the port number on which it is
                  listening.
                </li>
              </ol>
            </li>
          </ul>
          <div className='space'></div>
        </div>
      </div>
    </>
  );
}

export default ServerDocs;
