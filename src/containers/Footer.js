import React from "react";
import twitter from "../image/twitter.jpg";
import facebook from "../image/facebook.jpg";
import instagram from "../image/instagram.jpg";
import tumblr from "../image/tumblr.jpg";
import Logo from "../containers/Logo";

class Footer extends React.Component {
  render() {
    return (
      <div class="logo_footer">
        <p class="WebsiteMade">&copy;Website made by Mahamadou Niakaté 2020</p>
        <div class="logo_footer_image">
          <div class="twitter_footer">
            <a class="linkTwitter" href=" https://twitter.com/AgogeComics">
              <Logo class="image_footer" url={twitter} />
            </a>
          </div>
          <div class="twitter_facebook">
            <a href="https://www.facebook.com/chaoticgoodcomic/">
              <Logo url={facebook} />
            </a>
          </div>
          <div class="twitter_instagram">
            <a href="https://www.instagram.com/agogecomics/">
              <Logo url={instagram} />
            </a>
          </div>
          <div class="twitter_tumblr">
            <a href="https://www.tumblr.com/blog/agogecomics">
              <Logo url={tumblr} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
