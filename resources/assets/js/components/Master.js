

import React,{Component} from 'react';
import { render } from 'react-dom';

import {  Route, Link } from 'react-router-dom';


import CreateItem from './Item/CreateItem'


export default class Master extends Component {



    render(){

      const Index = () => <h2>Home</h2>;
      const About = () => <h2>About</h2>;
      const Users = () => <h2>Users</h2>;
      //const CreateItem = () => <CreateItem/>;
      
      // return(
      //   <div>
      //     <nav>
      //       <ul>
      //         <li>
      //           <Link to="/">Home</Link>
      //         </li>
      //         <li>
      //           <Link to="/about/">About</Link>
      //         </li>
      //         <li>
      //           <Link to="/users/">Users</Link>
      //         </li>
      //       </ul>
      //     </nav>

      //     <Route path="/" exact component={Index} />
      //     <Route path="/about/" component={About} />
      //     <Route path="/users/" component={Users} />
      //   </div>
      // );

      return(
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href='#'> LaReact</a>
              </div>
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about/">About</Link>
                  </li>
                  <li>
                    <Link to="/users/">Users</Link>
                  </li>
                  <li>
                    <Link to="/add-item/">Item</Link>
                  </li>
              </ul>
            </div>
          </nav>

            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
            <Route path="/add-item/" component={CreateItem} />
        </div>
      );
      
      
        // return (
        //   <div className="container">
        //     <nav className="navbar navbar-default">
        //       <div className="container-fluid">
        //         <div className="navbar-header">
        //           <a className="navbar-brand" href="#">AppDividend</a>
        //         </div>
        //         <ul className="nav navbar-nav">
        //           <li className="active"><a href="/">Home</a></li>
        //           <li>
        //             <Link to="/add-item">Create Item</Link>
        //           </li>
                  
        //         </ul>
        //       </div>
        //   </nav>
        //       <div>
        //         {console.log('cek',this.props.children)}
        //           {this.props.children}
        //       </div>
        //   </div>
        // )
      }
}