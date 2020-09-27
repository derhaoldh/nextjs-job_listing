import React, { useState, useEffect} from 'react';
import {Landing, SearchBar, JobPost} from '../components';
import{ApolloClient, ApolloProvider , InMemoryCache} from '@apollo/client'
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri:'https://api.graphql.jobs/'
  })




export default function App() {
  const [searchQuery, setQuery] = useState(null);
  const updateQuery = (query)=>
  {
    setQuery(query);
    console.log(searchQuery)
  }

  function getQuery(searchQuery){
    return searchQuery
  }
  
  return (
    <ApolloProvider client={client}>
        <div className="bg-white-200">
            <div className="flex flex-row">
              <div className="w-1/2"><Landing/></div>
              <div className="w-1/2 m-10">
                <SearchBar updateQuery={updateQuery}/>
                <div className="flex flex-col mt-10">
                  <JobPost searchQuery={searchQuery}></JobPost>
                </div>
              </div>
            </div>
        </div>
        </ApolloProvider>
  )
};