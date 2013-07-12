window.addEventListener("keydown", fireOnKeypress, false);

var searchBar = null;

var searchString =  'input:not([type="hidden"]):not([type="submit"]):not([type="radio"])[title*="Search"],'+
					'input:not([type="hidden"]):not([type="submit"]):not([type="radio"])[title*="search"],'+ 
					'input:not([type="hidden"]):not([type="submit"]):not([type="radio"])[id*="Search"],'+
					'input:not([type="hidden"]):not([type="submit"]):not([type="radio"])[id*="search"],'+ 
					'input:not([type="hidden"]):not([type="submit"]):not([type="radio"])[value*="Search"],'+ 
					'input:not([type="hidden"]):not([type="submit"]):not([type="radio"])[value*="search"],'+ 
					'input:not([type="hidden"]):not([type="submit"]):not([type="radio"])[name*="Search"],'+ 
					'input:not([type="hidden"]):not([type="submit"]):not([type="radio"])[name*="search"],'+
					'input:not([type="hidden"]):not([type="submit"]):not([type="radio"])[name="q"],'+
					'input:not([type="hidden"]):not([type="submit"]):not([type="radio"])[name="query"],'+
					'input:not([type="hidden"]):not([type="submit"]):not([type="radio"])[role*="Search"],'+ 
					'input:not([type="hidden"]):not([type="submit"]):not([type="radio"])[role*="search"],'+
					'input:not([type="hidden"]):not([type="submit"]):not([type="radio"])[placeholder*="Search"],'+
					'input:not([type="hidden"]):not([type="submit"]):not([type="radio"])[placeholder*="search"],'+ 
					'input:not([type="hidden"]):not([type="submit"]):not([type="radio"])[type*="Search"],'+ 
					'input:not([type="hidden"])[type="search"]';

function fireOnKeypress() {

	if (event.metaKey && event.keyCode == "75") {

		searchBar = document.querySelectorAll(searchString);
		console.log('Found:');
		console.log(searchBar);
		if (searchBar.length === 0) {
			searchBar = document.querySelectorAll('input:not([type="hidden"])[type="text"][tabIndex="1"]');
			if (searchBar.length === 0) searchBar = document.querySelectorAll('input:not([type="hidden"])[type="text"]');
		}

		for (var i = 0; i < searchBar.length; i++) {
			searchBar.item(i).select();
			if (document.activeElement == searchBar.item(i)) {
				console.log(searchBar.item(i));
				break;
			}
		}		
	}
}









