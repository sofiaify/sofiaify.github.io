source "https://rubygems.org"

# GitHub Pages builds with Jekyll 3.9.x, so we pin to a compatible version.
gem "jekyll", "~> 3.9.5"

group :jekyll_plugins do
  gem "jekyll-paginate", "~> 1.1"
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Lock down kramdown v2 dependency required for GFM input
gem "kramdown-parser-gfm", "~> 1.1"

# Timezone data for platforms that lack it
gem "tzinfo", ">= 1", "< 3"
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Needed by Ruby 3+ which no longer ships webrick
gem "webrick", "~> 1.8"

# Stdlib gems removed from default gems in newer Ruby versions
gem "csv"
gem "logger"
gem "base64"
gem "bigdecimal"

# Windows file watching
gem "wdm", "~> 0.1.1", platforms: [:mingw, :mswin, :x64_mingw]
