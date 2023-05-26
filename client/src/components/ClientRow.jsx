import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/ClientMutations";
import { GET_CLIENTS } from "../queries/ClientQueries";
import { GET_PROJECTS } from "../queries/ProjectQueries";

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // re-fetching getClients after deleting (costly method)
    // refetching both clients and projects because client deletion also affects projects
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],

    // alternative method by updating cache
    // update(cache, { data: { deleteClient } }) {
    //   // taking existing cache from the query
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });

    //   // updating query by filtering deleted client id
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button
          onClick={deleteClient}
          className="btn btn-danger btn-sm d-flex align-items-center"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
