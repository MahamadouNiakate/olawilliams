import React from "react";
import letter1 from "../image/contact.jpg";
import Letter from "../containers/Letter";
import enveloppe from "../image/mail.jpg";
import twitter from "../image/twitter.jpg";
import facebook from "../image/facebook.jpg";
import instagram from "../image/instagram.jpg";
import tumblr from "../image/tumblr.jpg";
import Text from "../containers/Text";
import LogoContact from "../containers/LogoContact";

class Contact extends React.Component {
  render() {
    return (
      <div class="T_Logo">
        <Letter url={letter1} />
        <div class="Logos">
          <div class="mail">
            <a href="mailto:okiwilliamsc@hotmail.com">
              <LogoContact url={enveloppe} />
            </a>
            <div class="texte1">
              <Text label="okiwilliamsc@hotmail.com" />
            </div>
          </div>

          <div class="twitter">
            <a href=" https://twitter.com/AgogeComics">
              <LogoContact url={twitter} />
            </a>
            <Text class="texte" label="Twitter" />
          </div>

          <div class="facebook">
            <a href="https://www.facebook.com/chaoticgoodcomic/">
              <LogoContact url={facebook} />
            </a>
            <Text class="texte" label="Facebook" />
          </div>

          <div class="instagram">
            <a href="https://www.instagram.com/agogecomics/">
              <LogoContact url={instagram} />
            </a>
            <Text class="texte" label="Instagram" />
          </div>

          <div class="tumblr">
            <a href="https://www.tumblr.com/blog/agogecomics">
              <LogoContact url={tumblr} />
            </a>
            <Text class="texte" label="Tumblr" />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
