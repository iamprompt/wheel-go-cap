import { Link } from 'react-router-dom'

const HelloPage = () => {
  return (
    <div className="safe-top safe-left safe-right safe-bottom">
      Hello
      <Link to="/hi">Hi</Link>
    </div>
  )
}

export default HelloPage
