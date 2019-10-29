import React, {Component} from 'react'

export default class Cell extends Component {

    constructor(props){
        super(props)
        this.state = {
            color: this.props.value
        }
    }//end of constructor

    render() {
        return (
            <div 
            className="cell"
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}>
          </div>
        )

    }//end of render

    handleClick = () => {
        this.setState({
          color: '#333'
        })
      }




}//end of class cell