export function initNavBar() {
  const mobileShow = document.querySelector('.ifx__nav-link-wrapper.ifx__mobile-show');
  let currentContent;
  mobileShow.addEventListener('click', toggleMenu);
  window.addEventListener('resize', updateNavHeight);

  function updateNavHeight() {
    if (currentContent) {
      mobileShow.style.minHeight = currentContent.offsetHeight + "px";
    } else {
      mobileShow.style.minHeight = null;
    }
  }

  function toggleMenu(e) {
    const link = e.target && e.target.closest("A");

    if(link) {
      if(link.matches('.ifx__nav-mega-dropdown-last-layer')) {
        const navMegaDropdownMobile = document.querySelectorAll('.ifx__nav-mega-dropdown-mobile');
        const navMegaWrapper = link.closest(".ifx__nav-wrapper.open");

        navMegaDropdownMobile.forEach( function(element) {
          element.classList.remove('show');
        })

        if (navMegaWrapper) {
          navMegaWrapper.classList.remove('open');
        }

        currentContent = undefined;
        updateNavHeight();

      } else if(link.matches('.ifx__nav-mega-dropdown-next-layer')) {
        const navMegaDropdownMobile = link.nextElementSibling;
        const navMegaWrapper = link.closest(".ifx__nav-wrapper");

        if (navMegaDropdownMobile && navMegaWrapper) {
          navMegaDropdownMobile.classList.add('show');
          navMegaWrapper.classList.add('open');
          currentContent = navMegaDropdownMobile.firstElementChild;
          updateNavHeight();
        }
      }
    }
  }

  const desktopShow = document.querySelector('.ifx__nav-list');
  if (!desktopShow) {
    return
  }

  desktopShow.addEventListener('click', toggleMenuDesktop);
  desktopShow.addEventListener('focusout', toggleMenuItem);

  const dropdowns = desktopShow.childNodes;

  function toggleMenuDesktop(e) {
    const link = e.target && e.target.closest(".ifx__nav-link");

    if (!link) {
      return
    }

    const currentListItem = link.parentElement;

    dropdowns.forEach( function(element) {
      if(element !== currentListItem) {
        element.classList.remove("show");
      }
    })
    currentListItem.classList.toggle("show");
  }

  function toggleMenuItem(e) {
    const newTarget = e.relatedTarget;

    if (!desktopShow.contains(newTarget)) {
      dropdowns.forEach( function(element) {
        element.classList.remove("show");
      });
    }
  }
}
