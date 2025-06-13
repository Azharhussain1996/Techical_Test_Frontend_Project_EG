import { useEffect } from 'react';

const ThemeLayout = () => {
  useEffect(() => {
    init();
  }, []);

  const initFullScreenListener = () => {
    const fullscreenToggle = document.querySelector('[data-toggle="fullscreen"]');
    if (fullscreenToggle) {
      fullscreenToggle.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.toggle("fullscreen-enable");

        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        } else {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
          }
        }
      });
    }
  };

  const initVerticalMenu = () => {
    const collapses = document.querySelectorAll(".navbar-nav li .collapse");
    const toggles = document.querySelectorAll(".navbar-nav li [data-bs-toggle='collapse']");

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
      });
    });

    collapses.forEach((collapse) => {
      collapse.addEventListener("show.bs.collapse", function (a) {
        const openCollapse = a.target.closest(".collapse.show");
        document.querySelectorAll(".navbar-nav .collapse.show").forEach((collapse) => {
          if (collapse !== a.target && collapse !== openCollapse) {
            new window.bootstrap.Collapse(collapse).hide(); // Use the global Bootstrap instance
          }
        });
      });
    });

    document.querySelector(".navbar-nav") &&
      document.querySelectorAll(".navbar-nav a").forEach(function (link) {
        const url = window.location.href.split(/[?#]/)[0];
        if (link.href === url) {
          link.classList.add("active");
          link.parentNode.classList.add("active");
          let parentCollapse = link.closest(".collapse");
          while (parentCollapse) {
            parentCollapse.classList.add("show");
            parentCollapse.parentElement.children[0].classList.add("active");
            parentCollapse.parentElement.children[0].setAttribute("aria-expanded", "true");
            parentCollapse = parentCollapse.parentElement.closest(".collapse");
          }
        }
      });
  };

  const initConfig = () => {
    const defaultConfig = JSON.parse(JSON.stringify(window.defaultConfig));
    const config = JSON.parse(JSON.stringify(window.config));
    setSwitchFromConfig(defaultConfig, config);
  };

  const changeMenuColor = (color) => {
    const html = document.getElementsByTagName("html")[0];
    html.setAttribute("data-menu-color", color);
    setSwitchFromConfig();
  };

  const changeMenuSize = (size, adjust = true) => {
    const html = document.getElementsByTagName("html")[0];
    html.setAttribute("data-menu-size", size);
    if (adjust) {
      setSwitchFromConfig();
    }
  };

  const changeThemeMode = (theme) => {
    const html = document.getElementsByTagName("html")[0];
    html.setAttribute("data-bs-theme", theme);
    setSwitchFromConfig();
  };

  const changeTopbarColor = (color) => {
    const html = document.getElementsByTagName("html")[0];
    html.setAttribute("data-topbar-color", color);
    setSwitchFromConfig();
  };

  const resetTheme = () => {
    const defaultConfig = JSON.parse(JSON.stringify(window.defaultConfig));
    changeMenuColor(defaultConfig.menu.color);
    changeMenuSize(defaultConfig.menu.size);
    changeThemeMode(defaultConfig.theme);
    changeTopbarColor(defaultConfig.topbar.color);
    _adjustLayout();
  };

  const initSwitchListener = () => {
    document.querySelectorAll("input[name=data-menu-color]").forEach((input) => {
      input.addEventListener("change", (e) => {
        changeMenuColor(input.value);
      });
    });

    document.querySelectorAll("input[name=data-menu-size]").forEach((input) => {
      input.addEventListener("change", (e) => {
        changeMenuSize(input.value);
      });
    });

    document.querySelectorAll("input[name=data-bs-theme]").forEach((input) => {
      input.addEventListener("change", (e) => {
        changeThemeMode(input.value);
      });
    });

    document.querySelectorAll("input[name=data-topbar-color]").forEach((input) => {
      input.addEventListener("change", (e) => {
        changeTopbarColor(input.value);
      });
    });

    const lightDarkMode = document.getElementById("light-dark-mode");
    if (lightDarkMode) {
      lightDarkMode.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-bs-theme");
        changeThemeMode(currentTheme === "light" ? "dark" : "light");
      });
    }

    const resetLayout = document.querySelector("#reset-layout");
    if (resetLayout) {
      resetLayout.addEventListener("click", () => {
        resetTheme();
      });
    }

    const toggleMenuButton = document.querySelector(".button-toggle-menu");
    if (toggleMenuButton) {
      toggleMenuButton.addEventListener("click", () => {
        const html = document.getElementsByTagName("html")[0];
        const currentSize = html.getAttribute("data-menu-size");
        if (currentSize !== "hidden") {
          if (currentSize === "condensed") {
            changeMenuSize("default", false);
          } else {
            changeMenuSize("condensed", false);
          }
        } else {
          showBackdrop();
        }
        html.classList.toggle("sidebar-enable");
      });
    }

    document.querySelectorAll(".button-sm-hover").forEach((button) => {
      button.addEventListener("click", () => {
        const menuSize = document.documentElement.getAttribute("data-menu-size");
        if (menuSize === "sm-hover-active") {
          changeMenuSize("sm-hover");
        } else {
          changeMenuSize("sm-hover-active");
        }
      });
    });
  };

  const showBackdrop = () => {
    const backdrop = document.createElement("div");
    backdrop.classList.add("offcanvas-backdrop", "fade", "show");
    document.body.appendChild(backdrop);
    document.body.style.overflow = "hidden";
    if (window.innerWidth > 1040) {
      document.body.style.paddingRight = "15px";
    }

    backdrop.addEventListener("click", () => {
      document.documentElement.classList.remove("sidebar-enable");
      document.body.removeChild(backdrop);
      document.body.style.overflow = null;
      document.body.style.paddingRight = null;
    });
  };

  const initWindowSize = () => {
    window.addEventListener("resize", _adjustLayout);
  };

  const _adjustLayout = () => {
    if (window.innerWidth <= 1140) {
      changeMenuSize("hidden", false);
    } else {
      changeMenuSize(document.documentElement.getAttribute("data-menu-size"));
    }
  };

  const setSwitchFromConfig = () => {
    sessionStorage.setItem("__RAYDAR_CONFIG__", JSON.stringify(window.config));

    document.querySelectorAll(".settings-bar input[type=radio]").forEach((input) => {
      input.checked = false;
    });

    const config = window.config;
    if (config) {
      const themeInput = document.querySelector(`input[type=radio][name=data-bs-theme][value=${config.theme}]`);
      const topbarColorInput = document.querySelector(`input[type=radio][name=data-topbar-color][value=${config.topbar.color}]`);
      const menuSizeInput = document.querySelector(`input[type=radio][name=data-menu-size][value=${config.menu.size}]`);
      const menuColorInput = document.querySelector(`input[type=radio][name=data-menu-color][value=${config.menu.color}]`);

      if (themeInput) themeInput.checked = true;
      if (topbarColorInput) topbarColorInput.checked = true;
      if (menuSizeInput) menuSizeInput.checked = true;
      if (menuColorInput) menuColorInput.checked = true;
    }
  };

  const init = () => {
    initFullScreenListener();
    initVerticalMenu();
    initConfig();
    initSwitchListener();
    initWindowSize();
    _adjustLayout();
    setSwitchFromConfig();
  };

  return null;
};

export default ThemeLayout;
