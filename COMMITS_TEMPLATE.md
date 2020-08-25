<p align="center">
<img src="logo/logo-128.svg"/>
<h2 align="center">Arrow</h2>
</p> 
<h4 align="center">A modern JavaScript utility library for complex data structures</h4>


## Why Commits Template ?

Commits are the source truth of communication between developers to check the last changes in the project but if you browse the log of any random Git repository ( Or even a popular one), you will probably find its commit messages are more or less a mess. because they don't have a common convention or a syntax that makes them readable and easy to understand for the new collaborators.

In order to create a useful revision history, we should first agree on a commit message convention that defines at least the following three things:

**Style**

 Markup syntax, wrap margins, grammar, capitalization, punctuation. Spell these things out, remove the guesswork, and make it all as simple as possible. The end result will be a remarkably consistent log that’s not only a pleasure to read but that actually does get read on a regular basis.

**Content**

 What kind of information should the body of the commit message (if any) contain? What should it not contain?

**Metadata**

How should issue tracking IDs, pull request numbers, etc. be referenced?

## Rules

1. Separate subject from body with a <b>blank line</b>.

2. Limit the subject line to <b>50</b> characters.

3. <b>Capitalize</b> the subject line.

4. Do not end the subject line with a <b>period</b>.

5. Use the <b>imperative</b> mood in the subject line.

6. Wrap the body at <b>72</b> characters.

7. Use the body to explain <b>what and </b>why</b> vs <b>how</b>.

## Formula

We created this formula to make stable communication between us and help new collaborators to understand the last changes in the project.

- Start the commit message with an **icon** ```:icon_name:``` to refer your **action**.
- Add **imperative** action verb ```Create, Remove, Rename, Implement, Change, Add```.
- Add the touched part such as functions, variables and files ```open(), try(), PI, index.js```.
- Explain the **Why** when you make your **pull requests**.


## Examples

```git 
       git commit -am ":tada: create README"
       git commit -am ":beetle: Fix typo in the introduction"
       git commit -am ":cyclone: Change the syntax of X to follow new ES8 syntax"
       git commit -am ":cyclone: Rename hasNULL() to hasNull() to follow clean code convention"
       git commit -am ":zap: Implement hasOnceNaN()"
       git commit -am ":wastebasket: Remove extractBy()"  
       git commit -am ":beetle:  Fix orderAll() in [#222]"  
```
We could not come with a stable and must-have approach for messages but we **emphasize** adding **icon** before the message.

## Templates

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
<code>:tada:</code>
</td>
<td>
Create
</td>
<td>
When you create and implement new module.
</td>
</tr>
<tr>
<tr>
<td>
:beetle:
</td>
<td>
<code>:beetle:</code>
</td>
<td>
Fix
</td>
<td>
When you fix a bug
</td>
</tr>
<tr>
<td>
:cyclone:
</td>
<td>
<code>:cyclone:</code>
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
<code>:wrench:</code>
</td>
<td>
Refactor
</td>
<td>
When you enhance a piece of code without a bug or an issue.
</td>
<tr>
<td>
:wastebasket:
</td>
<td>
<code>:wastebasket:</code>
</td>
<td>
Remove
</td>
<td>
When you remove a piece of code
</td>
</tr>
<tr>
<td>
:zap:
</td>
<td>
<code>:zap:</code>
</td>
<td>
Add | Implement
</td>
<td>
When you add a piece of code into existing code
</td>
<tr>
</table>

**Note :** We apply the same templates with **README** files.