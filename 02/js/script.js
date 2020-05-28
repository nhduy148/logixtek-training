window.addEventListener("DOMContentLoaded", function() {

  const tabs = [...document.querySelectorAll('.layout__tabs-item')];
  [].forEach.call(tabs, function(el) {
    el.onclick = e => {
      const items = document.querySelectorAll(".layout__item")
      const tabName = e.target.getAttribute("data-tab");
      const thisItem = document.getElementById(tabName);
      
      removeClass(items, "active")
      removeClass(tabs, "active")
      thisItem.classList.add("active")      
      e.target.classList.add("active")
    }
  });
  
})

const removeClass = (elements, className) => {
  [].forEach.call(elements, function(el) {
    el.classList.remove(className);
  });
}