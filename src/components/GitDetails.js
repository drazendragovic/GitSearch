import React from "react";
import { useNavigate } from "react-router-dom";
import GitRepo from "./GitRepo";

export default function GitDetails({ gitDetails, handleDetails }) {
  const navigate = useNavigate();

  const reset = () => {
    handleDetails({
      userDetails: null,
      userRepos: null,
    });
    navigate("/home");
  };

  if (gitDetails.userDetails) {
    return (
      <div className="git-details">
        <div className="user-details">
          <div className="git-user">
            <img
              src={gitDetails.userDetails.avatar_url}
              alt={gitDetails.userDetails.name}
              width="120"
            />
            <h1>{gitDetails.userDetails.name}</h1>
          </div>
          <div className="git-user-data">
            <div className="data">
              <h4>BIO:</h4>
              <p>{gitDetails.userDetails.bio == null ? "Unknown" : gitDetails.userDetails.bio}</p>
            </div>
            <div className="data">
              <h4>LOCATION:</h4>
              <p>{gitDetails.userDetails.location == null ? "Unknown" : gitDetails.userDetails.location}</p>
            </div>
            <div className="data">
              <h4>REPOSITORIES:</h4>
            </div>
          </div>
          <div className="git-repos">
            {gitDetails.userRepos.message ?
              <span>No repositories</span>
            : gitDetails.userRepos.map((repo) => (
              <GitRepo key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    );
  } else {
    return (
      <div className="git-details-empty">
        <h4>Nema podataka</h4>
        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    );
  }
}
