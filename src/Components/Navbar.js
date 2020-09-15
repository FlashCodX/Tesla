import React from 'react'
const navIcon = require('../assets/navIcon.svg')
const closeIcon = require('../assets/close.svg')

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleNav() {
        this.setState({open: !this.state.open})
    }

    handleClick() {
        window.location.reload()
    }

    render() {
        return (
            <nav>
                <h1 onClick={()=>this.handleClick()}>TESLA</h1>
                <div>
                    <span>Model S</span>
                    <span>Model 3</span>
                    <span>Model X</span>
                    <span>Model Y</span>
                    <span>Solar Roof</span>
                    <span>Solar Panels</span>
                </div>
                <img src={!this.state.open ? navIcon : closeIcon} onClick={() => this.handleNav()} alt="nav"/>
                <section className={this.state.open ? 'open_nav' : 'close_nav'}>
                    <div>USED INVENTORY</div>
                    <hr/>
                    <div>TRADE-IN</div>
                    <hr/>
                    <div>CYBERTRUCK</div>
                    <hr/>
                    <div>ROADSTER</div>
                    <hr/>
                    <div>Semi</div>
                    <hr/>
                    <div>PowerWall</div>
                    <hr/>
                    <div>Commercial solar</div>
                    <hr/>
                    <div>Test Drive</div>
                    <hr/>
                    <div>Charging</div>
                    <hr/>
                    <div>Find Us</div>
                    <hr/>
                    <div>Support</div>
                    <hr/>
                    <div>United States</div>
                    <hr/>
                </section>
            </nav>
        )
    }


}