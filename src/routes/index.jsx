import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
const Committer = lazy(() => import('../pages/Committer'))
const Assigned = lazy(() => import('../pages/Assigned'))
const MyCommits = lazy(() => import('../pages/MyCommits'))

const routes = [
    {
        path: "/committer",
        element: <Suspense fallback={<h1>Loading...</h1>}><Committer /></Suspense>
    },
    {
        path: "/assigned/:userId",
        element: <Suspense fallback={<h1>Loading...</h1>}><Assigned /></Suspense>
    },
    {
        path: "/my-commits/:userId",
        element: <Suspense fallback={<h1>Loading...</h1>}><MyCommits /></Suspense>
    },
    {
        path: "/",
        element: <Navigate to='/committer' />
    }
]

export default routes