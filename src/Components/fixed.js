import React from 'react'


export class Fixed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description,
            accessories: false,
            btn1: 'Custom Order',
            btn2: 'Learn More',
            scrolling:false,

        }
    }

    isInViewport = (e) => {
        const b = e.getBoundingClientRect();
        return (
            b.top >= 0 && b.left >= 0 && b.bottom <= (window.innerHeight ||
                document.documentElement.clientHeight) && b.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        )
    }


    isVisible() {
        let secs = document.getElementsByTagName("section")
        secs = Array.from(secs);
        secs.shift()
        for (let sec of secs) {
            if (this.isInViewport(sec)) {
                switch (sec.className) {
                    case 'y':
                        this.setState({
                            title: 'Model Y',
                            description: 'Order Online for Touchless Delivery',
                            accessories: false,
                            btn1: 'Custom Order',
                            btn2: 'Learn More'
                        })
                        break

                    case 'x':
                        this.setState({
                            title: 'Model X',
                            description: 'Order Online for Touchless Delivery',
                            accessories: false,
                            btn1: 'Custom Order',
                            btn2: 'Learn More'
                        })
                        break

                    case 'm3':
                        this.setState({
                            title: 'Model 3',
                            description: 'Order Online for Touchless Delivery',
                            accessories: false,
                            btn1: 'Custom Order',
                            btn2: 'Learn More'
                        })
                        break
                    case 's':

                        this.setState({
                            title: 'Model S',
                            description: 'Order Online for Touchless Delivery',
                            accessories: false,
                            btn1: 'Custom Order',
                            btn2: 'Learn More'
                        })
                        break


                    case 'sr':
                        this.setState({
                            title: 'Solar for New Roofs',
                            description: 'Solar Roof Costs Less Than a New Roof Plus Solar Panels',
                            accessories: false,
                            btn1: 'Order Now',
                            btn2: 'Learn More'

                        })
                        break
                    case 'sp':
                        this.setState({
                            title: 'Only $1.49/Watt for Solar on Existing Roofs',
                            description: 'Lowest Cost in America - Money-back guarantee',
                            accessories: false,
                            btn1: 'Order Now',
                            btn2: 'Learn More'
                        })
                        break

                    case 'a':
                        this.setState({
                            title: 'Accessories',
                            description: '',
                            accessories: true
                        })
                        break
                    default:
                        break
                }
            }
        }
    }


    componentDidMount() {
        let iS;
        document.getElementsByTagName("main")[0].addEventListener('scroll', () => {
            this.isVisible()
            this.setState({scrolling:true})
            window.clearTimeout(iS);
            iS = setTimeout(() => {
                this.setState({scrolling:false})
            }, 350);
        }, false);


    }


    returnOrder() {
       return this.state.accessories ?
           <div className={this.state.scrolling?'order out ':'order in'} >
               <div style={{background: "black"}}>Shop Now</div>
           </div> :
           <div className={this.state.scrolling?'order out':'order in'} >
               <div>{this.state.btn1}</div>
               <div>{this.state.btn2}</div>
           </div>
    }

    render() {
        return (
            <div className={'overlay'}>
                <header className={this.state.scrolling?'out':'in'}>
                    <h1>{this.state.title}</h1>
                    <p>{this.state.description}</p>
                </header>
                {this.returnOrder()}
            </div>

        )
    }
}