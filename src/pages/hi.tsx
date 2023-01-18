import { Link } from 'react-router-dom'

const HiPage = () => {
  return (
    <div className="safe-top safe-left safe-right safe-bottom">
      Hi
      <Link to="/">Hello</Link>
    </div>
  )
}

export default HiPage
