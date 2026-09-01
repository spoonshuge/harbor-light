# Harbor Light DPC — website

Static rebuild of the Harbor Light Direct Primary Care site.

## Structure

```
site/                  # the deployed site (this is what GitHub Pages serves)
  index.html
  dr-kiepura.html
  dr-fallen.html
  faq.html
  patient-login.html
  assets/{css,js,img}/
.github/workflows/pages.yml   # deploys site/ on every push to main
```

## Local preview

```sh
python3 -m http.server -d site 8000
# then open http://localhost:8000
```

## Deploying

Push to `main`. The Pages workflow publishes the contents of `site/`.
All paths in the HTML are relative, so the site works both at a domain
root and under a project-page subpath.
