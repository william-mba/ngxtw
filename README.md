<div align="center">
  <a href="https://www.ngxtw.com/">
    <img src="projects/docs/assets/images/ngxtw-logo-doc.png" alt="ngxtw" height="120" />
    <h1>NGxTW</h1>
  </a>
</div>

<div align="center">
Tailwind CSS components for Angular.
<br/>
<br/>
<br/>

[![Build Status](https://dev.azure.com/ecologiciel/Lab/_apis/build/status%2Fngxtw-lib?repoName=William-Mba%2Fngxtw&branchName=master)](https://dev.azure.com/ecologiciel/Lab/_build/latest?definitionId=5&repoName=William-Mba%2Fngxtw&branchName=master)

</div>


### Motivation

The aim of this project is to provide to Angular Developers a set of beautiful, fast and reliable UI components based on Tailwind CSS as Tailwind UI does for React and Vue.

### Features

- **High quality**: Thoughtfully-crafted and well tested to ensure performance and reliability.
- **Versatile**: Ready to use and fully customizable components to rapidly build great UIs easier than ever.
- **Frictionless**: Super easy to use and integrate to your existing Angular projects.

### Installation

```bash
npm install ngxtw
```

### Usage

```typescript
// Import from ngxtw
import { ButtonComponent } from 'ngxtw';
import { DropdownComponent } from 'ngxtw';

@Component({
  standalone: true,
  imports: [
    DropdownComponent // Add to your component's imports
    ...
  ],
  // Use in your component's template
  template: `<button tw-button click="dropdown.toggle()"> Save changes </button>
    <div class="relative">
      <ul tw-dropdown #dropdown (click)="dropdown.close()" class="shadow-lg">
        <!-- Your content goes here -->
      </ul>
    </div>
  </div>`
})
export class ExampleComponent { ... }
```

### Documentation

- [Getting Started](https://www.ngxtw.com/docs/getting-started)
- [Components](https://www.ngxtw.com/docs/components)
