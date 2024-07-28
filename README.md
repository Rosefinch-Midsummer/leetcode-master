# mdbook-template

添加目录块:

```toml
<!-- toc -->
```

# MdBook Github Action with Plugin Support

Coverage Security Rating Maintainability Rating Vulnerabilities GitHub license GitHub issues

## Introduction

This is an github action to set up the rust-lang/mdBook with some supported plugins.

This action runs only on linux and is well tested on github latest ubuntu runner and compatible with Node v14, v16 and v18. Windows and MacOS are currently not supported.

## Supported Plugins

Michael-F-Bryan/mdbook-linkcheck  
badboy/mdbook-mermaid  
badboy/mdbook-toc  
badboy/mdbook-open-on-gh  
tommilligan/mdbook-admonish  
lzanini/mdbook-katex  

## Fast Setup

The following example installs mdbook with all currently supported plugins with the latest version. Keep in mind that this build could break if mdbook or one of the plugins release new versions with breaking changes. Therefore it is highly recommended to specify a version. See "Advanced Setup" for more information.

```bash
name: Setup mdBook with plugins (latest)
on:
  push:
    branches:
      - main
jobs:
  run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: jontze/action-mdbook@v2
        with:
          token: ${{secrets.GITHUB_TOKEN}}
          # Optional Plugins have to be enabled
          use-linkcheck: true
          use-mermaid: true
          use-toc: true
          use-opengh: true
          use-admonish: true
          use-katex: true
      - name: Show mdbook version
        run: mdbook --version
      - name: Show linkchecker version
        run: mdbook-linkcheck --version
      - name: Show mermaid version
        run: mdbook-mermaid --version
      - name: Show toc version
        run: mdbook-toc --version
      - name: Show open-on-gh version
        run: mdbook-open-on-gh --version
      - name: Show admonish version
        run: mdbook-admonish --version
      - name: Show katex version
        run: mdbook-katex --version
```

## Advanced Setup

```bash
name: Setup mdBook wth plugins (version)
on:
  push:
    branches:
      - main
jobs:
  run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: jontze/action-mdbook@v2
        with:
          token: ${{secrets.GITHUB_TOKEN}}
          # Optional Plugins have to be enabled with a version
          mdbook-version: "~0.3.0" # Use a semver compatible string
          use-linkcheck: true
          linkcheck-version: "~0.7.0"
          use-mermaid: true
          mermaid-version: "~0.8.0"
          use-toc: true
          toc-version: "~0.7.0"
          use-opengh: true
          opengh-version: "~2.0.0"
          use-admonish: true
          admonish-version: "~1.8.0"
          use-katex: true
          katex-version: "~0.2.17"
      - name: Show mdbook version
        run: mdbook --version
      - name: Show linkchecker version
        run: mdbook-linkcheck --version
      - name: Show mermaid version
        run: mdbook-mermaid --version
      - name: Show toc version
        run: mdbook-toc --version
      - name: Show open-on-gh version
        run: mdbook-open-on-gh --version
      - name: Show admonish version
        run: mdbook-admonish --version
      - name: Show katex version
        run: mdbook-katex --version
```

