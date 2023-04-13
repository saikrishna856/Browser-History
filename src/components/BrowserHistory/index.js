import './index.css'

const BrowserHistory = props => {
  const {eachHistory, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const deleteIconClicked = () => {
    onDelete(id)
  }
  return (
    <li className="flex-container">
      <p className="time">{timeAccessed}</p>

      <div className="logo-title-url-container">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <div className="title-delete-container">
          <div className="title-url-container">
            <p className="title">{title}</p>
            <p className="paraurl">{domainUrl}</p>
          </div>
          <div>
            <button
              type="button"
              data-testid="delete"
              onClick={deleteIconClicked}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}
export default BrowserHistory
