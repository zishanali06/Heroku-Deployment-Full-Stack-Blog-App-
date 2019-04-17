import * as React from 'react';
import Blogcard from './Blogcard';
import { json } from '../utils/api';
import { RouteComponentProps } from 'react-router';

export default class Blog extends React.Component<IBlogProps, IBlogState> {

    constructor(props: IBlogProps) {
        super(props);

        this.state = {
            blogposts: [{
                id: null,
                title: null,
                content: null,
                author: null,
                _created: null
            }],
            contact: false
        };
    }

    async componentDidMount() {
        let blogposts = await json('/api/blogs');
        this.setState({ blogposts });
        console.log(this.props.history);
        if (this.props.history.action === 'PUSH' && this.props.location.state.contact === true) {
            this.setState({ contact: true });
        }
    }

    render() {
        if (this.state.contact === true) {
            return (
            <React.Fragment>
                <section className="row text-center">
                    <section className="col-12"><h1><br /></h1>
                        <h1><br /></h1>
                    </section>
                </section>
                {/* ternary operater, kind of like if else */}
                {this.state.contact? <h1>test</h1>: <span></span>}
                    <section className="row text-center">
                        <section className="col-3"></section>
                        <section className="col-6 alert alert-primary">Thanks for Contacting us! We will get back to you shortly!</section>
                        <section className="col-3"></section>
                    </section>
                    <section className="row">
                        {this.state.blogposts.map((blog) => {
                            return <Blogcard key={blog.id} post={blog}></Blogcard>
                        })}
                    </section>
            </React.Fragment>
            )
        } else {
            return (
                <section className="row text-center">
                    <section className="col-12"><h1><br /></h1>
                        <h1><br /></h1>
                    </section>
                    <section className="row">
                        {this.state.blogposts.map((blog) => {
                            return <Blogcard key={blog.id} post={blog}></Blogcard>
                        })}
                    </section>
                </section>
            )
        }
    }
}

interface IBlogProps extends RouteComponentProps {

}

interface IBlogState {
    blogposts: [{
        id: number,
        title: string,
        content: string,
        author: string,
        _created: string
    }];
    contact: boolean;
}