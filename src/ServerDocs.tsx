import Taskbar from './Taskbar';
import Prism from 'prismjs';
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
          <h2>Install CacheIQL-Server</h2>
          <p>
            Install the package by running{' '}
            <strong>npm i cacheiql-server</strong> in your terminal. This will
            add <strong>cacheiql-server</strong> as a dependency in your
            package.json file.
          </p>
          <h1>Implenentation</h1>
          <hr />
          <ol>
            <li>Import CacheIQL-Server</li>
            <p id='listP'>
              Add the following inport to your Node.js/Express file:
            </p>
            <ul>
              <li>CommonJS:</li>
              <div className='codeblock'>
                <code
                  dangerouslySetInnerHTML={{
                    __html: Prism.highlight(
                      `const { cacheMiddleware } = require('cacheiql-server');`,
                      Prism.languages.javascript,
                      'javascript'
                    ),
                  }}
                  className='readCode'
                />
              </div>
              <li>ES6+:</li>
              <div className='codeblock'>
                <code
                  dangerouslySetInnerHTML={{
                    __html: Prism.highlight(
                      `import { cacheMiddleware } from 'cacheiql-server'`,
                      Prism.languages.javascript,
                      'javascript'
                    ),
                  }}
                  className='readCode'
                />
              </div>
            </ul>
            <li>Instantiate Cache Middleware</li>
            <p>
              Create an instance of <strong>cacheMiddleware </strong> for your
              GraphQL endpoint by passing in the following parameters:
            </p>
            <ul>
              <li>rootValue: Your GraphQL resolvers.</li>
              <li>
                TTL_IN_SECONDS: Number of seconds data should persist in the
                Redis cache.
              </li>
              <li>
                graphqlSchema: The GraphQL schema defined using the graphql-JS
                library.
              </li>
            </ul>
            <p>Example:</p>
            <div className='codeblock'>
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: Prism.highlight(
                      `const TTL_IN_SECONDS = 1000;
const cachedRootValue = cacheMiddleware(rootValue, TTL_IN_SECONDS, graphqlSchema);`,
                      Prism.languages.javascript,
                      'javascript'
                    ),
                  }}
                  className='readCode'
                />
              </pre>
            </div>
            <li>Add Cache Middleware to Express Route</li>
            <p>
              Attach the <strong>cachedRootValue</strong> to the GraphQL route
              in your Express app like this:
            </p>
            <div className='codeblock'>
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: Prism.highlight(
                      `app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: cachedRootValue,
    graphiql: true,
  })
);`,
                      Prism.languages.javascript,
                      'javascript'
                    ),
                  }}
                  className='readCode'
                />
              </pre>
            </div>
            <p>
              This sets up the middleware to cache GraphQL query responses and
              invalidate them when a mutation occurs.
            </p>
            <li>Ensure Redis is Running</li>
            <p>
              Make sure Redis is installed and running on your machine. Start
              the server using:
            </p>
            <p className='instructions'> redis-server</p>
            <li>Start the Server</li>
            <p>Run your Express server:</p>
            <p className='instruction'>node index.js</p>
            <p>
              Visit{' '}
              <a href='http://localhost:3000/graphql ' className='link'>
                http://localhost:3000/graphql
              </a>
              to access GraphQL and start testing the caching behavior.
            </p>
            <li>Example Implementation</li>
            <p>Your Express server file should look something like this:</p>
            <div className='codeblock'>
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: Prism.highlight(
                      `const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { cacheMiddleware } = require('cacheiql-server');
const graphqlSchema = require('./schema/schema');
const rootValue = require('./schema/resolvers');

const app = express();

const TTL_IN_SECONDS = 1000;
const cachedRootValue = cacheMiddleware(rootValue, TTL_IN_SECONDS, graphqlSchema);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: cachedRootValue,
    graphiql: true,
  })
);

app.listen(3000, () => console.log('listening on 3000'));`,
                      Prism.languages.javascript,
                      'javascript'
                    ),
                  }}
                  className='readCode'
                />
              </pre>
            </div>
          </ol>
          <p>
            This sets up cacheMiddleware to cache query responses and
            intelligently invalidate them after mutations, enhancing the
            performance of your GraphQL application.
          </p>
          <div className='space'></div>
        </div>
      </div>
    </>
  );
}

export default ServerDocs;
