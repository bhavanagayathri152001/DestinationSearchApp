import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="destination-container">
          <h1 className="heading">Destination Search</h1>
          <div className="input-container">
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <div className="countries-container">
            <ul className="ul-container">
              {searchResults.map(eachResult => (
                <DestinationItem
                  destinationDetails={eachResult}
                  key={eachResult.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
