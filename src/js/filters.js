const btnsFilter = [...document.querySelectorAll('*[data-filter-btn]')];
const blocks = [...document.querySelectorAll('[data-filter-block]')];
const resetFilterBtn = document.querySelector('[data-reset="filter"]');

if (btnsFilter.length) {
  resetFilterBtn.checked = true;
  btnsFilter.forEach((btn) => btn.addEventListener('click', filterActivity));
}

if (resetFilterBtn) {
  resetFilterBtn.addEventListener('click', resetFilter);
}

function filterActivity() {
  let filter = this.getAttribute('data-filter-btn');
  visibleBlocks(filter);
}

function visibleBlocks(filter) {
  blocks.forEach(block => {
    block.setAttribute('data-vis', false);
    if (block.getAttribute('data-filter-block') === filter) {
      block.setAttribute('data-vis', true);
    }
  });
}

function resetFilter() {
  blocks.forEach(el => el.setAttribute('data-vis', ''));
}
