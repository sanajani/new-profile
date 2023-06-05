import { useRouteError, Link } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div>
        <h1>Opps!!! Something Went Wrong </h1>
        <h1>Page  <strong>{error.statusText} || Error Code is {error.status}</strong></h1>
        <Link to="/">Go back to Home</Link>
    </div>
  )
}

export default ErrorPage