import {gql, useQuery } from '@apollo/client';
import React,{useEffect, useState} from 'react';

const GET_JOBS = gql`
query{
    jobs{
      id
      title
      commitment{
        title
      }
      tags{
        name
      }
      postedAt
      company{
        name
        logoUrl
      }
      countries{
        id
      }
    }
  }
  `



export default function jobPost({searchQuery}){
    const {loading, error, data} = useQuery(GET_JOBS)

    

    if (loading) return <div>Loading</div>
    let filteredJobs = searchQuery != null ? data.jobs.filter((job) => {return job.title.toLowerCase().indexOf(searchQuery) !== -1}):data.jobs
    return(
        <div>
        {filteredJobs.map(({title,id,company,postedAt, commitment, tags}) => 
            <div key= {id} className="flex bg-white shadow-md m-4 p-4">
                <div>
                    <img className='h-20 w-20'src={company.logoUrl ? company.logoUrl: "apartment.svg"} alt={company.name}/>
                </div>
                <div className="flex flex-col justify-between ml-4">
                    <h3 className='font-bold text-blue-600'>{company.name}</h3>
                    <h2 className='font-bold text-tl'>{title}</h2>
                    <p className='text-gray-700'>
                        {new Date(postedAt).toLocaleDateString()}   {commitment.title}
                    </p>
                </div> 
                <div className='flex items-start justify-end'>
                    <div className="grid grid-cols-4 gap-2">
                    {tags.map(tag => <span key={tag.name}className='text-blue-600 bg-blue-100 font-bold m-1 p-1 rounded'>
                        {tag.name}</span>)}
                    </div>
                </div>
            </div>)
        }
        </div>
    )
}