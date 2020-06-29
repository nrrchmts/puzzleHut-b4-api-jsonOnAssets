// Jquery

function tampilkanSemuaMenu() {
	$.getJSON("assets/data/pizza.json", function (data) {
		//membaca data JSON
		// console.log(data);
		let menu = data.menu; //menghilangkan key menu
		// console.log(menu);
		$.each(menu, function (i, data) {
			$("#daftar-menu").append(
				'<div class="col-4 mb-4"><div class="card" style="width: 18rem;"><img src="assets/img/menu/' +
					data.gambar +
					'" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title">' +
					data.nama +
					'</h5><p class="card-text">Rp.' +
					data.harga +
					'</p><p class="card-text">' +
					data.deskripsi +
					".</p></div></div></div>"
			);
		}); //perulangan dalam jquery
	});
}

tampilkanSemuaMenu();

$(".nav-link").on("click", function () {
	$(".nav-link").removeClass("active");
	$(this).addClass("active");

	let kategori = $(this).html();
	$("h1").html(kategori);

	if (kategori == "All Menu") {
		$("#daftar-menu").html("");
		tampilkanSemuaMenu();
		return;
	}

	$.getJSON("assets/data/pizza.json", function (data) {
		let menu = data.menu;
		let content = "";

		$.each(menu, function (i, data) {
			if (data.kategori == kategori.toLowerCase()) {
				content +=
					'<div class="col-4 mb-4"><div class="card" style="width: 18rem;"><img src="assets/img/menu/' +
					data.gambar +
					'" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title">' +
					data.nama +
					'</h5><p class="card-text">Rp.' +
					data.harga +
					'</p><p class="card-text">' +
					data.deskripsi +
					".</p></div></div></div>";
			}
		});

		$("#daftar-menu").html(content);
	});
});
