import React from 'react';
import "./App.css";
import { Nav, Navbar } from "react-bootstrap";


// Main class of this file: holds selecter and sorting/filtering list
class FilteredList extends React.Component {
    
    // Constructor and sets state
    constructor(props) {
        super(props)
        this.state = {channel : "All", genre : "All", rating : 0, price: 0, count: 0, inCart : {}}

        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    // Called by channel sorting buttons
    onSelectChannel = event => {
        this.setState({
            channel: event
        })
    }

    // Deals with matching channel
    matchesChannel = item => {
        if (this.state.channel === "All") {
            return true
        } else if (this.state.channel === item.channel) {
            return true
        } else {
            return false
        }
    }

    // Called by genre filtering buttons
    onSelectGenre = event => {
        this.setState({
            genre: event
        })
    }

    // Deals with matching genre
    matchesGenre = item => {
        if (this.state.genre === "All") {
            return true
        } else if (this.state.genre === item.genre) {
            return true
        } else {
            return false
        }
    }

    // Deals with returning filtered channels and genres in returning in render
    filterItems = item => {
        return this.matchesChannel(item) && this.matchesGenre(item);
    }

    // Called by rating soring buttons
    onSelectSorting = event => {
        this.setState({
            rating: event
        })
    }

    // Adds to aggregator
    addToCart(title, img, channel, genre, rating, price) {
        if (this.state.inCart[title] == null) {
            this.state.inCart[title] = {title: title, img: img, channel: channel, genre: genre, rating: rating, price: price, count: 1}
        } else {
            this.state.inCart[title].count += 1
        }
        this.setState((state, props) => { return {}; })
    }
    
    // Removes from aggregator
    removeFromCart(title) {
        if (this.state.inCart[title].count == 1) {
            this.setState((state, props) => {
                state.inCart[title] = null
                return {
                    inCart: state.inCart
                };
            })
        } else {
            this.state.inCart[title].count -= 1
        }
        this.setState((state, props) => { return {}; })

    }

    // Rendering
    render() { 
        // Deals with sorting by rating if necessary
        let sortlist = this.props.list;
        if (this.state.rating === "None") {
            sortlist = this.props.list
        }
        if (this.state.rating === "Highest") {
            sortlist = this.props.list.slice().sort((a, b) => b.rating - a.rating)
        }
        if (this.state.rating === "Lowest") {
            sortlist = this.props.list.slice().sort((a, b) => a.rating - b.rating)
        }

        // Render list item objects: image, title, channel, genre, rating, add to cart button
        const renderItem = (item) => {
            return (
                <div className="card">
                    <div key={item.title} className="items-list">
                        <img className='img' src={item.img} alt="error" />
                        <div className='text'><b>Title: </b> {item.title}</div>
                        <div className='text'><b>Channel: </b> {item.channel}</div>
                        <div className='text'><b>Genre:</b> {item.genre} </div>
                        <div className='text'><b>Rating: </b> {item.rating}%</div>
                        <div className='text'><b>Price: </b> ${item.price}</div>
                        <button className='shop-button' onClick={() => this.addToCart(item.title, item.img, item.channel, item.genre, item.rating, item.price)}> Add to Cart</button>
                    </div>
                </div>);
        }
        
        // return: displays the navigation bar with filtering and sorting buttons, filtered items, and cart status
        return (
            <div className="cards-container">
                <div className="navigation-bar">

                    {/* navigation bar for channel filtering buttons */}
                    <Navbar bg="light" expand="sm">
                        <Nav defaultActiveKey="All">
                        <Nav.Item> Channel: <Nav.Link className='navBar' eventKey="All" onSelect={this.onSelectChannel} role="button">All</Nav.Link> &nbsp;
                        <Nav.Link className='navBar' eventKey="KBS" onSelect={this.onSelectChannel} role="button">KBS</Nav.Link> &nbsp;
                        <Nav.Link className='navBar' eventKey="MBC" onSelect={this.onSelectChannel} role="button">MBC</Nav.Link> &nbsp;
                        <Nav.Link className='navBar' eventKey="SBS" onSelect={this.onSelectChannel} role="button">SBS</Nav.Link> &nbsp;
                        <Nav.Link className='navBar' eventKey="tvN" onSelect={this.onSelectChannel} role="button">tvN</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar>
                    <br/>

                    {/* navigation bar for genre filtering buttons */}
                    <Navbar bg="light" expand="sm">
                        <Nav defaultActiveKey="All">
                        <Nav.Item> Genre: <Nav.Link className='navBar' eventKey="All" onSelect={this.onSelectGenre} role="button">All</Nav.Link> &nbsp;
                        <Nav.Link className='navBar' eventKey="Action" onSelect={this.onSelectGenre} role="button">Action</Nav.Link> &nbsp;
                        <Nav.Link className='navBar' eventKey="Comedy" onSelect={this.onSelectGenre} role="button">Comedy</Nav.Link> &nbsp;
                        <Nav.Link className='navBar' eventKey="Fantasy" onSelect={this.onSelectGenre} role="button">Fantasy</Nav.Link> &nbsp;
                        <Nav.Link className='navBar' eventKey="Historical" onSelect={this.onSelectGenre} role="button">Historical</Nav.Link> &nbsp;
                        <Nav.Link className='navBar' eventKey="Legal" onSelect={this.onSelectGenre} role="button">Legal</Nav.Link> &nbsp;
                        <Nav.Link className='navBar' eventKey="Melodrama" onSelect={this.onSelectGenre} role="button">Melodrama</Nav.Link> &nbsp;
                        <Nav.Link className='navBar' eventKey="Medical" onSelect={this.onSelectGenre} role="button">Medical</Nav.Link> &nbsp;
                        <Nav.Link className='navBar' eventKey="Romance" onSelect={this.onSelectGenre} role="button">Romance</Nav.Link> &nbsp;
                        <Nav.Link className='navBar' eventKey="School" onSelect={this.onSelectGenre} role="button">School</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar>
                    <br/>

                    {/* navigation bar for rating sorting buttons */}
                    <Navbar bg="light" expand="sm">
                        <Nav defaultActiveKey="Select">
                        <Nav.Item>Sort by rating: <Nav.Link className='navBar' eventKey="None" onSelect={this.onSelectSorting} role="button">None</Nav.Link> &nbsp;
                        <Nav.Link className='navBar' eventKey="Highest" onSelect={this.onSelectSorting} role="button">Highest to Lowest</Nav.Link> &nbsp;
                        <Nav.Link className='navBar' eventKey="Lowest" onSelect={this.onSelectSorting} role="button">Lowest to Highest</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar>
                </div>
                <br/>

                {/* displays filtered items and cart*/}
                <div className="return-container">
                    <div className="object-list">
                        {(sortlist.filter(this.filterItems)).map(renderItem)}
                    </div>

                    {/* Displays cart; cart class defined below */}
                    <Cart inCart={this.state.inCart} add={this.addToCart} removeFromCart={this.removeFromCart}></Cart>
                </div>
            </div>
        );
    }

} 

// Cart class that displays and deals with aggregator for total price
class Cart extends React.Component {

