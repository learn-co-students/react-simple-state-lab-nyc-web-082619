import React, {Component} from 'react'

export default class Cell extends Component {

    constructor(props){
        super(props)
        this.state = {
            colors: this.props.value
        }
    }//end of constructor

    render() {
        return (
            <div classname="cell" style={{backgroundColor: this.state.color}}>

            </div>
        )

    }//end of render

    handleClick = () => {
        this.setState({
          color: '#333'
        })
      }




}//end of class cell