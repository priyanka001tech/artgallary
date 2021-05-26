import React, { Component } from 'react'
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../Data";

export default class TourList extends Component {
    state={
        tours:tourData
    };
    removeTour = id =>{
        console.log(id);
        const {tours} = this.state;
        const sortedTours = tours.filter(tour=> tour.id!==id);
        this.setState({
            tours:sortedTours
        });
    };
    render() {
        const {tours} = this.state;
        return (
        <main>    
        <section className="tour-list">
            {tours.map(tour => [
                    <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                ]
            )}
        </section>
        <div className="creator">
            <h3>Created By: Priyanka Kothari   </h3>
            <br/>
        </div>
        </main>
        );
    }
}