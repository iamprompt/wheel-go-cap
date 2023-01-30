import { useNavigate } from 'react-router-dom'

import { ActionHeaderWithTitle } from '../../components/Common/ActionHeaderWithTitle'
import { BlankLayout } from '../../layouts/blank'

const EditProfilePage = () => {
  return (
    <BlankLayout>
      <ActionHeaderWithTitle
        title="Edit Profile"
        actionLabel="Save"
        showBackButton={true}
      />
    </BlankLayout>
  )
}

export default EditProfilePage
