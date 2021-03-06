# SFDX Autoheader ~ Alpha



[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


## **Important**

### Based on ️️☁️ Salesforce Documenter ~ Beta ☁️

### _This extension depends on the official [Salesforce Extensions for VSCode](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode) for language support._

# Summary
This project was extended by Gareth in order to insert standard Salesforce SE Disclaimer, please see below for local packaging and install instructions

Salesforce Documenter aims at facilitating proper and structured code documenting for Salesforce-related files, by automating related tasks such as File Header Insertion & Update, as well as Method Header insertion.

Salesforce Documenter can be adopted as a project-wide and/or team-wide standard, in an effort to encourage and eventually enforce proper code documenting.

Through these means, code becomes easier to understand, maintain, and evolve.

# Local Packing and Install Instructions
1. Update package.json file with new version number
2. run vsce package in the local project directory
3. run code --install-extension ".vsix file name" to install the extension locally


# Features

- Add a method header to any Apex method, with JavaDoc-Like tags to be completed with the method's and contextual details

![Method Header Demo](https://github.com/HugoOM/sfdx_autoheader/blob/master/images/Instructions_MethodHeader.gif?raw=true)

- Add/Update a header to any Salesforce file (Apex, Visualforce, Aura, LWC, JavaScript)

![File Header Demo](https://github.com/HugoOM/sfdx_autoheader/blob/master/images/Instructions_FileHeader.gif?raw=true)

# Commands

| Command                            | Description                                                                                                     | Applies To                          |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| SFDoc: Generate Apex Method Header | Place cursor on the first line of a method declaration. Insert a method header based on the method's signature. | Apex Methods                        |
| SFDoc: Insert File Header          | Insert a file header at the top of the current file, if it doesn't already include one.                         | Apex, Visualforce, HTML, JavaScript |

# Settings

| Property                                | Description                                                                              |
| --------------------------------------- | ---------------------------------------------------------------------------------------- |
| SFDoc.username                          | Username that will appear in File and Method headers.                                    |
| SFDoc.EnableForApex                     | Enable automatic on-save file header insertion and update for Apex classes               |
| SFDoc.EnableForVisualforce              | Enable automatic on-save file header insertion and update for Visualforce pages          |
| SFDoc.EnableForLightningMarkup          | Enable automatic on-save file header insertion and update for Lightning Markup files     |
| SFDoc.EnableForLightningJavascript      | Enable automatic on-save file header insertion and update for Lightning JavaScript files |
| SFDoc.IncludParameterTypeInMethodHeader | Include Param Types as well as name in method header                                     |
