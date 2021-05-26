import React, { Component } from 'react'
import "./Tour.scss";
export default class Tour extends Component {
    state={
        showInfo: false
    };
    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        });
    };
    render() {
        const{id,art,img,name,price,info}=this.props.tour;
        const { removeTour } = this.props;
        return (
            <main>
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="error"/>
                    <span className="classbtn" onClick= {() => {removeTour(id);
                    }}
                    >
                        <i className="fas fa-window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{art}</h3>
                    <h4>ARTIST: {name}</h4>
                    <h2><b>{price}</b></h2>
                    <h5>info{" "}
                    <span onClick={this.handleInfo}>
                        <i className="fas fa-caret-square-down" /></span></h5>
                    {this.state.showInfo && <p>{info}</p>}  
                      
                </div>       
            </article>
            </main>

        );
    }
}
