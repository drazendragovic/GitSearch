import React, { useContext } from "react";

import GitDetails from "../../components/GitDetails";
import { GitContext } from "../../App";

export default function Details() {
  const { details, setDetails } = useContext(GitContext);

  return (
    <div className="git-details-wrapper">
      <GitDetails gitDetails={details} handleDetails={setDetails} />
    </div>
  );
}
