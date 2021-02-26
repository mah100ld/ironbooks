import userData from '../users.json'
import User from './user'
import { v4 as uuidv4 } from 'uuid';

import React, { Component } from 'react'

const id = uuidv4()
export default class booksList extends Component {

    
    
    state = {
        users: userData,
        search: ''
    }

    // renderUsers = () => {
    //    return this.state.users.map(elem => {console.log(elem); return elem})
    // }

    searchQuery = event => {
        event.preventDefault();
        console.log(this.state.search)

        const search = this.state.users.filter(user => {
            
           const filter = user.lastName.inlcudes(this.state.search) && user.firstName.includes(this.state.search) 
           console.log(filter)
           return filter  

        })
        
        console.log(search)
        return search
    }

    handleChange = event => {
        this.setState({
            search: event.target.value
        })
    }

    render() {

        return (
        <div>
        <h1>IronBooks</h1>
        
        <form onSubmit={this.searchQuery}>
            
            <input type="text" name="search" id = "search" value={this.state.value} onChange={this.handleChange}/>

        </form>

            <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Campus</th>
                    <th>Role</th>
                    <th>Links</th>
                </tr>
            </thead>
            <tbody>
            {/* {this.renderUsers()} */}
                {/* <User {...this.renderUsers()}/> */}
                {this.state.users.map((elem => (<User {...elem}/>)))}
            </tbody>
            </table>
        </div>
            
        )
    }
}

