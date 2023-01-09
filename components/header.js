class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Team Name</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id="NAV" class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="index.html"
                >Home</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Team Members
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="https://phillipabboud.github.io/IntroITReport1/">Phillip Abboud</a></li>
                <li><a class="dropdown-item" href="#">Stewart Altoft</a></li>
                <li><a class="dropdown-item" href="#">Samuel Gall</a></li>
                <li><a class="dropdown-item" href="https://dangoodie.github.io/assignment-1/">Daniel Gooden</a></li>
                <li><a class="dropdown-item" href="https://jamiev1992.github.io/My_Project/">Jamie Virgen</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="industry-data.html">Industry Data</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="it-work.html">IT Work</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="it-technologies.html">IT Technologies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="project-idea.html">Project Idea</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;
  }
}

customElements.define("header-component", Header);