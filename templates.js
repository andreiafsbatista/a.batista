class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav id="titlebar">
      <div class="line-below left">
        <a class="nav-link" href="index.html">Portfolio</a>
        <a class="nav-link" href="portfolio.html">Projects</a>
      </div>
      <a href="index.html">
        <img
          id="home-page-logo"
          src="assets/img/logos/logo-placeholder-image.png"
          alt="website logo"
        />
      </a>
      <div class="line-below right">
        <a class="nav-link" href="about.html">About Me</a>
        <a class="nav-link" href="mailto:andreia.fsb.am@gmail.com"
          >Contact</a
        >
      </div>
    </nav>
      `;
  }
}
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
      <div id="footer-text">
        <p>As Albert Einstein once said:</p>
        <h1>
          "Nothing happens until
          <span class="add-dark-purple">something moves.</span>"
        </h1>
        <p>Want to get in touch? Just drop me a line!</p>
        <p>
          I'm a human on my duty to a better experience of the universe and the
          world!
        </p>
        <a class="button" href="mailto:andreia.fsb.am@gmail.com"
          ><p>contact me by email</p></a
        >
      </div>
      <div id="footer-icons-and-rights">
        <div class="line-below left"></div>
        <div id="icons-container">
          <a
            href="https://www.linkedin.com/in/andreiafsbatista/"
            target="_blank"
          >
            <img
              class="footer-icon"
              src="assets/img/icons/LinkedIn.png"
              alt="website logo"
            />
          </a>
          <a href="https://www.instagram.com/rubidos.cartoon/" target="_blank">
            <img
              class="footer-icon"
              src="assets/img/icons/Instagram.png"
              alt="website logo"
            />
          </a>
        </div>
        <p><strong>&copy; 2024 Andreia B'</strong> all rights reserved</p>
        <div class="line-below right"></div>
      </div>
      `;
  }
}

customElements.define("main-nav", Nav);
customElements.define("main-footer", Footer);
