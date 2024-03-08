import "./index.scss";

export const CardSkeleton = () => {

  return (
    <div className="content-card-template content-card-skeleton">
      <div className="grid-skeleton">
        <div className={`content-skeleton`} />
        <div className={`content-skeleton`} />
        <div className={`content-skeleton`} />
        <div className={`content-skeleton`} />
        <div className={`content-skeleton`} />
      </div>
      <div className="card-template-description" >
        <p>Loading Skeleton</p>
        <p>
          Enhancing User Experience on the Platform through Visual Feedback in API Requests.
        </p>
      </div >
    </div >
  );
};
