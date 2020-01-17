import React from "react";

class Artwork extends React.Component {
  render() {
    return (
      <ul class="artwork">
        <h2>One book two story PRIESTESS AND SHADOWMANCER/TECHNOGHOST</h2>
        <p class="Resumer_Priestess">
          The priestess, champion of light, protect the world from the agents of
          ruin and chaos. <br />A disturbance on the magical plane has drawn her
          to a small village on the russian coast where a sinister foe from her
          past awaits.
        </p>
        <li>
          <img
            class="Priestess_image"
            src="https://scontent.fltn2-1.fna.fbcdn.net/v/t1.0-9/43443955_1868129619968505_8034180443966275584_o.jpg?_nc_cat=107&_nc_ohc=y_DP7UjApgoAQm-G-oBeB0OR-o0zYFNrkN98WiCQcHhseUMR-PmZtqNmw&_nc_ht=scontent.fltn2-1.fna&oh=563400b1106148e39ed15ef3ecfe16ed&oe=5E673D70"
            alt="prietess"
          />
        </li>
        <li>
          <p class="Resumer_Shadowmancer">
            Crimebusting super duo shadowmancer and technoghost are on on the
            trail of a secret crminal organisation with possible designs <br />{" "}
            on world domination. <br />
            <br />
            Huang a chinese information broker might have the information they
            need to finally catch their quarry. The only problems is, to get{" "}
            <br /> to Huang they need to go through an army of cyborgs.
          </p>
          <img
            class="Shadowmancer_image"
            src="https://scontent.fltn2-1.fna.fbcdn.net/v/t1.0-9/67658896_2316151695166293_5173182902808084480_o.jpg?_nc_cat=111&_nc_ohc=aS-h9AR5mP4AQlE54Z-QkQ_aIezGGPadGFIxpdrC-jptBSQSC4-Y9KWhw&_nc_ht=scontent.fltn2-1.fna&oh=14cdcb3516cf1310b1ea238f3141424b&oe=5E79F9AD"
            alt="priete"
          />
        </li>
      </ul>
    );
  }
}

export default Artwork;
