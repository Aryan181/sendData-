"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const outputChannel = vscode.window.createOutputChannel('Send Code');
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.sendCode', () => {
        sendCodeToServer();
    }));
}
exports.activate = activate;
async function sendCodeToServer() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('No active editor!');
        return;
    }
    const code = editor.document.getText();
    outputChannel.appendLine(code);
    outputChannel.show();
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map