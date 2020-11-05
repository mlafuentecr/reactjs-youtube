import SerachBar from './SearchBar'
import  './css/header.css'
import logo from '../components/imgs/logo.png'

const Header = (props) =>{
  return(
    <div className="ui header three ">
    <div className="logo ">
      <img src={logo} alt="logo"/>
      <span className="text">Tube</span>
    </div>
    <SerachBar setVideos={props.setVideos} />
  </div>
  )
}

export default Header;