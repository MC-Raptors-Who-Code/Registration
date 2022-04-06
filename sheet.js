const {GoogleSpreadsheet} = require('google-spreadsheet');
const creds = require('./client_secret.json')

async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet("1Lztd2aZ_jFqkdvpnMEsRunPDoo7m4mZPo_v8K04TV10");

    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    await sheet.setHeaderRow(["name", "major", "credits", "github", "about"]);
    await sheet.addRow({"name": "John Doe", "major": "CS", "credits": 5, "about": "Something"});
}

accessSpreadsheet();