import React from "react";
import {Link} from 'react-router';

export default class Layout extends React.Component {
     navigate(){
          this.props.history.replaceState(null,'/')
     }
     render() {
          return(
               <div>
                    <nav class="navbar navbar-inverse">
                         <div class="container-fluid">
                              <div class="navbar-header">
                                   <Link class="navbar-brand" to="/">ReactApp</Link>
                              </div>
                              <ul class="nav navbar-nav">
                                   <li class="active"><Link to="home">Home</Link></li>
                                   <li><Link to="archives">Archives</Link></li>
                                   <li><Link to="settings">Settings</Link></li>
                                   <li><Link to="about">About</Link></li>
                              </ul>
                         </div>
                    </nav>
                    {this.props.children}
               </div>
          )
     }
}
