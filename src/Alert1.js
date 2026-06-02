function Alert1(props) {
  return (
    <>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.msg}</strong>

          <button
            type="button"
            className="btn-close"
            onClick={props.close}
            aria-label="Close"
          ></button>
        </div>
      )}
    </>
  );
}

export default Alert1;