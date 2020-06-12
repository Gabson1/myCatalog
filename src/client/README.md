# Folder Structure
## Role Based

Role based folder structure means that all entities, that fulfil the same role, reside under the same folder.

An easy example of this is the redux management structure:

- `Store`: Immutable (well kinda) State of the data store, includes all the app-wide needed information.
- `Reducers`: The store data manipulators, upon the dispatch of different actions, the reducers overwrite the store's information.
- `Actions`: Actions specifying the desired data manipulation.
- `Selectors`: Filter & extract small pieces of data from the store.

So a role based example of the above would look like this:

```
src/
    store/
        ClientRouter.ts
    reducers/
        users.js
    actions/
        users.js
    selectors/
        users.js
```

Under such a folder structure, no matter who I am and where I came from, I'll instantly know where to look
if I wanted, for example, to change a certain data manipulation on users and where I'd pull this information from.
Given the fact that I know how to work with redux and already understand its structure.


## Role Based+

The above example already looks better, but it's not enough; under the premise of predictable code.
Files should also indicate their role without their nesting under the folders.
So for example, if a developer were to work on a new feature for users,
he'd probably need the following files: `reducers/users.js`, `actions/users.js` etc...
In order to completely eliminate the confusion, the role of the file can be appended to the end of the file.

The above example would change to the following:

```
src/
    store/
        ClientRouter.ts
    reducers/
        users.red.js
    actions/
        users.act.js
    selectors/
        users.sel.js
    routes/
        MandatesRoute.js
    containers/
        HeaderContainer.js
        
```

### The Role Postfix Annotation

The "Role" Postfix Annotation comes in two forms.
These forms are intended to help developers predict
the content, intent and usage of a file.
 
#### 3-char prefix Annotation
Prefixing a 3-char identifier and a dot before the file extension.

Notice the short role naming for the different roles in the above example:

- `actions` == `MODULE.act.js`
- `reducers` == `MODULE.red.js`
- etc.


The 3-char prefix should be used if one or more of the rules is true:

- File exports small not-related pieces of code: `app.hks.js` includes a lot of different app level react hooks.
These hooks are all related to the general behavior of the app, but their but are decoupled within themselves.
The hooks (functions) inside `app.hks.js` work standalone, they don't need their siblings inside the file. 
- Broad & interchangeable usage: keeping the former point in mind, an action from `mandate.act.js` might end
up calling an action from `api.act.js`, a lot of different processes end up waking other processes.
As a response from that action, a saga in `app.sag.js` might be invoked, which might call another action from `mandate.act.js` and so on.
- Redux management related files should always be annotated using the `3-char prefix` role annotation. Simply because
the usage of redux management files is very broad and interchangeable by nature.

#### CamelCased Appending Annotation
Appending a filename with the Role of the file

- `Routes` == `SomeScreenNameRoute.js`
- `Views` == `SomeNameView.js`
- etc.

As a part of predictable code design and naming conventions, instanced objects
(i.e: modules that needs instancing) should reference class/module/object.
For example: `<CockpitRoute />` must have been imported from: `**/routes/CockpitRoute`

The CamelCase Appending Annotation should be used in the following scenarios:

- React Components.
- Encapsulated Services and singletons.


# Style Guidelines
## Plain css files
Just like any other JS library, ReactJs come with the standard css integration.

By creating a css file `myStyles.css` and later on importing it in a React Component file `myComponent.js`.

Example: 

```css
/* myStyles.css */

.container {
    background-color: #00254B; /* cordian dark blue */
    height: 100vh;
    width: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
}

.container .description {
    display: flex;
    font-size: 24px;
    color: white;
}
```

The React Component:

```jsx harmony
// MyComponent.js
import React from 'react';

// import css styles
import '../myStyles.css'

export default function MyComponent(props) {
  return (
    <div className="container">
      <p className="description"> My Component </p>
    </div>  
  ) 
}
```

#### Pros of this approach:

- Plain css with no overhead
- Definitions flexibility in different files
- Nesting classes from different files

#### Cons of this approach:

- Using strings to access classes (`className="container"`) can be tedious in projects with bigger code base
- Naming overrides, classes are global, having `.container` in multiple files will override the definition of the style,
which raises the chances of weird and broken styles
- css styles are scattered all around the project, making it hard to maintain. 

### 1. Inline css in JS code
The practice of creating css styles written in plain js

Example:

```jsx harmony
import React from 'react';

// js styles
const styles = {
  container: {
   backgroundColor: '#00254B',
   height: '100vh',
   width: '100vh',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
  },
  description: {
    display: 'flex',
    fontSize: '24px',
    color: 'white',
  },
};

export default function MyComponent(props) {
  return (
    <div style={styles.container}>
      <p style={styles.description}> My Component </p>
      <p style={{ ...styles.description,  margin: '4px' }}> My Margin </p>
    </div>  
  )
}
```
#### Pros of this approach:

- Using js to write styles allows dynamic style changes, based on different events, one could simply change
the style object in order to manipulate the layout, look and feel of the components
- That dynamic approach could with a little bit more effort, be made to allow theming, and could be made remotely editable.
- No need for css files.
- No need for css inheritance

