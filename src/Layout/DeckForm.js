import React from "react";
import { Link } from "react-router-dom"

function DeckForm({submitHandle, changeHandle, form, cancelLink}) {
    return (
        <form onSubmit={submitHandle}>
            <div className="mb-3">
                <label htmlFor="name" class="form-label">Name</label>
                <br />
                <input
                    id="name"
                    class="form-control"
                    type="text"
                    name="name"
                    onChange={changeHandle}
                    value={form.name}
                    />
            </div>
            <div className="mb-3">
                <label htmlFor="description" class="form-label">Description</label>
                <br/>
                <textarea 
                    id="description"
                    class="form-control"
                    name="description"
                    onChange={changeHandle}
                    value={form.description}
                    rows="3"
                    ></textarea>
            </div>
            <Link to={cancelLink} className="btn btn-secondary">Cancel</Link>
            <button type="submit" className="btn btn-primary m-3">Submit</button>
        </form>
    )

}

export default DeckForm