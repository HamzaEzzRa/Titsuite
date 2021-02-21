import {React, Component } from "react"
import HorizontalNav from "./HorizontalNav"

export default class CustomerHistorique extends Component{

    state ={
        items : []
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/Titsuite-1.0-SNAPSHOT/api/offers/mypreviousoffers', requestOptions).then(res => res.json()).then((data) => {
            console.log(data);
            this.setState(
                {items : data}
            )
        });
    }
    
    render(){
        const offers = ()=>{
            return this.state.items.map((item) => {
                return (<div class="serviceItem">
                    {item.id} -- 
                    {item.description} -- 
                    {item.activity} -- 
                    {item.city} -- 
                    {item.minimumWage} --
                    {item.startDay} --
                    
                </div>
                )
            })
        }
        return(
            <div class="row">
                <div class="col-2">
                    <HorizontalNav logout={this.props.rest.logout}/>
                </div>
                <div class="col Content">
                   {offers()}
                </div>
            </div>
        )
        
    }
}