### Cons of this approach:
- Some of the Pros for this approach are also it's biggest flaw, using JS styles eliminates the css inheritance ability.
Which is not that bad in the best case scenario, but in the worst case scenario, you end up using a library
the uses plain css, in which case some styles will get higher priority to the styles we inject.
Rendering this solution useless.
- Js Styles might be great for the simple stuff, like background color, simple flex layout etc;
but once you need more, you will end up in a JS strings of hell, how do you define a css animation with JS styles?
How do you support media and different browsers? that's right... you don't... css animations are out of the questions
and different browsers integration must then be handled on the JS level (i.e: `if (browser.supportsThis) style = x; else style = y`)
- Using JS styles has very limited support for the different values in css, and forces us to use strings for the most part
here is an example to a very ugly JS box-show class definition: `boxShadow: '0 2px 4px 0 rgba(0,0,0,0.20)'`.
Yes, you can do that, but why would you want to?



Technically both solution could work depending on the need of a project, but to understand the idea behind the solution.
lets look at the ReactJS Realm for a bit.


## Web Apps in the ReactJS and JSX Realm 

One of the major changes ReactJS has brought web apps and web projects, is the amazing ability to decouple the UI from the Business logic.
Until React came along, we all used different annoying libraries that integrated with the HTML dom and tried to make it easier for developer
to write reusable code.
But the problem always remained the same, end the end, all of these libraries needed to have a some sort of a binded HTML files, upon which
the code manipulations would end up occurring.
The bigger the app got, the more HTML files a project would have.

HTML files are messy, working with them is no fun to say the least, the amount of overhead needed to display or hide
an element with angularJs for example, is really tedious in comparision to conditional rendering in React.


### JSX
 
The wonders of JSX, finally allowed a real decoupled solution for views and logic in the web apps Realm.
Writing JSX enables us to encapsulate different UI behaviors into small components, in order to be used in other components.
And while JSX is decoupled and great, the next necessary question is "if the UI logic is decoupled, why aren't css/styles?"

Good question! this brings me to the Real Solution.


## The wonders of webpack and Css Modules

Having webpack build and require the files for us, allows for a lot of flexibility, specially by transpiling and manipulating different files and syntax.
Among others, this allows for the existence of Css modules.


### CSS modules

css modules are plain css files for the most part, they are identified by prepending `.module` to the `.css` file extension: `myStyles.module.css`.
css modules have a few exceptions to a normal file the best of which, is that their scope is "local" by default.
by local, it means that a style definition from one `.module.css` file, does not affect another css file by default.

consider the following scenario:

```css
/* styles1.module.css */
.container {
    /* container definitions */
}

.container .contentView {
    /* contentView definitions */
}

.container .contentView .descriptionText {
    /* descriptionText definitions */
}
```

```css
/* styles2.module.css */
.container {
    /* container definitions */
}

.container .contentView {
    /* contentView definitions */
}

.container .contentView .descriptionText {
    /* descriptionText definitions */
}
```
Under Css Modules, these two files will never collide or override each others, as webpack will automatically append the file name and a hash
to each of these classes (this can be changed through different webpack configurations).

This means, the following files will end up looking like this in the rendered HTML page:

```html
<head>...</head>
<body>
    ...
     <div class="styles1_container_[SOME_HASH]">
        <div class="styles1_contentView_[SOME_HASH]">
            <p class="styles1_descriptionText_[SOME_HASH]"> My Text</p>
        </div>
    </div>
    <div class="styles2_container_[SOME_HASH]">
        <div class="styles2_contentView_[SOME_HASH]">
            <p class="styles2_descriptionText_[SOME_HASH]">My Text 2</p>
        </div>
    </div>
    ...
</body>
```

This behavior allows complete encapsulation of css classes:
- No more conflicts.
- Explicit dependencies.
- No global scope.



### No More ClassName Strings
Another beautiful thing about css modules, is their integration with the `.js` files

The JSX code of the above example would look like this:

```jsx harmony
// ... 
import styles1 from './styles1.module.css'
import styles2 from './styles2.module.css'
// ...
return (
  <div>
     <div className={styles1.container}>
        <div className={styles1.contentView}>
            <p className={styles1.descriptionText}> My Text</p>
        </div>
    </div>
     <div className={styles2.container}>
        <div className={styles2.contentView}>
            <p className={styles2.descriptionText}> My Text 2</p>
         </div>
     </div>
  </div>
)
// ...
```

No more strings classes, no more implicit dependencies on classes that "are supposed to be there".


#### Global Scope and external dependencies 

Of course in times of need, one might still need to override some different cascading selectors,
luckily in that case, one can always use the `:global` keyword in the css modules, to switch to the global scope!
(it basically like var privacy management, the `:global` being `public`).
The best example for this is trying to override a style definition of the "React Semantic" UI library that we are using.

A React Semantics element with the following defined values:

```css
.semantic .ui .button {
    /* css code */
}
```
```jsx harmony
// ...
import { Button } from 'semantic-ui-react';
// ...
return (<Button />);
// ...
```
```html
    ...
    <button class="semantic ui button">
    ...
```

