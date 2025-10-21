// // src/modules/wedding/weddingSheet.ts
// import { Injectable } from "@nestjs/common";
// import { google, sheets_v4 } from "googleapis";
// import * as fs from "fs";
// import * as path from "path";

// @Injectable()
// export class GoogleSheetsService {
//   private readonly sheets: sheets_v4.Sheets;

//   constructor() {
//     // Try common locations for the key file
//     const possiblePaths = [
//       // Production / build output (copied by nest-cli)
//       path.join(process.cwd(), "assets", "google-sheets-key.json"),
//       // Development (direct from src)
//       path.join(process.cwd(), "src", "assets", "google-sheets-key.json"),
//     ];

//     let keyfilePath: string | null = null;
//     for (const p of possiblePaths) {
//       if (fs.existsSync(p)) {
//         keyfilePath = p;
//         break;
//       }
//     }

//     if (!keyfilePath) {
//       throw new Error(
//         `Google Sheets key file not found. Searched in:\n${possiblePaths.join("\n")}`,
//       );
//     }

//     const keys = JSON.parse(fs.readFileSync(keyfilePath, "utf8"));

//     const auth = new google.auth.GoogleAuth({
//       credentials: keys,
//       scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//     });

//     this.sheets = google.sheets({ version: "v4", auth });
//   }

//   async appendRow(spreadsheetId: string, range: string, values: string[][]) {
//     await this.sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range,
//       valueInputOption: "RAW",
//       requestBody: { values },
//     });
//   }
// }

// src/modules/wedding/weddingSheet.ts
import { Injectable } from "@nestjs/common";
import { google, sheets_v4 } from "googleapis";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class GoogleSheetsService {
  private readonly sheets: sheets_v4.Sheets;

  constructor(private readonly configService: ConfigService) {
    const serviceAccountJson = this.configService.get<string>(
      "GOOGLE_SERVICE_ACCOUNT_JSON",
    );

    if (!serviceAccountJson) {
      throw new Error(
        "GOOGLE_SERVICE_ACCOUNT_JSON environment variable is required",
      );
    }

    const keys = JSON.parse(serviceAccountJson);

    const auth = new google.auth.GoogleAuth({
      credentials: keys,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"], // ✅ no extra spaces
    });

    this.sheets = google.sheets({ version: "v4", auth });
  }

  async appendRow(spreadsheetId: string, range: string, values: string[][]) {
    await this.sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: { values },
    });
  }
}
