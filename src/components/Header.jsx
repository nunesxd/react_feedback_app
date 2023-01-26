import PropTypes from 'prop-types'


// function Header({ text }) {
function Header(props) {
  return (
    <header>
        <div className="container">
            <h2>{props.text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Default prop testing',
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header