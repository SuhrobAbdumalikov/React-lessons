function ErrorBoundry() {
  return (
    <div>
      <h2 className="text-warning">Sorry! you encountered Error!!!</h2>
      <p className="text-danger">
        Something went wrong please try again or connect call manager!
      </p>
    </div>
  );
}

export default ErrorBoundry;
