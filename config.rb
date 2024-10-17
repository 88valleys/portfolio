# Development-specific configuration
configure :development do
  set :http_prefix, ""
end

# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :minify_css
  activate :minify_javascript
  # activate :asset_host, host: "https://88valleys.github.io/portfolio"
  #
  #  # Use relative URLs
  activate :relative_assets
  set :relative_links, true
end

# Deployment configuration
activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.branch = "gh-pages" # The branch to deploy to
  # deploy.build_before = true # Build the project before deploying
end

# Set the HTTP prefix if needed
set :http_prefix, ""

# To deploy:
# bundle exec middleman build
# bundle exec middleman deploy
