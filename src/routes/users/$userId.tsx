import React from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { preload } from "react-dom";

export const fetchSingleUsers = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  // console.log(response.data)
  return response.data;
};
export const Route = createFileRoute("/users/$userId")({
  component: RouteComponent,
  loader: async ({ params: { userId } }) => {
    return fetchSingleUsers(userId);
  },
  pendingComponent: () => (
    <div className="text-5xl font-extrabold text-center">Loading .....</div>
  ),
  errorComponent: ({ error }) => (
    <div className="text-5xl font-extrabold text-center">
      Error: {error.message}
    </div>
  ),
});

function RouteComponent() {
  const navigate = useNavigate();
  const { userId } = Route.useParams();
  const data = Route.useLoaderData();
  return (
    <div className=" flex flex-col   items-center h-screen">
      <h1> User ID: {userId}</h1>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>
        Address: {data.address?.street}, {data.address?.suite},{" "}
        {data.address?.city}, {data.address?.zipcode}
      </p>
      <button
        onClick={() => navigate({ to : "/users" })}
        className="bg-blue-500 rounded-full text-white px-3 py-2 "
      >
        go back
      </button>
    </div>
  );
}
