import { useNavigate } from 'react-router-dom'

const PolicyPage = () => {
  const navigate = useNavigate()

  return (
    <div className="safe-bottom safe-left safe-right">
      {/* Header */}
      <div className="fixed bg-white w-full top-0 safe-top">
        <div className="px-4 py-6 flex border-b border-gray-300">
          <div className="flex-1"></div>
          <div className="text-center">
            <h1 className="font-bold text-base">Terms and Privacy Policy</h1>
          </div>
          <div className="flex-1 text-end">
            <button
              type="button"
              className="font-bold"
              onClick={() => navigate(-1)}
            >
              Done
            </button>
          </div>
        </div>
      </div>

      <div className="safe-top" />
      {/* Content */}
      <div className="px-4 py-6 mt-20">
        <div className="mb-4">
          <h2 className="font-bold text-2xl mb-2">
            Terms of Service and Privacy Policy
          </h2>
          <p>Effective Date: 1 January 2023</p>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  )
}

export default PolicyPage
