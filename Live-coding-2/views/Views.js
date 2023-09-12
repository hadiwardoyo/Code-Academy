class Views {
  static help(params) {
    let data = params[0];
    if (data === undefined) {
      console.log(`-- Guest mode --`);
      console.log("================================");
      console.log("node index help");
      console.log("node index login <username> <password>");
      console.log("\n");
    } else if (data.role === "admin") {
      console.log(`-- ${data.role} mode --`);
      console.log("================================");
      console.log("node index help");
      console.log("node index show");
      console.log("node index add <role> <username>");
      console.log("node index changePwd <password");
      console.log("node index delete <id>");
      console.log("node index update <id> <username>");
      console.log("node index logout");
      console.log("\n");
    } else {
      console.log(`-- ${data.role} mode --`);
      console.log("================================");
      console.log("node index help");
      console.log("node index artwork");
      console.log("node index create <name> <price>");
      console.log("node index changePwd <password");
      console.log("node index remove <id>");
      console.log("node index edit <id> <name> <price>");
      console.log("node index logout");
    }
  }

  static show(data, role, name) {
    if (role === "admin") {
      console.log("================================");
      data.forEach((element) => {
        console.log(`${element.id}. ${element.username} - "${element.role}"`);
      });
    } else {
      data = data.filter((element) => element.artist === name);
      console.log("================================");
      data.forEach((element) => {
        console.log(
          `${element.id}. ${element.name} - Rp${element.price} - ${element.type} `
        );
      });
    }
  }

  static message(msg) {
    console.log("================================");
    console.log(msg);
    console.log("================================");
  }
}

module.exports = Views;
