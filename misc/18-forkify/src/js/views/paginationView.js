import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
	_parentElement = document.querySelector('.pagination');

	addHandlerClick(handler) {
		this._parentElement.addEventListener('click', function(e) {
			const btn = e.target.closest('.btn--inline');
			if(!btn) return; 

			const goToPage = btn.dataset.goto;
			console.log(goToPage);

			handler();
		});
	}

	_generateMarkup() {
		const curPage = this._data.page;
		const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
		console.log(curPage)
		console.log(numPages);

		// Situation 1: Page 1 of several
		if(curPage === 1 && numPages > 1) {
			console.log('situation 1')
			console.log(`${curPage}/${numPages}`)
			return `
          		<button data-goto="${curPage + 1}"  class="btn--inline pagination__btn--next">
            		<span>${curPage + 1}</span>
            		<svg class="search__icon">
              			<use href="${icons}#icon-arrow-right"></use>
            		</svg>
          		</button>

				`;
		}

		// Situation 2: Page 1 of 1
		return ''

		// Situation 3: Intermediate page
		if(curPage < numPages) {
			console.log('situation 3')
			console.log(`${curPage}/${numPages}`)
			return `
				<button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
            		<svg class="search__icon">
              			<use href="src/img/icons.svg#icon-arrow-left"></use>
            		</svg>
            		<span>${curPage - 1}</span>
          		</button>
          		<button data-goto="${curPage + 1}"  class="btn--inline pagination__btn--next">
            		<span>${curPage - 1}</span>
            		<svg class="search__icon">
              			<use href="${icons}#icon-arrow-right"></use>
            		</svg>
          		</button>
			`;
		}

		// Situation 4: Final page
		if(curPage === numPages && numPages > 1) {
			console.log('situation 4')
			console.log(`${curPage}/${numPages}`)
			return `
          <button data-goto="${curPage - 1}"  class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
			`
		}
	}
}

export default new PaginationView();