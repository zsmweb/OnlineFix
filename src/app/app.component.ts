import { Component, ViewEncapsulation, ElementRef,OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '[class.unicorn-dark-theme]': 'dark',
  },
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnDestroy{

  constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer,private router: Router) {
    mdIconRegistry
      .addSvgIcon('thumb-up',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/thumbup-icon.svg'))
      .addSvgIconSetInNamespace('core',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/core-icon-set.svg'))
      .registerFontClassAlias('fontawesome', 'fa');
    this.activeLinkIndex =
        this.tabLinks.indexOf(this.tabLinks.find(tab => router.url.indexOf(tab.link) != -1));
  }

  title = 'OnlineFix';
  dark = false;

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  // Nav bar demo
  tabLinks = [
    {label: 'Editor', link: 'oeditor'},
    {label: 'Compare', link: 'ocompare'},
    {label: 'Terminal', link: 'oterminal'},
  ];
  activeLinkIndex = 0;

  ngOnDestroy(){

  }

  // Dynamic tabs demo
  activeTabIndex = 0;
  addTabPosition = 0;
  gotoNewTabAfterAdding = false;
  createWithLongContent = false;
  dynamicTabs = [
    {
      label: 'Editor',
      type:1,
      content: '<editor-content></editor-content>'
    }, {
      label: 'Compare',
      type:2,
      content: '<compare-content></compare-content>'
    }, {
      label: 'Terminal',
      type:3,
      content: '<terminal-content></terminal-content>'
    },
  ];
  
}

@Component({
  moduleId: module.id,
  selector: 'terminal-content',
  template: '<gritty-terminal></gritty-terminal>',
})
export class TerminalContent {}


@Component({
  moduleId: module.id,
  selector: 'compare-content',
  template: 'This is the routed body of the Compare tab.',
})
export class CompareContent {}


@Component({
  moduleId: module.id,
  selector: 'editor-content',
  template: '<monaco-editor [(ngModel)]="code" [language]="language" [language_defaults]="language_defaults" [options]="monaco_options"></monaco-editor>',
})

export class EditorContent implements OnDestroy {
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';
  language: string = 'javascript';
  // Set language defaults for custom autocomplete
  language_defaults: any = {
    compilerOptions: {
      noLib: true,
      allowNonTsExtensions: true
    },
    extraLibs: [
      {
        definitions: 'declare class Facts {\n    /**\n    * Returns the next fact\n     */\n    static next():string\n }',
        definitions_name: 'filename/facts.d.ts'
      }
    ]
  };
  // Set Monaco Editor Options
  monaco_options: any = {
    lineNumbers: false,
    roundedSelection: false,
    scrollBeyondLastLine: false,
    wrappingColumn: -1,
    folding: false,
    renderLineHighlight: false,
    overviewRulerLanes: 0,
    // theme: "vs-dark",
    customPreventCarriageReturn: true,
    scrollbar: {
      vertical: 'hidden',
      horizontal: 'auto',
      useShadows: false
    }
  }

  ngOnDestroy(){

  }
}