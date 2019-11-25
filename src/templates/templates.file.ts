import helper from "../extension/documenter.helper";

/**
 * Generates and returns a file header, based on the language of the current file,
 * its name and the user/workspace SFDoc settings.
 * @param languageId VSCode language identifier for the current file
 * @param fileName Name of the current file
 */
export function getFileHeaderFromTemplate(
  languageId: string,
  fileName: string | undefined
) {
  let blockStart, lineStart, blockEnd;

  if (languageId === "apex" || languageId === "javascript") {
    blockStart = "/**";
    lineStart = " *";
    blockEnd = "**/";
  } else if (languageId === "html" || languageId === "visualforce") {
    blockStart = "<!--";
    lineStart = " ";
    blockEnd = "-->";
  }

  return `${blockStart}
${lineStart} @File Name          : ${fileName}
${lineStart} @Description        : 
${lineStart} @Author             : ${helper.getConfiguredUsername()}
${lineStart} @Last Modified By   : ${helper.getConfiguredUsername()}
${lineStart} @Last Modified On   : ${helper.getHeaderFormattedDateTime()}
${lineStart} @Disclaimer         : ${helper.getDisclaimer()}
${lineStart} @Modification Log   : 
${lineStart} Ver       Date            Author      		    Modification
${lineStart} 1.0    ${helper.getHeaderFormattedDate()}   ${helper.getConfiguredUsername()}     Initial Version
${blockEnd}
`;
}