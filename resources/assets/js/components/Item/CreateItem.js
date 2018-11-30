import React, {Component} from 'react';
import { render } from 'react-dom';

import { Router, Route, Link } from 'react-router-dom';



export default class Createitem extends Component{
    render(){
        return(
            <div>
                <h1>Create An Item</h1>
                <form>
                <div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                        <label>Item Name:</label>
                        <input type="text" className="form-control" />
                    </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <label>Item Price:</label>
                        <input type="text" className="form-control col-md-6" />
                        </div>
                    </div>
                    </div><br />
                    <div className="form-group">
                    <button className="btn btn-primary">Add Item</button>
                    </div>
                </form>
        </div>
        );
    }
}