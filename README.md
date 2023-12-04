# Nuxt 3 Utils auto import bug

## Guide

- [Utils](https://nuxt.com/docs/guide/directory-structure/utils)

## Bug

The utils/ directory is auto imported on development mode, but not on production mode.
I got this error

```txt
Uncaught ReferenceError: upperCase is not defined
    at index-8e797b43.js:1:88
```
