const video = ({source, type, alt}) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12 mt-3">
          <div className="card border-0 shadow">
            <video
              src={source}
              type={type}
              alt={alt}
              controls
              controlslist="nodownload"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default video;
