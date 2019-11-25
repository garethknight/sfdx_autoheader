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
${lineStart} Copyright (c) 2019 salesforce.com, inc.
${lineStart} All rights reserved.
${lineStart} 
${lineStart} Redistribution and use in source and binary forms, with or without
${lineStart} modification, are permitted provided that the following conditions
${lineStart} are met:
${lineStart}
${lineStart} 1. Redistributions of source code must retain the above copyright
${lineStart}    notice, this list of conditions and the following disclaimer.
${lineStart} 2. Redistributions in binary form must reproduce the above copyright
${lineStart}    notice, this list of conditions and the following disclaimer in the
${lineStart}    documentation and/or other materials provided with the distribution.
${lineStart} 3. The name of the author may not be used to endorse or promote products
${lineStart}    derived from this software without specific prior written permission.
${lineStart}
${lineStart} THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR
${lineStart} IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
${lineStart} OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
${lineStart} IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, 
${lineStart} INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
${lineStart} NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
${lineStart} DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
${lineStart} THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
${lineStart} (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
${lineStart} THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
${lineStart}
${lineStart} @File Name          : ${fileName}
${lineStart} @Description        : 
${lineStart} @Author             : ${helper.getConfiguredUsername()}
${lineStart} @Last Modified By   : ${helper.getConfiguredUsername()}
${lineStart} @Last Modified On   : ${helper.getHeaderFormattedDateTime()}
${lineStart} @Modification Log   : 
${lineStart} Ver       Date            Author      		    Modification
${lineStart} 1.0    ${helper.getHeaderFormattedDate()}   ${helper.getConfiguredUsername()}     Initial Version
${blockEnd}
`;
}
