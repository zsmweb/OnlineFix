import {Routes} from '@angular/router';

import {TerminalContent, CompareContent, EditorContent} from './app.component';

export const TABS_DEMO_ROUTES: Routes = [
  {path: '', redirectTo: 'oeditor', pathMatch: 'full'},
  {path: 'oterminal', component: TerminalContent},
  {path: 'ocompare', component: CompareContent},
  {path: 'oeditor', component: EditorContent},
];
