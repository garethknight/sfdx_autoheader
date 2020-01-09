import { workspace } from "vscode";

export default {
  apexReservedTerms: [
    "public",
    "private",
    "protected",
    "global",
    "override",
    "static",
    "webservice",
    "testMethod"
  ],

  apexAnnotationsRegex: /^\s*@\s*\D*/,

  getHeaderFormattedDateTime(): string {
    return new Date().toLocaleString("en-NZ");
  },

  getHeaderFormattedDate(): string {
    return new Date().toLocaleDateString("en-NZ");
  },

  getConfiguredUsername(): string {
    return workspace
      .getConfiguration("SFDoc")
      .get("username", "phUser@phDomain.com");
  }
};
