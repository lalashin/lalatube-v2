import React from 'react'

import Header from './Header'
import Footer from './Footer'
import { HelmetProvider, Helmet } from 'react-helmet-async'


const Main = ( props ) => {
    return (
      <HelmetProvider>
        <Helmet
            titleTemplate="%s | lalatube-v2" 
            defaultTitle="lala Youtube" 
            defer={false}
        >
              {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />

          
        </Helmet>
         <Header />
            <main id="main" role="main">
                {props.children}
            </main>
            <Footer />
      </HelmetProvider>
      
    )
}

export default Main
