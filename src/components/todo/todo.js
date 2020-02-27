import React,{Component} from 'react'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: [
                    {text: 'Net Ninja',
                    title: 'React crash course',
                    time: '1200 oclock',
                    views: 70,
                    message: 'new message',
                    },
                    {text: 'Traversey',
                    title: 'Vanilla javascript',
                    time: '300 oclock',
                    views: 100,
                    message: 'Hello new ',
                    },
                    {text: 'Tutorials point',
                    title: 'How to build with python',
                    time: 1200,
                    views: 100,
                    message: 'Hello world',
                    },
                    {text: 'Code org',
                    title: 'Learn vanilla js',
                    time: '1000 oclock',
                    views: 100,
                    message: 'new message',
                    },
                    {text: 'Alexa video',
                    title: 'Learn c#',
                    time: 400,
                    views: 100,
                    message: 'My ads',
                    },
                    {text: 'Traversey',
                    title: 'Vanilla javascript',
                    time: '300 oclock',
                    views: 100,
                    message: 'Hello new ',
                    },
                ]
        } 

    }
    render() {
         return (
            this.state.content.map((c,i)=> {
            return(
                <div>
                    <div className="flex-container">
                        <div className="flex-item-first">
                            <Sidebar
                                data={this.state.sidebarData}
                            />
                        </div>
 
                        <div className="flex-item-second">
                            <div className="flex-container-1">
                                <div className="flex-item-1">
                                    <div key={i}>
                                        <div>{c.i}</div>
                                        <div>{c.text}</div>
                                        <div>{c.title}</div>
                                        <div>{c.time}</div>
                                        <div>{c.views}</div>
                                        <div>{c.message}</div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>

                </div>    
            )
        }))

        // console.log(this.state.contents)
        // console.log('yes',contentList)

        return(
            <div>
    <h1>Hello world</h1>
            </div>
        )
    }
}
export default Todo;