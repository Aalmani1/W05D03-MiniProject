import axios from "axios";
import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Card } from "react-bootstrap";
import Watch from "./WatchList";
import { useSelector } from "react-redux";

function Home() {
  const state = useSelector((state) => {
    return {
      video: state.video.video,
    };
  });

  return (
    <div>
      <h4>Most Popular </h4>

      {state.video.map((element) => {
        return (
          <div className="card">
            <h3>Title : {element.snippet.title}</h3>
            <br></br>
            <iframe
              width="100%"
              src={`https://www.youtube.com/embed/${element.id.videoId}`}
            ></iframe>
            <br></br>
            <h4>Channel : {element.snippet.channelTitle}</h4>
            <br></br>
            <h6>Published At : {element.snippet.publishedAt}</h6>
            <br></br>
            <h5>Description: </h5>
            <p>{element.snippet.description}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Home;
