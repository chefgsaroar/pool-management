import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as poolParamActionCreators from 'core/actions/actions-pool-params'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class HomeView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  onSubmit = (evt) => {
    const { actions } = this.props
    const { name } = this.state

    actions.poolParams.getFee(name)
    evt.preventDefault()
  }

  handleChange = (evt) => {
    const { value } = evt.currentTarget

    this.setState({
      name: value
    })
  }

  render() {
    const { name } = this.state

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <TextField
            id="standard-name"
            label="Enter Name"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <Button variant="outlined" type="submit">Submit</Button>
        </form>
        <br />
        <div>Name already exists?</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    poolParams: state.poolParams
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      poolParams: bindActionCreators(poolParamActionCreators, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
