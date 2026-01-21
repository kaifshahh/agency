import React from 'react'

const TeamMembersDetails = async ({params}) => {
  const id = (await params).id;
  return (
    <div>TeamMembersDetails{id}


 
    </div>
  )
};

export default TeamMembersDetails ;