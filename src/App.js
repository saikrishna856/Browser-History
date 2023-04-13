import {Component} from 'react'
import BrowserHistory from './components/BrowserHistory'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {history: initialHistoryList, userText: '', message: ''}

  onDelete = id => {
    const {history} = this.state

    const filterdhistory = history.filter(eachData => id !== eachData.id)

    this.setState({history: filterdhistory})
  }

  userEnterdText = event => {
    const {userText, message} = this.state
    this.setState({userText: event.target.value})
  }

  render() {
    const {history, userText, message} = this.state
    const filtereredhistory = history.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(userText.toLowerCase()),
    )
    const text =
      filtereredhistory.length === 0 ? 'There is no history to show' : null

    return (
      <div className="main-container">
        <div className="search-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-element"
          />
          <div className="user-search-icon-container">
            <div className="search-logo">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="logo"
              />
            </div>

            <input
              type="search"
              placeholder="Search history"
              className="user-search-field"
              value={userText}
              onChange={this.userEnterdText}
            />
          </div>
        </div>
        <ul className="history-list-container">
          {filtereredhistory.map(eachHistory => (
            <BrowserHistory
              onDelete={this.onDelete}
              eachHistory={eachHistory}
              key={eachHistory.id}
            />
          ))}
        </ul>

        <p className="emptyhistory">{text}</p>
      </div>
    )
  }
}

export default App
