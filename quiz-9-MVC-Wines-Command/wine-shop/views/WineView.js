class WineView {
  static help() {
    console.log("\n");
    console.log("wine ");
    console.log("wine help");
    console.log("wine wines");
    console.log("wine add <wine name/year/type>");
    console.log("wine sell <wine_id");
    console.log("wine rename <wine_id> <wine name/year/type>");
    console.log("wine findById <wine_id");
    console.log("wine group <wine_type>");
    console.log("wine age <asc>/<desc>");
    console.log("\n");
  }

  static list(wines) {
    console.log("\nList of Wines");
    if (wines === undefined) {
      console.log(" -> data tidak ditemukan");
      return true;
    }
    wines = wines.map((wine, index) => {
      let { id, name, year, type, createdAt } = wine;
      console.log(`${index + 1}. ${name} - ${year} - ${type}`);
    });
    console.log("====================================");
  }
  static statusAdd(wines) {
    wines
      ? console.log("Data berhasil diinput")
      : console.log("Data gagal diinput");
  }
  static statusSell(wines) {
    wines
      ? console.log("Data berhasil dijual")
      : console.log("Data gagal dijual");
  }
  static statusFind(wines) {
    console.log("\n========================");
    wines
      ? console.log(`${wines[0].name} - ${wines[0].year} - ${wines[0].type}`)
      : console.log("Data tidak ditemukan");
    console.log("\n========================");
  }

  static groupType(wines) {}
}

module.exports = WineView;
