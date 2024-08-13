import { test, expect } from 'playwright/test';
import { Login } from '../../../pages/login';
import { EmployeeManagement } from '../../../pages/employee-management';
import { getEmployeeData } from '../../../data/employeeData'; // Import the employee data function

test.describe('[SUNSHINE] Regression Test - Add Employee', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://demosunshine.onindonesia.id/');
		const LoginPage = new Login(page);

		const username = 'WILLIAM';
		const password = 'tzkymjhd';

		await LoginPage.signIn(username, password);
	});

	test('Verify user can add employee successfully', async ({ page }) => {
		expect(await page).toHaveURL(/.*dashboard/);

		const EmployeeManagementPage = new EmployeeManagement(page);

		// Get employee data
		const employeeData = getEmployeeData();

		await EmployeeManagementPage.clickHumanResourceButton();
		await EmployeeManagementPage.clickEmployeeManagementButton();
		await EmployeeManagementPage.clickAddEmployeeButton();
		await EmployeeManagementPage.clickEmployeeAccountInformationTab();

		// Set employee account information using employeeData
		await EmployeeManagementPage.setEmployeeAccountInformation(
			employeeData.username,
			employeeData.email,
			employeeData.shift,
			employeeData.role,
			employeeData.employeeCode,
			employeeData.company,
		);

		// Set employee personal information using employeeData
		await EmployeeManagementPage.setEmployeePersonalInformation(
			employeeData.fullname,
			employeeData.citizenNumber,
			employeeData.gender,
			employeeData.dob.toISOString().split('T')[0],
			employeeData.pob,
			employeeData.driverLicensesType,
			employeeData.phoneNumber,
			employeeData.whatsappNumber,
			employeeData.registeredAdress,
			employeeData.currentAdress,
			employeeData.maritalStatus,
			employeeData.numberofchild,
		);

		// Set employee work information using employeeData
		await EmployeeManagementPage.setEmployeeWorkInformation(
			employeeData.position,
			employeeData.placement,
			employeeData.contractNumber,
			employeeData.contractStart.toISOString().split('T')[0], // Format as 'YYYY-MM-DD'
			employeeData.contractEnd.toISOString().split('T')[0], // Format as 'YYYY-MM-DD'
			employeeData.joinDate,
			employeeData.resignDate,
			employeeData.resignReason,
			employeeData.employementStatus,
		);

		// Set OSAS account information using employeeData
		await EmployeeManagementPage.setSyncOsasAccount(
			employeeData.roleOsas,
			employeeData.agentLocation,
			employeeData.agentLocationValue,
		);

		// Set employee payment information using employeeData
		await EmployeeManagementPage.setEmployeePaymentInformation(
			employeeData.bankName,
			employeeData.accountName,
			employeeData.accountNumber,
		);

		// Create the employee
		await EmployeeManagementPage.createEmployee();
	});
});
