import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import './index.css';
import Sdata from "./Sdata";

ReactDOM.render(
<>
  <h1 className="heading_style"> List of top 6 Netflix Series 2023 </h1>
  {Sdata.map((val) => {
    return (
      <Cards
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        links={val.links}
      />
      );
     })}
    </>,
     document.getElementById('root')
    );


    