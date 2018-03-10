import React from 'react';
import './Post.css';
import {Grid, Row, Col} from 'react-bootstrap';
import Vote from './Vote.js'

const Post = (props)=> {
  return(
    <Grid>
      <Row className="show-grid post-container my-3">
        <Col xs={12} md={3} mdOffset={1}>
          <img src={props.img} alt=""/>
        </Col>
        <Col xs={2} md={1} className="text-center">
          <Vote votes={props.votes} id={props.post_id} manageVotes={props.manageVotes}/>
        </Col>
        <Col xs={10} md={6} className="text-left post-content">
          <a href={props.url} target="_blank"><strong>{props.title}</strong></a>
          <p >{props.description}</p>
          <span className="text-muted">Escrito por:</span>
          <img className="ml-2" src={props.author_img} alt=""/>
        </Col>
      </Row>
    </Grid>
  )
}

export default Post
