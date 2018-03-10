import React, { Component } from 'react';
import './App.css';
import Post from './Post.js'
import Order from './Order.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: [
        {
          id: 1,
          title: 'Manejo de dependencias en Ruby con Bundler',
          description: 'Bundler es una manejador de dependencias para Ruby. Aunque viene incluido con Rails, Bundler no es exclusivo de Rails, lo puedes usar para manejar las dependencias de cualquier proyecto de Ruby.',
          url: 'http://blog.makeitreal.camp/manejo-de-dependencias-en-ruby-con-bundler/',
          votes: 42,
          writer_avatar_url: '//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405',
          post_image_url: 'http://blog.makeitreal.camp/assets/images/bg-images/bundler.jpg',
        },
        {
          id: 2,

          title: 'Descubre si Make it Real es para ti',
          description: 'En Make it Real buscamos entrenar a los desarrolladores Web que nosotros mismos quisiéramos contratar. Personas con autodisciplina que sean capaces de resolver problemas complejos y se adapten rápidamente a nuevas tecnologías y escenarios. En este post vamos a discutir algunas características de nuestro programa para que descubras si Make it Real es para ti.',
          url: 'http://blog.makeitreal.camp/descubre-si-make-it-real-es-para-ti/',
          votes: 43,
          writer_avatar_url: '//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405',
          post_image_url: 'http://blog.makeitreal.camp/assets/images/bg-images/laptop-sublime.jpg',
        },
        {
          id: 3,
          title: '¿Qué es código?',
          description: 'Semáforos, automóviles, aviones, aeropuertos, satélites, el sistema financiero, gran parte de nuestras vidas depende del código que varias generaciones de programadores han escrito. Pero ¿qué es código? ¿quién lo ejecuta y cómo? En este post vamos a hacer un recorrido histórico para entender cómo es que la electricidad se convierte en código y cómo surgieron los lenguajes de programación.',
          url: 'http://blog.makeitreal.camp/que-es-codigo/',
          votes: 44,
          writer_avatar_url: '//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405',
          post_image_url: 'http://blog.makeitreal.camp/assets/images/bg-images/code.jpg',
        },
        {
          id: 4,
          title: 'Aprende Desarrollo Web gratis',
          description: '¿Quieres iniciar en el mundo del desarrollo Web y no sabes por dónde empezar? Conoce Aprende Desarrollo Web, un curso completamente gratis dirigido a personas sin experiencia en el que aprenderás a crear y publicar sitios interactivos en Internet con HTML, CSS y JavaScript.',
          url: 'http://blog.makeitreal.camp/aprende-desarrollo-web-gratis/',
          votes: 45,
          writer_avatar_url: '//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405',
          post_image_url: 'http://blog.makeitreal.camp/assets/images/bg-images/aprende-desarrollo-web-bg.png',
        },
      ],
      order: 'Descendent'
    }
  }

  componentWillMount() {
    this.setState({
      data: this.order('Descendent')
    })
  }

  reorder() {
    this.setState({
      data: this.order(this.state.order)
    })
  }

  order(direction) {
    let ordered_votes = {}
    let ordered_posts = []
    this.state.data.map((post) => {
      ordered_votes[post.votes] === undefined ?  ordered_votes[post.votes]= [post.id] : ordered_votes[post.votes].push(post.id)
      return null
    })
    let post_votes = Object.keys(ordered_votes)
    direction === "Descendent" ? post_votes.sort().reverse() : post_votes.sort()
    post_votes.forEach( votes => {
      votes = parseInt(votes, 10)
      this.state.data.filter((post) => {
        ordered_votes[votes].forEach(id => {
          if ((post.votes === votes) && (post.id === id)) {
            ordered_posts.push(post)
          }
        })
        return null
      })
    })
    return ordered_posts
  }

  renderPosts() {
    const posts = this.state.data.map((post) => {
      return (
        <Post key={post.id} post_id={post.id} title={post.title} description={post.description} url={post.url} votes={post.votes} author_img={post.writer_avatar_url} img={post.post_image_url} manageVotes={this.manageVotes.bind(this, post.id)}/>
      )
    })
    return posts
  }
  
  manageVotes(postId, action) {
    const new_posts = this.state.data.map((task, i) => {
      if (postId === task.id) {
        action === "sum" ? task.votes++ : task.votes--
        return task
      } else {
        return task
      }
    })
    this.setState({
      data: new_posts
    })
    this.reorder()
  }

  switchOrder(direction) {
    this.setState({order: direction},function () {
      this.reorder()
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className='bolg-header text-center'>
          <h2><strong>Blogposts más populares</strong></h2>
          <hr/>
          <Order order={this.state.order} switchOrder={this.switchOrder.bind(this)}/>
        </div>
        {this.renderPosts()}
      </div>
    );
  }
}

export default App;
