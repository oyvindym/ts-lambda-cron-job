.PHONY: create-change-set apply-change-set create-stack

create-change-set:
	@echo "Creating change set for $(STACK_NAME)"
	aws cloudformation create-change-set \
		--stack-name "$(PROJECT_NAME)-$(STACK_NAME)" \
		--template-body file://cron-job-lambda.yml \
		--parameters file://$(STACK_NAME)-params.json \
		--change-set-name "$(PROJECT_NAME)-$(STACK_NAME)-change-set" \
		--capabilities CAPABILITY_NAMED_IAM \
		--region eu-west-1 

	@echo "Waiting for change set to complete"
	aws cloudformation wait change-set-create-complete \
		--change-set-name "$(PROJECT_NAME)-$(STACK_NAME)-change-set" \
		--stack-name "$(PROJECT_NAME)-$(STACK_NAME)" \
		--region eu-west-1

	@echo "Describing change set"
	aws cloudformation describe-change-set \
		--stack-name "$(PROJECT_NAME)-$(STACK_NAME)" \
		--change-set-name "$(PROJECT_NAME)-$(STACK_NAME)-change-set" \
		--region eu-west-1 > "$(PROJECT_NAME)-$(STACK_NAME)-change-set.json"

	@echo "Change set saved to $(PROJECT_NAME)-$(STACK_NAME)-change-set.json"
	@echo "Verify changes before running 'make apply-change-set PROJECT_NAME=$(PROJECT_NAME) STACK_NAME=$(STACK_NAME)'"

apply-change-set:
	@echo "Applying change set for $(STACK_NAME)"
	aws cloudformation execute-change-set \
		--change-set-name "$(PROJECT_NAME)-$(STACK_NAME)-change-set" \
		--stack-name "$(PROJECT_NAME)-$(STACK_NAME)" \
		--region eu-west-1

create-stack:
	@echo "Create stack $(PROJECT_NAME)-$(STACK_NAME)"
	aws cloudformation create-stack \
		--region eu-west-1 \
		--stack-name "$(PROJECT_NAME)-$(STACK_NAME)" \
		--template-body file://cron-job-lambda.yml \
		--parameters file://$(STACK_NAME)-params.json \
		--capabilities CAPABILITY_NAMED_IAM 

