# ecommerce
> https://myungjaeyu.github.io/ecommerce

## Deploy

```
$ git push origin :gh-pages

$ git add build -f

$ git commit -m 'chore: Deployed to gh-pages.'

$ git subtree push --prefix build origin gh-pages

$ git reset HEAD^
```

#### Dependencies

- [react-dom](https://www.npmjs.com/package/react-dom)
- [sass](https://sass-lang.com)