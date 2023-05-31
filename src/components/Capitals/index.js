import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {nationId: countryAndCapitalsList[0].id}

  render() {
    const {nationId} = this.state
    return (
      <div className="app-conatainer">
        <div>
          <h1>Countries And Capitals</h1>
          <div className="drop-down-container">
            <select
              onChange={e => this.setState({nationId: e.target.value})}
              id="drop-down"
            >
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p htmlFor="drop-down">is capital of which country?</p>
          </div>
          <p className="country">
            {countryAndCapitalsList.find(i => i.id === nationId).country}
          </p>
        </div>
      </div>
    )
  }
}

export default Capitals
