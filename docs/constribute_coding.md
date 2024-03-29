# Contribute by CODING :memo:

> :exclamation: :exclamation: **this is a draft**  !
> it aims to help **me** start on a good base
> and to know my own guidelines
> **before starting the project**

> as long as there is no main README,
> i am talking to me here


> inspired by [atom editor styleguides](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)


## Git

> Git is the heart **beat** of a project,
> so let's not suffer from ...
> [arrhythmia](https://en.wikipedia.org/wiki/Arrhythmia) :laughing:

### Git add . (and commit frequency)

There will be NO **git add .**   
`git add path/to/file.ext` is [better](findAnArticle)

There will be **as many commits as you can make**.   
*one can write a lot in 10 minutes*

if you want to add your entire codebase,
or if **you don't remember what you changed**,
please include the **#oops hashtag**
```
$ git comit -m ":confounded: #oops git add . - optionnal description"
```
*You can use git add .
but be sure it only adds ONE or TWO (5 max) RELATED files*

### Git Commit Messages

The typical message for a commit is
```
:emoji: describe what you do - aside note #tag
```

> every commit should come with a message,
> emojis and aside notes are optionnal

Commits messages will be **parsed and categorized**,
you SHOULD USE **these hashtags** to help this task :

- `#docs` when editing docs
- `#syntax` when rewriting/refactoring code
- `#create` or `#add` when adding a new feature
- `#bug` when fixing a bug
- `#oops` when *you don't remember what you commit*

> You can add multiple hashtags in a single commit message,
> anywhere you want in the message*

In addition, you can add **a nice looking emoji**,
but it's not so important than hashtags.
- :books: `:books: #docs`
- :memo: `:memo: #syntax`
- :heavy_plus_sign: `:heavy_plus_sign: #create`
  or `:heavy_plus_sign: #add`
- :bug: `:bug: #bug`
- :lock: `:lock: #security`
- :confounded: `:confounded: #oops`


## Actual Coding

### General Syntax

> Readability, sustainability, simplicity
> are priorized over folder size,
> until performance issues comes up
> in wich case minifying the scripts
> could be an option

**Whatever the language** (*as long as it allows*)
these few syntax guidelines apply :

- **2 spaces indentation** (even in HTML)   
  Though I really like 4 spaces style for readability,
  I choose to follow [standardjs](https://standardjs.com/#why-should-i-use-javascript-standard-style)
  in case these tools might be useful one day.
  *Better developpers made this choice,
  and I agree with them*.

- separate code in **many little files**
  better than one
  [stodgy](https://www.dictionary.com/browse/stodgy)
  spaghetti plate.

- **break lines** as much as possible,
  in *semantically relevant* pieces of code
  (of text for markdown).
  Keep all the code under **80 chars** length please,
  and the shorter the line the better.   
  - **long URLS** will be an exception
  - **code comments** are NOT an exception,
    use a new line
  - **HTML** ... we'll see later

- SPACES NOT TABS
  because it had to be reminded


### Text and Markdown syntax

For Markdown, or any document that contains human text (.md .txt)
the rule is : **make it beautiful in notepad**.

One should be able to read them in a text editor
effortlessly, without syntax highlighting and styles,
and most of all, WITHOUT LONG LINES that need SIDE-SCROLLING.

For example this involves **indentation of list items** :
```md
- a list item   
  the INDENTED description
  which continues to be indented
  if it's too long to fit on a line.
- another list item
  - a nested list
    follows the same rule here,
  - why this ?
    don't you find this more readable ?
- all the text
  is aligned.
```

### Js syntax

The code should follow [standardjs practices (check the link)](https://standardjs.com/rules.html).

> If you use Atom text editor,
> you can install
> **[linter-js-standard](https://atom.io/packages/linter-js-standard)**,
> for other editors, check the web.


Here is an example

```js

```

### Maximum cross-compatibility   
Finally, (a few) rules that will help to build
both for linux, windows and mac :

- use **[node path library](https://nodejs.org/api/path.html)**
  to hande ANY path.
  Never hard-code an absolute path
  and try staying inside the **application root**

- if needed to **navigate to user path**
  (for example the user's project folder),
  use [the best library available](yet-to-find)

- avoid **native modules** as possible
  *but this [topic will have its own dedicated part](link)*

*And here are a few more
inspired by [atom guidelines](https://flight-manual.atom.io/hacking-atom/sections/cross-platform-compatibility/)*

- **file/folder names with spaces** are forbidden,
  EVEN from the user side
  (*2 exceptions :
  for imported files and project files,
  in which case refer to
  atom guidelines above*)

- `? \ / < > ? % | : " *`
  are **forbidden characters** in file/folder names

- `com1->com9 lpt1->lpt9 con nul aux prn`
  are **forbidden file names** regardless of extention
  (for example `com4.whatever` is forbidden)

- If you need to use a path for a URL
  use the **file:** protocol with an absolute path
  (*from the node path library, remember*), e.g. `file:///c|/test/pic.png`

- **don't use** `fs.stat`

- **be carefull with** `path.relative`
  as it can't traverse drives

- if **file deletion needed**
  use [rimraf](https://www.npmjs.com/package/rimraf)





_____
_____
_____


All JavaScript must adhere to [JavaScript Standard Style](https://standardjs.com/).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Inline `export`s with expressions whenever possible
  ```js
  // Use this:
  export default class ClassName {

  }

  // Instead of:
  class ClassName {

  }
  export default ClassName
  ```
* Place requires in the following order:
    * Built in Node Modules (such as `path`)
    * Built in Atom and Electron Modules (such as `atom`, `remote`)
    * Local Modules (using relative paths)
* Place class properties in the following order:
    * Class methods and properties (methods starting with `static`)
    * Instance methods and properties
* [Avoid platform-dependent code](https://flight-manual.atom.io/hacking-atom/sections/cross-platform-compatibility/)
