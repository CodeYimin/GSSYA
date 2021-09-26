import { GoogleSpreadsheet, GoogleSpreadsheetRow, ServiceAccountCredentials } from "google-spreadsheet";
import credentials from './sheets_credentials.json';

class SheetsService {
  private _doc = new GoogleSpreadsheet('190wOhK22mKK0yvRwGB6KV6yaa7mD8-Al9hxtJsb6sL4');
  private _credentials: ServiceAccountCredentials;
  private _loaded: boolean = false;
  private _cacheTime: number = 30000;

  constructor(credentials: ServiceAccountCredentials) {
    this._credentials = credentials;
  }

  async getDoc() {
    if (!this._loaded) {
      await this._loadDoc();
    }

    return this._doc;
  }

  async getRowsBySheetTitle(title: string): Promise<GoogleSpreadsheetRow[]> {
    const doc = await this.getDoc();
    const sheet = doc.sheetsByTitle[title];
    const rows = await sheet.getRows();

    return rows;
  }

  private async _loadDoc() {
    await this._doc.useServiceAccountAuth(this._credentials);
    await this._doc.loadInfo();

    this._loaded = true;
    setTimeout(() => {
      this._loaded = false;
    }, this._cacheTime);
  }
  
}

const sheetsService = new SheetsService(credentials);

export default sheetsService;