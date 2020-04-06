import React from 'react'

const Home = () => {
  return (
    <>
      <h1>React Constate template</h1>
      <p>
        Production ready setup for React + Constate
      </p>
      <br />

      <h2>
        If you run ...
      </h2>
      <pre>
        git clone git@github.com:IvanDimanov/react-constate-template.git<br />
        cd react-constate-template<br />
        npm ci<br />
        npm start
      </pre>

      <h2>
        ... you will get
      </h2>
      <ul>
        <li>production Create React App with dynamic chunks - <em>npm start</em></li>

        <li>React app with routing and Material UI -
          {' '}
          <a
            href='https://material-ui.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://material-ui.com
          </a>
        </li>

        <li>Constate state management with Contexts -
          {' '}
          <a
            href='https://www.npmjs.com/package/constate'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://www.npmjs.com/package/constate
          </a>
        </li>
      </ul>
    </>
  )
}

export default Home
