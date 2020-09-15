import React from 'react';
import {Navbar} from "./Components/Navbar";
import Model from "./Components/Model";
import './styles.css'
import {Fixed} from "./Components/fixed";
import SplashScreen from "./Components/SplashScreen";
export default class extends React.Component {
    constructor() {
        super();
        this.state={

        }
    }
    render() {
        return (
            <main className="App">
                <SplashScreen/>

                <Navbar/>
                <Fixed title={'Model Y'} description={'Order Online for Touchless Delivery'}/>
                <Model name={'y'}/>
                <Model id={'gggg'} name={'x'}/>
                <Model name={'m3'}/>
                <Model name={'s'}/>
                <Model name={'sp'}/>
                <Model name={'sr'}/>
                <Model name={'a'}/>
            </main>
        );
    }


}

