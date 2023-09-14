$(".search-botton").on("click", function () {
  $.ajax({
    url:
      `http://www.omdbapi.com/?apikey=72224061&s=` + $(".input-keyword").val(),
    success: (result) => {
      const movies = result.Search;
      let cards = ``;
      movies.forEach((x) => {
        cards += showCard(x);
      });
      $(".movie-container").html(cards);

      // untuk klik tombol detail
      $(".modal-detail-botton").on("click", function () {
        console.log($(this).data("imdbid"));
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=72224061&i=" +
            $(this).data("imdbid"),
          success: (m) => {
            console.log(m);
            const movieDetail = detailMovie(m);
            $(".modal-body").html(movieDetail);
          },
          error: (err) => {
            console.log(err.responseText);
          },
        });
      });
    },
    error: (err) => {
      console.log(err.responseText);
    },
  });
});

function showCard(x) {
  return `<div class="col-md-3 my-3">
        <div class="card">
            <img src="${x.Poster}" class="card-img-top" />
            <div class="card-body">
                <h5 class="card-title">${x.Title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${x.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-botton" data-bs-toggle="modal"
                data-bs-target="#movieDetailModal" data-imdbid="${x.imdbID}">Show Detail</a>
            </div>
        </div>
        </div>`;
}

function detailMovie(m) {
  return `<div class="container-fluid">
                <div class="row">
                <div class="col-md-3">
                    <img src="${m.Poster}" class="img-fluid"></img>
                </div>
                <div class="col-md">
                    <ul class="list-group">
                    <li class="list-group-item"><h4> <strong>${m.Title}</strong> (${m.Year})</h4></li>
                    <li class="list-group-item"><strong>Released: </strong>${m.Released}</li>
                    <li class="list-group-item"><strong>Rated: </strong>${m.Rated}</li>
                    <li class="list-group-item"><strong>Ators: </strong>${m.Actors}</li>
                    <li class="list-group-item"><strong>Genre: </strong>${m.Genre}</li>
                    <li class="list-group-item"><strong>Plot: </strong><br>${m.Plot}</li>
                    </ul>
                </div>
                </div>
            </div>`;
}
