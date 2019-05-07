import { Component } from '@angular/core';
import { FileSystemProvider } from 'ngx-filemanager-core';
import {
  FileManagerConfig,
  FileSystemStub
} from 'ngx-filemanager-client-firebase';
import { $users, $groups } from './users-factory';

@Component({
  selector: 'app-test-blank',
  template: `
    <h2>Test Blank</h2>
    <div>
      <ngx-filemanager [config]="config" [fileSystem]="blankFileSystem">
      </ngx-filemanager>
    </div>
  `
})
export class AppTestStubFilesystemComponent {
  public blankFileSystem: FileSystemProvider = new FileSystemStub();
  public config: FileManagerConfig = {
    virtualRoot: '/subfolder',
    users: $users,
    groups: $groups
  };
}
