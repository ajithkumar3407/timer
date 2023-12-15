import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Time extends Component{
    constructor(){
        super()
        this.state={
            min:0,
            sec:0
        }
        
    }
    onStart=()=>{
      this.time= setInterval(()=>{
            this.setState({
                
                sec: this.state.sec == 60 ? 0 : this.state.sec  +1 ,
                min: this.state.sec == 60 ? this.state.min +1  : this.state.min,
                

               
            })
        },500)
    }
    
    onStop=()=>{
        clearInterval(this.time)
    }
   render(){
        return(
            <div className="timer">
                 <Card className="card mx-auto" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>TIMER</Card.Title>
                        
                        <Card.Text>
                        {this.state.min} <span>m</span> : {this.state.sec} <span>s</span>
                        </Card.Text>
            
                        <Button variant="primary" onClick={this.onStart}>START</Button>
                        <Button  className="stop" variant="danger" onClick={this.onStop}>STOP</Button>
                        
                    </Card.Body>
                </Card>
                
       
            </div>
        )
    }
        
    
}
export default Time;