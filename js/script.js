$(document).ready(function () {
  // Search books by title
  $('#searchBox').on('keyup', function () {
    const query = $(this).val().toLowerCase();
    $('.book').each(function () {
      const title = $(this).data('title').toLowerCase();
      $(this).toggle(title.includes(query));
    });
  });

  // Filter books by genre
  $('#genreFilter').on('change', function () {
    const genre = $(this).val();
    $('.book').each(function () {
      if (genre === "" || $(this).data('genre') === genre) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
