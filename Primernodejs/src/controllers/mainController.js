const path = require('path');


class MainController {
  // Renderizar la página de registro
  getMainPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  };

}

module.exports = new MainController();