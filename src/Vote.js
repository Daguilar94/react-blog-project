import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import './Vote.css'

const Vote = (props) => {
  return(
    <div className="vote-container" id={props.post_id}>
      <Glyphicon glyph="chevron-up" onClick={props.manageVotes.bind(this, "sum")}/>
      <div>{props.votes}</div>
      <Glyphicon glyph="chevron-down" onClick={props.manageVotes.bind(this, "take")}/>
    </div>
  )
}

export default Vote
