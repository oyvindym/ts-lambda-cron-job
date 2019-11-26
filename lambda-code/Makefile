.PHONY: compress build update-lambda clean deploy

compress:
	@echo "Compressing $(FUNCTION_NAME)"
	cd lib && zip -q -r ../index.zip *

build:
	@echo "Building $(FUNCTION_NAME)"
	npm run build -- --environment FUNCTION_NAME:$(FUNCTION_NAME)

update-lambda:
	@echo "Updating lambda $(PROJECT_NAME)-$(FUNCTION_NAME)"
	aws lambda update-function-code \
		--function-name "$(PROJECT_NAME)-$(FUNCTION_NAME)" \
		--zip-file fileb://index.zip \
		--publish

clean:
	@echo "Cleaning up"
	rm -r index.zip lib

deploy: build compress update-lambda clean