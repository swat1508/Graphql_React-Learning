import React from 'react'

export default function MissionKey() {
    return (
        <div className="my-3">
            <p>
                <span className="px-3 mr-2 bg-success">  </span> <span> = SUCCESS</span>
            </p>
            <p>
                <span className="px-3 mr-2 bg-danger"/> <span> = FAIL </span>
            </p>
        </div>
    )
}
