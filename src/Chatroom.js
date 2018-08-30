import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Message from './Message.js';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: "Sherry Wang",
                content: <p>Hello World!</p>,
                img: "https://xueyuanw.github.io/img/profile2.jpg",
            }, {
                username: "Xueyuan Wang",
                content: <p>Hey What's up?!</p>,
                img: "https://xueyuanw.github.io/img/profile2.jpg",
            }, {
                username: "Sherry Wang",
                content: <p>Check out my Github at <a href="https://github.com/xueyuanw" target="new">https://github.com/xueyuanw</a></p>,
                img: "https://xueyuanw.github.io/img/profile2.jpg",
            }, {
                username: "Xueyuan Wang",
                content: <p>Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.</p>,
                img: "https://xueyuanw.github.io/img/sony.jpg",
            }, {
                username: "Sherry Wang",
                content: <p>So</p>,
                img: "https://xueyuanw.github.io/img/profile2.jpg",
            }, {
                username: "Sherry Wang",
                content: <p>Chatbot is going to be a chatbot to display on my profile page</p>,
                img: "https://xueyuanw.github.io/img/profile2.jpg",
            }, {
                username: "Sherry Wang",
                content: <p>More implementation will continue!</p>,
                img: "https://xueyuanw.github.io/img/profile2.jpg",
            }, {
                username: "Xueyuan Wang",
                content: <p> Sounds great!</p>,
                img: "https://xueyuanw.github.io/img/profile2.jpg",
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "Sherry Wang",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "https://xueyuanw.github.io/img/profile2.jpg",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "Sherry Wang";
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <h3>Chatbot</h3>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) => 
                            <Message chat={chat} user={username} />
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Chatroom;