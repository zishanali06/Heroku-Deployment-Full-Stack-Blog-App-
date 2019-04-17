import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export default class Contact extends React.Component<ContactProps, ContactState> {
    constructor(props: ContactProps){
        super(props);
        this.state = {
            email: "",
            subject: "",
            message: ""
        }
    }

    handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        let email = {
            to: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }
        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(email)
            })
            this.props.history.push('/', { contact: true });
        } catch (error) {
            throw error;
        }
    }

    render() {
        return (
            <section className="row">
                <section className="col-12"><h1><br /></h1>
                    <h1><br /></h1>
                </section>
                <section className="col-12 text-center text-success"><h1>Contact Me: Rigged Version, you select who receives the contact</h1></section>
                <section className="col-3"></section>
                <section className="col-6">
                <form className="form-group mt-5 border border-primary rounded p-3 shadow-lg bg-info">
                    <section className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            value={this.state.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}
                        />
                    </section>
                    <label>Subject</label>
                    <section className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.subject}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ subject: e.target.value })}
                        />
                    </section>
                    <section className="form-group">
                        <label>Message</label>
                        <textarea
                            className="form-control"
                            value={this.state.message}
                            rows={3}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ message: e.target.value })}
                        />
                    </section>
                    <button 
                    onClick={this.handleClick}
                    >Send Email</button>
                </form>
                </section>
                <section className="col-3"></section>

            </section>
        )
    }
}
interface ContactProps extends RouteComponentProps {

}

interface ContactState {
    email: string;
    subject: string;
    message: string;
}
