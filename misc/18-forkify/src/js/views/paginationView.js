import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
	_parentElement = document.querySelector('.pagination');

	addHandlerClick(handler) {
		this._parentElement.addEventListener('click', function(e) {
			const btn = e.target.closest('.btn--inline');
			if(!btn) return; 

			const goToPage = +btn.dataset.goto;
			handler(goToPage);
		});
	}

	_generateMarkup() {
		const curPage = this._data.page;
		const numPages = Math.ceil(
			this._data.results.length / this._data.resultsPerPage
		);

		// Situation 1: Page 1 of several
		if(curPage === 1 && numPages > 1) {
			return `
          		<button data-goto="${
          			curPage + 1
          		}"  class="btn--inline pagination__btn--next">
            		<span>Page ${curPage + 1}</span>
            		<svg class="search__icon">
              			<use href="${icons}#icon-arrow-right"></use>
            		</svg>
          		</button>

				`;
			}
		// Situation 2: Intermediate page
		if(curPage < numPages) {
			console.log('situation 3')
			console.log(`${curPage}/${numPages}`)
			return `
				<button data-goto="${
					curPage - 1
				}" class="btn--inline pagination__btn--prev">
            		<svg class="search__icon">
              			<use href="src/img/icons.svg#icon-arrow-left"></use>
            		</svg>
            		<span>${curPage - 1}</span>
        </button>
     		<button data-goto="${
     			curPage + 1
     		}"  class="btn--inline pagination__btn--next">
            		<span>${curPage + 1}</span>
            		<svg class="search__icon">
              			<use href="${icons}#icon-arrow-right"></use>
            		</svg>
          		</button>
			`;
		}

		// Situation 3: Final page
		if(curPage === numPages && numPages > 1) {
			console.log('situation 4')
			console.log(`${curPage}/${numPages}`)
			return `
          <button data-goto="${
          	curPage - 1
          }"  class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
			`;
		}


		// Situation 4: Page 1 of 1
		return ''

	}
}

export default new PaginationView();