import Button from './Button'
const Header = ({title}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        
    </header>
  )
}
Header.defaultProps = {
    title: "Remind Me",
}
export default Header