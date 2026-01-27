import { param } from "motion/react-client";
import React from "react";
type TeamMembersDetailsProps = {
  params: {
    id: string;
  };
};
const TeamMembersDetails = async ({ params }: TeamMembersDetailsProps) => {
  const id = (await params).id;
  return <div>TeamMembersDetails{id}</div>;
};

export default TeamMembersDetails;
