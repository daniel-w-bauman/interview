import { Component } from 'react'
import React from 'react'
import axios from 'axios'

class Question extends Component {
  constructor(props){
    super(props)
    this.state = {question: "", answer: ""}
  }

  componentDidMount() {
    axios.get('http://localhost:3001/question').then(res => {
      this.setState({question: res.data})
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  answerChanged = (e) => {
    e.preventDefault()
    this.setState({answer: e.target.value})
  }

  submitForm = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/answer', {'answer': this.state.answer}).then(res => {
      alert(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <h3>{this.state.question}</h3>
          <br></br>
          <input type="text" onChange={this.answerChanged} placeholder="Answer..." className="form-control" />
          <br></br>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Question
