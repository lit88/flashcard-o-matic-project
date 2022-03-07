import React from "react";
import { Link } from "react-router-dom"

function CardForm({submitHandle, changeHandle, form, doneLink, linkName, buttonName}) {
    return (
        <form onSubmit={submitHandle}>
            <div className="mb-3">
                <label htmlFor="front" class="form-label">Front</label>
                <br />
                <textarea
                    id="front"
                    class="form-control"
                    name="front"
                    onChange={changeHandle}
                    value={form.front}
                    rows="3"
                    ></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="back" class="form-label">Back</label>
                <br/>
                <textarea 
                    id="back"
                    class="form-control"
                    name="back"
                    onChange={changeHandle}
                    value={form.back}
                    rows="3"
                    ></textarea>
            </div>
            <Link to={doneLink} className="btn btn-secondary">{linkName}</Link>
            <button type="submit" className="btn btn-primary m-3">{buttonName}</button>
        </form>
    )
}

export default CardForm