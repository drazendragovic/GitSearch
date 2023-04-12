import React from 'react'

export default function GitRepo({repo}) {
  return (
    <div className='git-repo'>
        <h4>{repo.name}</h4>
        <p>{repo.description}</p>
    </div>
  )
}
