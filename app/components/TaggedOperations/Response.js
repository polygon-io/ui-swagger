import React from "react";

export const Response = ({ response, code }) => {
  let description;
  try {
    description = response.description;
  } catch (error) {
    console.log("ERROR FETCHING DESCRIPTION", error);
  }
  return (
    <tr>
      <td>{code}</td>
      <td>{description || "no description"}</td>
    </tr>
  );
  j;
};
