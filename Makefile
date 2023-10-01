__init:
 	export SHELL=/bin/bash

.PHONY: help
help:
	@cat $(MAKEFILE_LIST) | grep -e "^[a-zA-Z_\-]*: *.*## *" | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: develop
develop: ## Start development server at localhost.
	@make __init
	npx @11ty/eleventy --serve