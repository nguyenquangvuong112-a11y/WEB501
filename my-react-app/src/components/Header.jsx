import { Link } from "react-router-dom"

function Header() {
  return (
    <nav className="my-2">
      <div>
      <Link to="/" className="hover:underline font-medium">Trang Chủ</Link>
      <Link to="/About" className="hover:underline font-medium">Gioi thieu</Link>
      </div>
    </nav>
  )
}

export default Header