will **NOT** be overriding by the following:

```css
/* styles.module.css */
.appButton {
    background-color: red;
}
```  
```jsx harmony
// ... 
  return (<Button className={styles.appButton} />);
// ...
```

because the semantic selector have a higher priority due to their nesting.

In that case, we'll have to use the global scope selector in order to reference the react-semantic classes.
Such css code will look like this:

```css
:global(.semantic .ui .button).appButton {
    background-color: red;
}
``` 

This tells webpack to treat the classes `.semantic .ui .button` as global classes, and append the local `.appButton`.
This will successfully override the values of the `react-semantic` library while keeping the override local to the scope of this styles file. 


### Css modules composition

Css modules also allow inheritance in the form composition:

```css
.className {
  color: green;
  background: red;
}

.otherClassName {
  composes: className;
  color: yellow;
}
```

Although this has great potential We will **NOT** be using this feature because of it's limits and confusion.
The `composes` keyword only works on single selector classes, meaning the following code:

```css

.className {
    color: green;
  background: red;
}

.nested .view {
   /* Throws an Error */
   composes: className;
}
```

Will throw a webpack error:
`Error: composition is only allowed when selector is single`

So the need to constantly override `react-semantic` css rules, kills this option for us.

## Naming conventions
Variable naming and files structure

## Case
Short version: camelCased class names.


#### Why?
because using camelCase allows the direct access of the variables with the `js` dot syntax `styles.myButton` vs `styles['my-button']`.


## Style files code design

With ideas of encapsulation in mind, it is important to also keep the a styles naming structures predictable.
The more files look the same, the clearer it is for developers to better and faster understand what to search, what to debug and what to change.

- `container` semantic: the outer layout component, used to gather multiple contentViews.
- `contentView` semantic: inner layout component, used to wrap different views to allow for better padding and margins management.


Under that premise, all css files should start with the following structure:

- containers
    - content Views
        - views
        - inputs
        - buttons
        - etc.

an example of such a file looks like this:

```css
/* AppButton */
.container {

}

.container .contentView {

}

.container .contentView .appButton {

}

.container .contentView .appButton .text {

}
```


## Folder Structure

All css files should represent the outer **role** based folder structure.

```
./src/
---- views/
-------- AppButton.js
---- routes/
---- containers/
---- popups/
---- styles/
-------- views/
------------ AppButton.module.css
-------- routes/
-------- containers/
-------- popups/
```


## JSX Usage

All css modules should be imported as `import styles from '../styles/ROLE/FILE_NAME.module.css`

Example: 
```jsx harmony
// src/views/AppButton.js

// ... 
import styles from '../styles/views/AppButton.module.css'

// ...
return (
  <div className={styles.container}>
    <div className={styles.contentView}>
      <button className={styles.appButton}>
          <p className={styles.text}>{props.title}</p>
      </button>  
    </div>
  </div>
)
```

## Theming

Theming in the project should be strictly used via CSS [var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var) syntax.

Project contains different theme files under `src/client/src/styles/themes`.

These files define custom property `var()`s.

These theme files are injected to the outer `testApp.js` that wraps all the components in the project.
And injected to the different **popup** components, because their scope is different of that of the `testApp.js`.

The Theme files are CSS module files (i.e: `Theme1.module.css`)
They contain one class called `.appColors` which defines all the theme related values needed for the project.

The Theme class `.appColor` is injected like a regular CSS module `<div className={style.appColors}>...</div>`.

After that the different defined vars will be accessible in all the CSS modules

Example of a theme file:

```css
.appColors {
    --primary: #06B8F4;
    --primary-hue1: #0067A2;
    --primary-hue2: #00254B;
    --primary-hue3: #787878;
    --title-primary: #06B8F4;
    --title-alt: #FFFFFF;
    --caption:  #000000;
    --text-primary: rgba(0,0,0,.87);
    --text-alt: #FFFFFF;
    --text-alt2: #06153F;
    --action-enabled: #06B8F4;
    --action-disabled: #E0E1E2;
    --action-title: #00254D;
    --action-title-alt: rgba(0, 0, 0, 0.6);
    --background-primary: #FFFFFF;
    --background-primary-hue1: rgb(245, 245, 245);
    --background-primary-hue2: #ACAFB9; /* rgb(172, 175, 185) */
    --background-primary-hue3: #06153F;
    --background-primary-hue4: #06B8F4;
    --background-primary-hue5: #F5F5F5;
    --background-primary-hue6: #979797;
    --error: #db2828;
    --error-pale: #ffe8e6;
    --success: #1ebc30;
    --success-pale: #e5f9e7;
    --warning-bg: #fff8db;
    --warning-text: #b58105;
    --subtle-action: #494949; /* rgb(73, 73, 73) */
}

```

Theme File Usage:
```css
.myStyle {
    color: var(--title-primary);
}
```

The values of the theme files still need a better definition of the available colors and in the future
other global values (padding margin, font size etc).


## Inline JS styles

Should be avoided 90% of the times, although in some minor cases of one-liners 
(dump view/ label, etc.)   
