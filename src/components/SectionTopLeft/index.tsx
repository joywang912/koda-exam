import React from "react";
import "./sectionTopLeft.scss";

const SectionTopLeft = () => {
  return (
    <div className="section-top-left">
      <div className="section-top-left__text text-muted">
        <p className="mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius modi
          numquam quasi, vero nisi libero praesentium ratione ullam magnam
          pariatur obcaecati ea placeat eveniet corporis? Dolorem iste
          voluptatibus autem sapiente.
        </p>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolore
          neque doloribus at odit saepe, delectus quo velit? Officiis incidunt
          soluta saepe reiciendis ratione repudiandae optio ad laudantium qui
          ea.
        </p>
      </div>
      <div className="section-top-left__link">
        <a href="#">
          <i className="fas fa-angle-right text-warning"></i> Lorem ipsum dolor sit
          amet, consetetur sadipscing
        </a>
        <a href="#">
          <i className="fas fa-angle-right text-warning"></i> Sed diam nonumy eirmod
          tempor invidunt
        </a>
      </div>
    </div>
  );
};

export default SectionTopLeft;
