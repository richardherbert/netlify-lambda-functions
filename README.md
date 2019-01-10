# Netilfy Lambda Functions

Rather than use the `Netlify` web UI to set the configuration it's better to record it in code for transparency and portability. Therefore create a file called `netlify.toml` in the root of your site. Here we'll add a number of key/value pairs to describe the configuration. The first of these is `functions` which we'll add to the file. This is where the complied `Netlify Lambda` code will be generated. This location will not be visible from your `Netlify` site so it can be anything you like as it has no bearing on where the lambda function will be served from. That will always be `/.netlify/functions/` therefore we'll use something traditional like `dist/lambda/` for the generated code. Therefore the start of our `netlify.toml` will look like this:

```
[build]
  functions = "dist/lambda"
```

When you come to testing and running `Netlify Lambda` locally, you may want to add `dist/lambda/` to your `.gitignore` to stop the complied code generated from being committed to your repository.

I like to use `Jekyll` as my Static Site Generator (SSG), so to break the dependency on the `Netlify` web UI for configuration, I've added another name/value pair to specify where the `Jekyll` generated site with be published to. That will be `publish` and set to the traditional value of `_site/` making the `netlify.toml` file look like:

```
[build]
  functions = "dist/lambda/"
  publish = "_site/"
```

Finally we'll add a `command` name/value pair which will tell the build process which script to invoke in the `package.json` file. We'll add `command = "npm run build"` to our `netlify.toml` file like this:

```
[build]
  functions = "dist/lambda/"
  publish = "_site/"
  command = "npm run build"
```

Now with this in place we can start to write a function. First we need a place to write our code. We'll choose `src/lambda` for this; we'll need this later. Our file name will be our published function without the `.js` extension. Therefore `dist/lambda/test1.js` will be visible as `/.netlify/functions/test1` on your `Netlify` site.

Another note for `Jekyll` fans, add an exclusion for the `src` folder to your `_config.yml` file like this:

```
exclude:
  - src
```

That way your source code won't be published to your `HTML` site unnecessarily.

So now we have configuration and some code in place. Now we need to build our site and `Netlify Lambda` function.

In our `package.json` file we need a section of scripts like so:

```
  "scripts": {
    "build": "npm run build:jekyll; npm run build:lambda;",
    "build:jekyll": "jekyll build",
    "build:lambda": "netlify-lambda build src/lambda/"
  }
```

The first, `build` is the script named in our `netlify.toml` file written earlier. This calls the next two scripts; `build:jekyll` and `build:lambda` one at a time. The first, `build:jekyll` builds our `Jekyll` site with `jekyll build` and the second, `build:lambda` builds our `Netlify Lambda` functions using the `netlify-lambda` Node module with `src/lambda/` as the location of our source files.

All we need to do now is commit and push our files up to `Github` and with `Netlify` listening, it will deploy our `Jekyll` site, then compile and publish our functions.

Take a look at the source in this repository for more details.
