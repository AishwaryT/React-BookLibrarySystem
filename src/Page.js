import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { formsubmit } from "./actions";

class Page extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: "", author: "", count: 0, disc: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

// Form field changle handler
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

// Submit Book information to redux store
  handleSubmit(event) {
    const { formsubmit } = this.props;
    // Submittinng local form state to redux
    formsubmit(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="navbar">
      
          <h1 className="title"> Book library system </h1>
        
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form">
            <div className="field">
              <label className="label" > Book Name: </label> 
            </div>
            <div className="control">
                <input 
                  className="input"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
             
            </div>

            <div className="field">
              <label className="label" > Book Author: </label> 
            </div>
            <div className="control">
                <input
                  className="input"
                  type="text"
                  name="author"
                  value={this.state.author}
                  onChange={this.handleChange}
                />
             
            </div>
            <div className="field">
              <label className="label" > Book Count: </label> 
            </div>
            <div className="control">
                <input
                  className="input"
                  type="number"
                  name="count"
                  min="0"
                  value={this.state.count}
                  onChange={this.handleChange}
                />
            
            </div>
            <div className="field">
              <label className="label" > Book Description: </label> 
            </div>
            <div className="control">
                <textarea
                  className="input"
                  name="disc"
                  value={this.state.disc}
                  onChange={this.handleChange}
                  rows="4"
                  cols="50"
                />
            
            </div>
            <input className="button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

// Extracting data from store
const mapStateToProps = state => ({
  value: state.value
});

// Dispatch action to store
const mapDispatchToProps = dispatch => ({
  formsubmit: name => dispatch(formsubmit(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
