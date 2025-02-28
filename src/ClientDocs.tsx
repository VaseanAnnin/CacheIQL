import Taskbar from './Taskbar';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
import howitWorks from './assets/howitworks.png';
import ImageB from './assets/imageA.webp';
import ImageA from './assets/ImageB.webp';
function ClientDocs() {
  return (
    <>
      <Taskbar />

      <div className='readMe'>
        <div className='paragraph'>
          <h1>@cacheiql/client</h1>
          <hr />
          <p>
            <strong>@cacheiql/client</strong> is a lightweight client-side
            caching solution for GraphQL queries, designed to improve response
            times through local storage and request deduplication. By
            intercepting GraphQL requests, CacheIQL checks the cache for stored
            responses and only fetches missing data from the server, minimizing
            redundant network requests. Its efficient key-value storage approach
            enables quick retrieval and cache updates while ensuring data
            consistency. CacheIQL seamlessly integrates with existing GraphQL
            clients, optimizing performance without requiring additional backend
            configuration.
          </p>
          <p>
            @cacheiql/client is an npm package powered through{' '}
            <a href='https://github.com/oslabs-beta' className='links'>
              OS Labs
            </a>
            , developed by{' '}
            <a href='https://github.com/VaseanAnnin' className='links'>
              Vasean Annin
            </a>
            ,{' '}
            <a href='ub.com/gabyd613' className='links'>
              Gabriella Davoudpour{' '}
            </a>
            ,{' '}
            <a href='https://github.com/GeorgeGerman29' className='links'>
              George German
            </a>
            ,{' '}
            <a href='https://github.com/PedramKashani' className='links'>
              Pedram Kashani
            </a>{' '}
            , and{' '}
            <a href='https://github.com/matzec42' className='links'>
              Chris Matzen
            </a>
          </p>
          <h1>Installation</h1>
          <hr />
          <p>
            Install{' '}
            <a
              href='https://www.npmjs.com/package/cacheiql-client'
              className='links'
            >
              cacheiql/client
            </a>{' '}
            from npm using the terminal command: npm i cacheiql-client
            @cacheiql/client will be added as a dependency to your package.json
            file.
          </p>
          <h2>Import CacheIQL-Server</h2>
          <hr />
          <p>
            <strong>1. Add the following import to your .jsx file:</strong>
          </p>
          <p>CommonJS:</p>
          <div className='codeblock'>
            <code
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(
                  `const { cacheIt } = require('cacheiql-client');`,
                  Prism.languages.javascript,
                  'javascript'
                ),
              }}
              className='readCode'
            />
          </div>
          <p>ES6+:</p>
          <div className='codeblock'>
            <code
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(
                  `import { cacheit } from 'cacheiql-client'`,
                  Prism.languages.javascript,
                  'javascript'
                ),
              }}
              className='readCode'
            />
          </div>
          <p>
            <strong>
              2. Pass into the cacheIt function your desired endpoint, query,
              and TTL (time-to-live)
            </strong>
          </p>
          <div className='codeblock'>
            <pre>
              <code
                dangerouslySetInnerHTML={{
                  __html: Prism.highlight(
                    `Import {cacheIt} from 'cacheiql-client'
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
});`,
                    Prism.languages.javascript,
                    'javascript'
                  ),
                }}
                className='readCode'
              />
            </pre>
          </div>
          <p>
            <strong>
              3. Start the server by running the necessary commands in your
              terminal:
            </strong>
          </p>
          <p>ex: npm run start | npm run serv</p>
          <p>
            <strong>
              {' '}
              4. Visit your localhost to access GraphQL and start testing the
              caching functionality.
            </strong>
          </p>
          <h1>How It Works</h1>
          <hr />
          <img src={howitWorks} />
          <p>
            <strong>With Queries:</strong>
          </p>
          <p>
            CacheIQL's client side functionality begins with the user invoking
            the custom 'cacheIt' fetch and caching function, passing in the
            query. CacheIQL begins by interpreting the query, and checking for
            its existence in the cache. If it is not found, CacheIQL makes the
            query to GraphQL, storing the query: response object as a key value
            pair in local storage. If the query is found in local storage, the
            prior step is omitted, and cacheiql grabs the response object
            associated with the query, returning it back to the user with an
            increased latency of over 1000%.
          </p>
          <p>
            <strong>ImageA</strong>
          </p>
          <img src={ImageA} className='ImageA' />
          <p>
            <strong>ImageB</strong>
          </p>
          <img src={ImageB} className='ImageB' />
          <p>
            Here, we can see the difference in fetching speeds with the use of
            the native fetch API (image A) vs. CacheIQL's caching feature (image
            B), an increase in response time from 728 ms to .8 ms.
          </p>
          <p>
            <strong>With Mutations:</strong>
          </p>
          <p>
            Through the use of introspection, cacheiql is able to extract the
            query name off of the AST to determine whether or not a mutation
            keyword is used. If so, cacheiql implements cache invalidation,
            removing the initial query: response object associated with the
            mutation within miliseconds, allowing the user to re-update the
            cache with the most up to date form of data avaliable.
          </p>
          <div className='space'></div>
        </div>
      </div>
    </>
  );
}

export default ClientDocs;
