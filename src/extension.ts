import * as vscode from 'vscode';

const outputChannel = vscode.window.createOutputChannel('Send Code');

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.sendCode', () => {
      sendCodeToServer();
    })
  );
}

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

export function deactivate() {}