import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class FooterLinkProps extends Component {
  render() {
    return (
      <>
       <h3>{this.props.title}</h3>
          <ul>
            {
            this.props.list
            .map((item, index) => (
                <li key={index}><Link to={item.link}>{item.linkName}</Link></li>
                ))
            
            }
            </ul>
      </>
    )
  }
}

export default FooterLinkProps;

// N.B - inside the map callback function i used () insetead of return