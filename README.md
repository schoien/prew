#pre[vie]w

###The Quick intro:
Create a preview of a page containing header.html, article.html and footer.html, just by using the url index.html?header:article:footer. Add multiple instances of an molecule to a organism with
```html
<molecule data-molecule="ref" data-nr="nr" />
```

###What it is:
Inspired by Brad Frost and he's concept of [atomic design](http://atomicdesign.bradfrost.com), prew is made as an efficient way to organise code in molecules and organisms and show them as templates and pages. As an easy way of combining and reuse code for prototyping and through design refinement.

###What its not:
* Framework with CSS styling.
* Template-engine for production and real content.

###Pros:
* Super easy and small.
* Javascript based: Works well in all environments, no server side needed.
* Works offline, so you can use it with the preview engine in your favourite text editor.
* Flexible: Easy to quickly rearrange, add and multiply organisms and molecules in the templates.
* Process friendly: Follows the process from first html prototype throughout the complete design refinement.
* Easy to combine width the framework you already use.

###How it works
All your "organisms" are stored as separate html files in the design folder.  
All your "molecules" are stored as elements in "design/molecules.html".  
Organisms is identified by the filename.  
Molecules is identified by a data-molecule attribute.

You build a template by adding the sequence of organisms to your url. If you like a preview consisting of header.html, article.html and footer.html, just go to index.html?header:article:footer.

To include molecules in your organisms, add:  
```html
<molecule data-molecule="reference" />
```
where you want the molecule to appear. If you like to add multiple instances of an molecule (like in a list of elements), just ad `data-nr="number"` attribute. Like this: 
```html
<molecule data-molecule="list_element" data-nr="4" />
```
