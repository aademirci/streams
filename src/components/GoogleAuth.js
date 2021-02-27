import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'
import { API_KEY } from '../api/google'

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: API_KEY,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()

                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = isSignedIn => isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut()
    
    renderAuthButton() {
        if (this.props.isSignedIn === null)
            return null
        else if (this.props.isSignedIn)
            return <button className="ui red google button" onClick={() => this.auth.signOut()}><i className="google icon" />Sign out</button>
        else
            return <button className="ui red google button" onClick={() => this.auth.signIn()}><i className="google icon" />Sign in with Google</button>

    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
