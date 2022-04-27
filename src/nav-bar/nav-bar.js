export function initNavBar() {
  const mobileShow = document.querySelector('.ifx__nav-link-wrapper.ifx__mobile-show');
  mobileShow.addEventListener('click', toggleMenu);

  function toggleMenu(e) {
    const link = e.target && e.target.closest("A");

    if(link) {
      if(link.matches('.ifx__nav-mega-dropdown-last-layer')) {
        const navMegaDropdownMobile = document.querySelectorAll('.ifx__nav-mega-dropdown-mobile');
        navMegaDropdownMobile.forEach( function(element) {
          element.style.display = 'none';
        })

      } else if(link.matches('.ifx__nav-mega-dropdown-next-layer')) {
        const navMegaDropdownMobile = link.nextElementSibling;

        if (navMegaDropdownMobile) {
          navMegaDropdownMobile.style.display = 'block';
        }
      }
    }
  }

  const desktopShow = document.querySelector('.ifx__nav-list');
  desktopShow.addEventListener('click', toggleMenuDesktop);
  desktopShow.addEventListener('focusout', toggleMenuItem);

  function toggleMenuDesktop(e) {
    const link = e.target && e.target.closest("A");

    const currentListItem = link.parentElement;
    const AllListItems = currentListItem.parentElement.childNodes;

    AllListItems.forEach( function(element) {
      if(element !== currentListItem) {
        element.classList.remove("show");
      }
    })
    currentListItem.classList.toggle("show");
  }

  function toggleMenuItem(e) {
    const oldTarget = e.target;
    const newTarget = e.relatedTarget;

    if (!desktopShow.contains(newTarget)) {
      desktopShow.querySelectorAll(".show").forEach( function(element) {
        element.classList.remove("show");
      });

      return
    }
  }
}
