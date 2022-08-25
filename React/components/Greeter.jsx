import React,{PureComponent} from "react";

class Greeter extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name
        }
    }
    render(){
        return(
            <>
                <div></div>
                <div></div>
            </>
        )
    }
}

export default Greeter