    // Render: calculates total cost and displays all of the list items in the cart and total cost
    render() {
        var totalPrice = 0
        var renderItems = []
        for (var key in this.props.inCart) {
            const val = this.props.inCart[key]
            if (val != null) {
                totalPrice += (val.price) * (val.count) // total price = price of each episode * number of episodes
                renderItems.push(
                    <div className="card">
                        <div key={val.title} className="items-list">
                        <img className='img' src={val.img} alt="error" />
                        <div className='text'><b>Title: </b> {val.title}</div>
                        <div className='text'><b>Channel: </b> {val.channel}</div>
                        <div className='text'><b>Genre:</b> {val.genre} </div>
                        <div className='text'><b>Rating: </b> {val.rating}%</div>
                        <div className='text'><b>Price: </b> ${val.price}</div>
                        <div className='text'><b>Number of Episodes: </b> {val.count}</div>
                        <button className='shop-button' onClick={() => {this.props.removeFromCart(val.title) }}> Remove From Cart</button>
                    </div>
                </div>)

            }
        }

        // return: displays total cost and items in the cart 
        return (
            <div>
                <div className="shopping-cart-title">
                    Shopping Cart
                </div>
                <br/>

                <div className="total-cost">
                    Total Cost of Episodes: ${totalPrice.toFixed(2)}
                </div>

                <div className="shopping-cart">
                    {renderItems}
                </div>
            </div>
                );
    }
} export default FilteredList;