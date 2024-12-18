# Purpose

Reproduce `jinja` prettier plugin flagging `.js` files with Lit.

## Getting started

```bash
git clone https://github.com/KonnorRogers/lit-jinja-prettier-reproduction
cd lit-jinja-prettier-reproduction
npm install
npm run prettier
```

You should see the following error:

```
➜  lit-jinja git:(main) ✗ npm run prettier

> lit-jinja@1.0.0 prettier
> prettier --check --log-level=warn .

[error] index.js: SyntaxError: Unexpected closing tag "PRETTIER_HTML_PLACEHOLDER_1_0_IN_JS". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags (2:57)
[error]   1 |
[error] > 2 |       <PRETTIER_HTML_PLACEHOLDER_0_0_IN_JS><slot></slot></PRETTIER_HTML_PLACEHOLDER_1_0_IN_JS>
[error]     |                                                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
[error]   3 |
```
