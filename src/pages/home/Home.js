import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { GitContext } from "../../App";

export default function Home() {
  const { details, setDetails } = useContext(GitContext);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const fetchData = () => {
    const gitUserUrl = `https://api.github.com/users/${input}`;
    const gitUserReposUrl = `https://api.github.com/users/${input}/repos`;
    fetch(gitUserUrl)
      .then((res) => {
        if (!res.ok) {
          console.log(res);
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((detail) => {
        fetch(gitUserReposUrl)
          .then((res) => {
            if (!res.ok) {
              throw Error(res.statusText);
            }
            return res.json();
          })
          .then((repos) => {
            console.log(detail, repos);
            setDetails((prev) => ({
              ...prev,
              userDetails: detail,
              userRepos: repos,
            }));
          })
          .catch((error) => {
            setDetails({
              userDetails: null,
              userRepos: null,
            });
            console.log(error);
            navigate("/details");
          })
          .finally(() => {
            setInput("");
            navigate("/details");
          });
      })
      .catch((error) => {
        setDetails({
          userDetails: null,
          userRepos: null,
        });
        console.log(error);
        navigate("/details");
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <span className="label">GitHub username:</span>
          <input
            className="form-input"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="e.g. facebook"
          />
        </div>
        <input className="form-btn" type="submit" value="Go!" />
      </form>
    </div>
  );
}
