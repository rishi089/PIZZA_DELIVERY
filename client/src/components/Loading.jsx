import React from "react";

export default function Loading() {
  return (
    <div className="text-center">
      <div
        className="spinner-grow text-primary"
        role="status"
        style={{ height: "50px", width: "50px", marginTop: "100px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow text-secondary"
        role="status"
        style={{ height: "50px", width: "50px", marginTop: "100px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow text-success"
        role="status"
        style={{ height: "50px", width: "50px", marginTop: "100px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow text-danger"
        role="status"
        style={{ height: "50px", width: "50px", marginTop: "100px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow text-warning"
        role="status"
        style={{ height: "50px", width: "50px", marginTop: "100px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow text-info"
        role="status"
        style={{ height: "50px", width: "50px", marginTop: "100px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
