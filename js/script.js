$(document).ready(function () {
  $('#searchBox').on('keyup', function () {
    let query = $(this).val().toLowerCase();
    $('.book').each(function () {
      const title = $(this).data('title').toLowerCase();
      $(this).toggle(title.includes(query));
    });
  });

  $('#genreFilter').on('change', function () {
    let genre = $(this).val();
    $('.book').each(function () {
      if (genre === "" || $(this).data('genre') === genre) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
