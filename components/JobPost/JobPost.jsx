import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

const GET_JOBS = gql`
  query {
    jobs {
      id
      title
      commitment {
        title
      }
      tags {
        name
      }
      postedAt
      company {
        name
        logoUrl
        websiteUrl
      }
      cities {
        country {
          name
        }
      }
    }
  }
`;

export default function jobPost({ searchQuery }) {
  const { loading, error, data } = useQuery(GET_JOBS, {});

  if (loading)
    return (
      <Loader
        className="object-fill"
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
      />
    );
  if (error) return <div>{console.log(error)}Error...</div>;

  let filteredJobs =
    searchQuery != null
      ? data.jobs.filter((job) => {
          return job.title.toLowerCase().indexOf(searchQuery) !== -1;
        })
      : data.jobs;
  return (
    <div>
      {filteredJobs.map(
        ({ title, id, company, postedAt, commitment, tags, cities }) => (
          <div key={id} className="flex bg-indigo-100 shadow-md m-4 p-4">
            <div>
              <img
                className="h-20 w-20"
                src={`//logo.clearbit.com/${company.websiteUrl}`}
                onError={(e) => {
                  e.target.src = "apartment.svg";
                }}
                alt={company.name}
              />
            </div>
            <div className="flex flex-col justify-between ml-4">
              <h3 className="font-bold text-blue-600">{company.name}</h3>
              <h2 className="font-bold text-blue-700">{title}</h2>
              <p className="text-gray-700">
                {new Date(postedAt).toLocaleDateString()}
                {cities.length > 0 ? "•" + cities[0].country.name : ""}
                {"•" + commitment.title}
              </p>
            </div>
            <div className="flex items-start justify-end">
              <div className="grid grid-cols-4 gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="text-blue-600 bg-indigo-200 font-bold m-1 p-1 border-solid border-2 border-blue-600 rounded"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
