import React, { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";


const EntryCard = (props) => {
  
  const {id, user_id, created_at, title, text} = props
  const navigate = useNavigate();

  const view = () => {
    navigate(`/show/${id}`);
  };
  
  return (
    <Fragment>
      <div class="card mb-5">
        <div class="card-header">{Date(created_at)}</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              {title}
            </p>
            <footer class="blockquote-footer">
              Yours Truly <cite title="Source Title">NAME HERE*</cite>
            </footer>
            <div className="button mt-5">
              <button onClick={view} type="submit" class="btn btn-secondary mr-5">
                view entry
              </button>
            </div>
          </blockquote>
        </div>
      </div>
    </Fragment>
  );
};

export default EntryCard;
