(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
    };
  
    refs.openMenuBtn.addEventListener("click", openMenu);
    refs.closeMenuBtn.addEventListener("click", closeMenu);
  
    function openMenu() {
      refs.menu.classList.add("is-visible");
    }
  
    function closeMenu() {
      refs.menu.classList.remove("is-visible");
    }
  })();