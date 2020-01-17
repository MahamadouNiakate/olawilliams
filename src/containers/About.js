import React from "react";
import ProfilOla from "../image/profil_photo.jpg";
import Profil from "../containers/Profil";

class About extends React.Component {
  render() {
    return (
      <div class="photoDescription">
        <div class="photo_Profil">
          <Profil url={ProfilOla} />
        </div>
        <div class="description">
          <i class="far fa-grin-beam"></i>
          <h3 class="Hello">Hello</h3>
          <p class="description_texte">
            We all love superheroes right? Men and women in tightly fitting
            colourful costumes risking their lives to save the innocents who
            have no power to protect themselves. But sometimes I wonder is it
            necessary for Mr. Good guy to tear up the city to prevent Mr. Bad
            Guy from getting away with a bag of money. Surely the bank is
            insured and the cost of property damage far outweigh however much
            Mr. Bad guy could carry off. Still though heroes are useful for
            those end of the world events that occur almost every week. Imagine
            a world where all the greatest superheroes suddenly vanish. You can
            imagine what kind of chaos that would cause. In a week they’ll all
            be enslaved by aliens. Well what if the reality is completely
            different. Most of Earth's heroes vanish and instead of pandemonium
            the world is experiencing its most peaceful period yet. We’re the
            heroes responsible for all the chaos? Did we just no longer need
            them? Or is there a more sinister answer?
          </p>
        </div>
      </div>
    );
  }
}

export default About;
