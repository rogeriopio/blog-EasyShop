const open_sidebar = document.querySelector('#open_sidebar');

function openModal() {
	const sidebar_wrapper = document.querySelector('#sidebar_wrapper');
	const sidebar = document.querySelector('#sidebar');

	sidebar.classList.remove('-left-80');
	sidebar.classList.add('left-0');
	sidebar_wrapper.classList.remove('opacity-0');
	sidebar_wrapper.classList.remove('invisible');
}

function closeModal(e) {
	if (e.target.id == 'sidebar_wrapper') {
		const sidebar_wrapper = document.querySelector('#sidebar_wrapper');
		const sidebar = document.querySelector('#sidebar');
		sidebar.classList.remove('left-0');
		sidebar.classList.add('-left-80');
		sidebar_wrapper.classList.add('opacity-0');
		sidebar_wrapper.classList.add('invisible');
	}
}

open_sidebar.addEventListener('click', openModal);

document.body.addEventListener('click', closeModal);
