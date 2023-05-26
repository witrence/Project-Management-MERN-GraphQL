import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { DELETE_PROJECT } from "../mutations/ProjectMutations";
import { GET_PROJECTS } from "../queries/ProjectQueries";
import { useMutation } from "@apollo/client";

export default function DeleteProjectButton({ projectId }) {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    // refetching queries here, instead of updating cache
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className="d-flex mt-5 ms-auto">
      <button
        className="btn btn-danger mt-2 d-flex align-items-center gap-1"
        onClick={deleteProject}
      >
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
}
