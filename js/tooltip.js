document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
		el.tooltip = new bootstrap.Tooltip(el)
	})
})
