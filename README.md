## A link blog made with Golang parser (Still a WIP)       
       
Here's how it works:

1. Content is added to lowercase from phone/laptop.
2. Markdown data is being fetched from lowercase in json.
3. json is parsed and is converted into html by a predefined template. This parser is written in go.
4. The generated index.html is a static link blog.


## TODO

    - [x] Fix date bugs. (Ordering or posts fixed.)
    - [x] Add RSS Feed support.
    - [ ] Refactor and clear Go parser and template's code and commit it.
    - [x] Linkback to homepage.
    - [ ] Automate blog generation process using Github Actions.
    - [ ] Publish to other sites.
    - [ ] Write a blog post about the whole process.
