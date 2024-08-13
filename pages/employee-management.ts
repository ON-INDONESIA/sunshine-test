import { expect, Locator, Page } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

// Konversi `import.meta.url` ke `__dirname`
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class EmployeeManagement {
	readonly page: Page;
	readonly humanResourceButton: Locator;
	readonly employeeManagementButton: Locator;
	readonly addEmployeeButton: Locator;
	readonly syncOsasCheckbox: Locator;
	readonly employeeInformationSyncOsasTab: Locator;
	readonly rolesDropdown: Locator;
	readonly agentLocationInput: Locator;
	readonly employeeAccountInformation: Locator;
	readonly employeePersonalInformation: Locator;
	readonly employeeWorkInformation: Locator;
	readonly employeePaymentInformation: Locator;
	readonly usernameInput: Locator;
	readonly emailInput: Locator;
	readonly shiftDropdown: Locator;
	readonly selectRole: Locator;
	readonly employeeCode: Locator;
	readonly companyDropdown: Locator;
	readonly fullNameInput: Locator;
	readonly citizenNumberInput: Locator;
	readonly genderDropdown: Locator;
	readonly dateOfInputSelect: Locator;
	readonly placeOfBirthInput: Locator;
	readonly driverLicensesTypeDropdown: Locator;
	readonly phoneNumberInput: Locator;
	readonly whatsappInput: Locator;
	readonly registeredAddressInput: Locator;
	readonly currentAddressInput: Locator;
	readonly maritalStatusDropdown: Locator;
	readonly numberOfChildInput: Locator;
	readonly positionDropdown: Locator;
	readonly placementDropdown: Locator;
	readonly contractNumber: Locator;
	readonly contractRangeStartDateInput: Locator;
	readonly contractRangeEndDateInput: Locator;
	readonly joinDateSelect: Locator;
	readonly resignDateSelect: Locator;
	readonly resignReasonInput: Locator;
	readonly employementStatusDropdown: Locator;
	readonly bankNameSelect: Locator;
	readonly accountNameBankInput: Locator;
	readonly accountNumberBankInput: Locator;
	readonly createButton: Locator;
	readonly cancelButton: Locator;
	readonly selectRoleOsas: Locator;

	constructor(page: Page) {
		this.page = page;
		this.humanResourceButton = page
			.locator('div')
			.filter({ hasText: /^Human Resource$/ });

		this.employeeManagementButton = page
			.locator('li')
			.filter({ hasText: /^Employee Management$/ });

		this.addEmployeeButton = page.locator(
			'span[nztooltiptitle="Add Employee"] > a.btn',
		);

		// Employee Account Information Tab

		this.employeeAccountInformation = page.getByRole('tab', {
			name: 'Employee Account Information',
		});

		this.usernameInput = page.getByPlaceholder('Input Username ...');

		this.emailInput = page.getByPlaceholder('Input Email ...');

		this.shiftDropdown = page
			.locator('nz-select-top-control')
			.filter({ hasText: 'Select Shift ...' });

		this.selectRole = page
			.locator('nz-select-top-control')
			.filter({ hasText: 'Select Role ...' });

		this.employeeCode = page.getByPlaceholder('Input Employee Code ...');

		this.companyDropdown = page
			.locator('nz-select-top-control')
			.filter({ hasText: 'Select company ...' });

		// Employee Personal Information Tab

		this.employeePersonalInformation = page.getByRole('tab', {
			name: 'Employee Personal Information',
		});

		this.employeeWorkInformation = page.getByRole('tab', {
			name: 'Employee Work Information',
		});

		this.employeePaymentInformation = page.getByRole('tab', {
			name: 'Employee Payment Information',
		});

		this.rolesDropdown = page
			.locator('nz-select-top-control')
			.filter({ hasText: 'Select Role ...' });

		// Employee Personal Information Tab
		this.fullNameInput = page.getByPlaceholder('Input Full Name ...');

		this.citizenNumberInput = page.getByPlaceholder('Input Citizen Number ...');

		this.genderDropdown = page
			.locator('nz-select-top-control')
			.filter({ hasText: 'Select Gender ...' });

		this.dateOfInputSelect = page
			.locator('nz-form-item')
			.filter({ hasText: 'Date of Birth' })
			.getByPlaceholder('Select date');

		this.placeOfBirthInput = page.getByPlaceholder('Input Place of Birth ...');

		this.driverLicensesTypeDropdown = page
			.locator('nz-select-top-control')
			.filter({ hasText: 'Select Type of Driver License ...' });

		this.phoneNumberInput = page.locator('[id="\\\'phoneNumber\\\'"]');

		this.whatsappInput = page
			.locator('nz-form-item')
			.filter({ hasText: 'Whatsapp Number+62' })
			.getByRole('textbox')
			.nth(1);

		this.registeredAddressInput = page.getByPlaceholder(
			'Input Registered Address ...',
		);

		this.currentAddressInput = page.getByPlaceholder(
			'Input Current Address ...',
		);

		this.maritalStatusDropdown = page
			.locator('nz-select-top-control')
			.filter({ hasText: 'Select Marital Status ...' });

		this.numberOfChildInput = page
			.locator('nz-input-number')
			.getByRole('textbox');

		// Employee Work Information Tab
		this.positionDropdown = page
			.locator('nz-select-top-control')
			.filter({ hasText: 'Select Position ...' });

		this.placementDropdown = page
			.locator('nz-select-top-control')
			.filter({ hasText: 'Select Placement Employee ...' });

		this.contractNumber = page.getByPlaceholder('Input Contract Number ...');

		this.contractRangeStartDateInput = page.getByPlaceholder('Start date');

		this.contractRangeEndDateInput = page.getByPlaceholder('End date');

		this.joinDateSelect = page
			.locator('nz-form-item')
			.filter({ hasText: 'Join Date' })
			.locator('nz-date-picker')
			.getByPlaceholder('Select date');

		this.resignDateSelect = page
			.locator('nz-form-item')
			.filter({ hasText: 'Resign Date' })
			.locator('div')
			.nth(2)
			.getByPlaceholder('Select date');

		this.resignReasonInput = page.getByPlaceholder('Input Resign Reason ...');

		this.employementStatusDropdown = page
			.locator('nz-select-top-control')
			.filter({ hasText: 'Select Employement Status ...' });

		// Employee Payment Information Tab
		this.bankNameSelect = page
			.locator('nz-select-top-control')
			.filter({ hasText: 'Select Bank ...' });

		this.accountNameBankInput = page.getByPlaceholder('Input Account Name ...');

		this.accountNumberBankInput = page.getByPlaceholder(
			'Input Account Number ...',
		);

		// Sync Osas Account
		this.syncOsasCheckbox = page.getByLabel('Sync to OSAS Account');

		this.employeeInformationSyncOsasTab = page.getByRole('tab', {
			name: 'Employee Information Sync to OSAS',
			exact: true,
		});

		this.selectRoleOsas = page
			.locator('nz-collapse')
			.nth(4)
			.getByRole('textbox')
			.first();

		this.agentLocationInput = page
			.locator('nz-select-top-control')
			.last()
			.locator('input');

		// Next
		this.createButton = page.locator('button').filter({ hasText: 'Create' });

		this.cancelButton = page.locator('button').filter({ hasText: 'Cancel' });
	}

	async clickHumanResourceButton() {
		// expect(await this.humanResourceButton).toBeVisible();
		await this.humanResourceButton.click();
	}

	async clickEmployeeManagementButton() {
		expect(await this.employeeManagementButton).toBeVisible();
		await this.employeeManagementButton.click();
	}

	async clickAddEmployeeButton() {
		expect(await this.addEmployeeButton).toBeVisible();
		await this.addEmployeeButton.click();
	}

	async clickEmployeeAccountInformationTab() {
		expect(await this.employeeAccountInformation).toBeVisible();
		await this.employeeAccountInformation.click();
	}

	async clickEmployeePersonalInformationTab() {
		expect(await this.employeePersonalInformation).toBeVisible();
		await this.employeePersonalInformation.click();
	}

	async clickEmployeeWorkInformationTab() {
		expect(await this.employeeWorkInformation).toBeVisible();
		await this.employeeWorkInformation.click();
	}

	async clickEmployeePaymentInformationTab() {
		expect(await this.employeePaymentInformation).toBeVisible();
		await this.employeePaymentInformation.click();
	}

	async clickEmployeeInformationSyncOsasTab() {
		expect(await this.employeeInformationSyncOsasTab).toBeVisible();
		await this.employeeInformationSyncOsasTab.click();
	}

	async clickSyncOsasCheckbox() {
		expect(await this.syncOsasCheckbox).toBeVisible();
		await this.syncOsasCheckbox.click();
	}

	async clickCreateButton() {
		expect(await this.createButton).toBeVisible();
		await this.createButton.click();
	}

	async setEmployeeAccountInformation(
		username: string,
		email: string,
		shift: string,
		role: string,
		employeeCode: string,
		company: string,
	) {
		// expect(await this.usernameInput).toBeVisible();
		await this.usernameInput.fill(username);

		// expect(await this.emailInput).toBeVisible();
		await this.emailInput.fill(email);

		// expect(await this.shiftDropdown).toBeVisible();
		await this.shiftDropdown.click();

		// expect(await this.page.getByText(shift)).toBeVisible();
		await this.page.getByText(shift).click();

		expect(await this.selectRole).toBeVisible();
		await this.selectRole.click();

		// expect(await this.page.getByTitle(role)).toBeVisible();
		await this.page.getByTitle(role).click();

		// expect(await this.employeeCode).toBeVisible();
		await this.employeeCode.fill(employeeCode);

		// expect(await this.companyDropdown).toBeVisible();
		await this.companyDropdown.click();

		// expect(await this.page.getByTitle(company)).toBeVisible();
		await this.page.getByTitle(company).click();

		const handle = this.page.locator('nz-upload').locator('input[type="file"]');

		await handle.setInputFiles(
			path.join(__dirname, 'assets', 'user-profile.jpg'),
		);
	}

	async setEmployeePersonalInformation(
		fullname: string,
		citizenNumber: string,
		gender: string,
		dob: string,
		pob: string,
		driverLicensesType: string,
		phoneNumber: string,
		whatsappNumber: string,
		registeredAdress: string,
		currentAdress: string,
		maritalStatus: string,
		numberofchild: string,
	) {
		await this.clickEmployeePersonalInformationTab();

		// expect(await this.fullNameInput).toBeVisible();
		await this.fullNameInput.fill(fullname);

		// expect(await this.citizenNumberInput).toBeVisible();
		await this.citizenNumberInput.fill(citizenNumber);

		// expect(await this.genderDropdown).toBeVisible();
		await this.genderDropdown.click();
		// expect(this.page.getByTitle(gender, { exact: true })).toBeVisible();
		await this.page.getByTitle(gender, { exact: true }).click();

		// expect(await this.dateOfInputSelect).toBeVisible();
		await this.dateOfInputSelect.fill(dob);

		// expect(await this.placeOfBirthInput).toBeVisible();
		await this.placeOfBirthInput.fill(pob);

		// expect(await this.driverLicensesTypeDropdown).toBeVisible();
		await this.driverLicensesTypeDropdown.click();
		await this.page.getByTitle(driverLicensesType).click();

		// expect(await this.phoneNumberInput).toBeVisible();
		await this.phoneNumberInput.fill(phoneNumber);

		// expect(await this.whatsappInput).toBeVisible();
		await this.whatsappInput.fill(whatsappNumber);

		// expect(await this.registeredAddressInput).toBeVisible();
		await this.registeredAddressInput.fill(registeredAdress);

		// expect(await this.currentAddressInput).toBeVisible();
		await this.currentAddressInput.fill(currentAdress);

		// expect(await this.maritalStatusDropdown).toBeVisible();
		await this.maritalStatusDropdown.click();
		await this.page.getByTitle(maritalStatus).click();

		// expect(await this.numberOfChildInput).toBeVisible();
		await this.numberOfChildInput.fill(numberofchild);
	}

	async setEmployeeWorkInformation(
		position: string,
		placement: string,
		contractNumber: string,
		contractStart: string,
		contractEnd: string,
		joinDate: string,
		resignDate: string,
		resignReason: string,
		employementStatus: string,
	) {
		await this.clickEmployeeWorkInformationTab();

		// == [Position] ==

		// expect(await this.positionDropdown).toBeVisible();
		await this.positionDropdown.click();

		// expect(await this.page.getByTitle(position)).toBeVisible();
		await this.page.getByTitle(position).click();

		// == [Placement] ==

		await this.placementDropdown.click();

		// expect(await this.page.getByTitle(placement).first()).toBeVisible();
		await this.page.getByTitle(placement).first().click();

		// == [Contract Number] ==

		// expect(await this.contractNumber).toBeVisible();
		await this.contractNumber.fill(contractNumber);

		// == [Contract Range] ==
		// expect(await this.contractRangeStartDateInput).toBeVisible();
		await this.contractRangeStartDateInput.fill(contractStart);

		// expect(await this.contractRangeEndDateInput).toBeVisible();
		await this.contractRangeEndDateInput.fill(contractEnd);

		// == [Join Date] ==
		// expect(await this.joinDateSelect).toBeVisible();

		await this.joinDateSelect.fill(joinDate);

		// == [Resign Date] ==
		// expect(await this.resignDateSelect).toBeVisible();
		await this.resignDateSelect.fill(resignDate);

		// == [Resign Reason] ==
		// expect(await this.resignReasonInput).toBeVisible();
		await this.resignReasonInput.fill(resignReason);

		// == [Employement Status] ==}
		// expect(await this.employementStatusDropdown).toBeVisible();
		await this.employementStatusDropdown.click();

		await this.page.getByTitle(employementStatus).click();
	}

	async setSyncOsasAccount(
		roleOsas: string,
		agentLocation: string,
		agentLocationValue: string,
	) {
		await this.clickSyncOsasCheckbox();

		await this.clickEmployeeInformationSyncOsasTab();

		await this.selectRoleOsas.click();

		await this.page.getByTitle(roleOsas, { exact: true }).click();

		// await this.agentLocationInput.click();
		await this.agentLocationInput.pressSequentially(agentLocation, {
			timeout: 50000,
		});

		// expect(
		// 	await this.page.getByTitle(agentLocationValue, { exact: true }),
		// ).toBeVisible();
		await this.page.getByTitle(agentLocationValue, { exact: true }).click();
	}

	async setEmployeePaymentInformation(
		bankName: string,
		accountName: string,
		accountNumber: string,
	) {
		await this.clickEmployeePaymentInformationTab();

		await this.bankNameSelect.click();
		await this.page.getByTitle(bankName).click();

		await this.accountNameBankInput.fill(accountName);

		await this.accountNumberBankInput.fill(accountNumber);
	}

	async createEmployee() {
		expect(await this.createButton).toBeVisible();
		expect(await this.createButton).toBeEnabled();
		await this.clickCreateButton();
	}

	async cancelCreateEmployee() {
		expect(await this.cancelButton).toBeVisible();
		await this.cancelButton.click();
	}
}
