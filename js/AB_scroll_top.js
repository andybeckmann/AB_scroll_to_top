/**
 * AB_scroll_top
 * version: 1.0.0
 * 
 * scrollTop() A button that brings user to the top of the page after scrolling
 */

function scrollTop() {

	var button = document.createElement('button');
	button.id = 'scrollTop';
	button.innerHTML = "<svg version='1.1' id='scrollTopSVG' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 54 54' style='enable-background:new 0 0 54 54;' xml:space='preserve'><path d='M38,0H16C7.2,0,0,7.2,0,16v22c0,8.8,7.2,16,16,16h22c8.8,0,16-7.2,16-16V16C54,7.2,46.8,0,38,0z M43.7,36.9 c-0.8,0.8-1.9,1.3-3,1.3s-2.2-0.4-3-1.3L27,26.2L16.3,36.9c-1.7,1.7-4.4,1.7-6.1,0c-1.7-1.7-1.7-4.4,0-6.1L24,17.1 c1.7-1.7,4.4-1.7,6.1,0l13.7,13.7C45.4,32.5,45.4,35.2,43.7,36.9z'/></svg>";
	document.body.appendChild(button);

	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		button.style.display = 'block';
	} else {
		button.style.display = 'none';
	}

	window.onscroll = function () {
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			button.style.display = 'block';
		} else {
			button.style.display = 'none';
		}
	};

	button.addEventListener('click', function() {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	});
}