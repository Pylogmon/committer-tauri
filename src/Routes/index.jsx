import Committer from '../pages/Committer'
import Assigned from '../pages/Assigned'
import MyCommits from '../pages/MyCommits'
import { Navigate } from 'react-router-dom'

export default [
    {
        path: "/committer",
        element: <Committer />
    },
    {
        path: "/assigned",
        element: <Assigned />
    },
    {
        path: "/my-commits",
        element: <MyCommits />
    },
    {
        path: "/",
        element: <Navigate to='/committer' />
    }
]