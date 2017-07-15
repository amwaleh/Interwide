import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Style from "../styles/testimony.css";

export const Person = ({ details }) => (
  <Grid.Column>
    <div className={Style.testimonial}>
      <div className={Style.quote}>
        <p>{details.Detail} </p>
      </div>
      <div className={Style.student}>
        <div className={Style.photo}>
          <img src={require(`../assets/${details.image}`)} />
        </div>
        <p>{details.Name}</p>
        <p>{details.Company}</p>
      </div>
    </div>
  </Grid.Column>
);

const Testimony = ({ testimonies }) => (
  <Grid columns={2}>
    {testimonies.map((s, i) => <Person key={i} details={s} />)}

  </Grid>
);

export default Testimony;
