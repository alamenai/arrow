<p align="center"><img src="assets/images/commits_icon.png" width="100"></p>
<h1 align="center">Make Good Commits</h1>

### Why Commits Template ?

Commits are the source truth of communication between developers to check the last changes in the project but if you browse the log of any random Git repository ( Or even a popular one), you will probably find its commit messages are more or less a mess. because they don't have a common convention or a syntax that makes them readable and easy to understand for the new collaborators.

In order to create a useful revision history, we should first agree on a commit message convention that defines at least the following three things:

**Style** : Markup syntax, wrap margins, grammar, capitalization, punctuation. Spell these things out, remove the guesswork, and make it all as simple as possible. The end result will be a remarkably consistent log that’s not only a pleasure to read but that actually does get read on a regular basis.

**Content** : What kind of information should the body of the commit message (if any) contain? What should it not contain?

**Metadata** : How should issue tracking IDs, pull request numbers, etc. be referenced?

### Rules

1. Separate subject from body with a blank line.
2. Limit the subject line to 50 characters.
3. Capitalize the subject line.
4. Do not end the subject line with a period.
5. Use the imperative mood in the subject line.
6. Wrap the body at 72 characters.
7. Use the body to explain what and why vs how.

### Formula

I created this formula to make stable communication between developers and help new collaborators understand the last changes in the project.

- Start with an icon ``` :icon_name:```.
- Add action verb ```create, remove, rename, implement, refactor, fix```.
- Add the touched part such as functions, variables and files ```open(), try(), PI, index.js```.


#### Examples

```git 
       git commit -am ":tada: create README"
       git commit -am ":beetle: Fix typo in introduction to user guide"
       git commit -am ":cyclone: Rename X to Z"
       git commit -am ":cyclone: Rename hasNULL() to hasNull()"
       git commit -am ":zap: Implement hasOnceNan()"
       git commit -am ":wastebasket: Remove extractBy()"  
       git commit -am ":beetle:  Fix orderAll() [#222]"  
```
### Template

<table width="100%">
<tr>
<td>
<b>
Icon
</b>
</td>
<td>
<b>
Shortcode
</b>
</td>
<td>
<b>
Verb
</b>
</td>
<td>
<b>
Description
</b>
</td>
</tr>
<tr>
<td>
:tada:
</td>
<td>
`:tada:`
</td>
<td>
Create
</td>
<td>
When you create and initialize new file
</td>
</tr>
<tr>
<tr>
<td>
:beetle:
</td>
<td>
`:beetle:`
</td>
<td>
Fix
</td>
<td>
When you fix a bug or a grammar mistake
</td>
</tr>
<tr>
<td>
:cyclone:
</td>
<td>
`:cyclone:`
</td>
<td>
Rename
</td>
<td>
When you rename a function or variable
</td>
</tr>
<tr>
<td>
:wrench:
</td>
<td>
`:wrench:`
</td>
<td>
Refactor
</td>
<td>
When you re-implement a function, module or a unit test
</td>
<tr>
<td>
:wastebasket:
</td>
<td>
`:wastebasket:`
</td>
<td>
Remove
</td>
<td>
When you remove a function, module or a unit test
</td>
</tr>
</table>