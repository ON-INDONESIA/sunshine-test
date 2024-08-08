import { test, expect } from '@playwright/test';
import { SignUp } from '../../../pages/signup';

test.describe('[ONMARKET] Regression Test - Daftar user baru', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://test.onmarket.id/');
	});

	test('Verify user can [Sign Up] with [Valid Data Value] [email, phone_number, username, first_name, last_name, password] successfully', async ({
		page,
	}) => {
		const signUpPage = new SignUp(page);

		const email = 'tazkiyadigitalarchive@gmail.com';
		const phoneNumber = '082310575660';
		const username = 'tzkymjhd';
		const firstName = 'Tazkiya';
		const lastName = 'Mujahid';
		const password = 'tzkymjhd';
		const otp = '623620';
		await expect(page).toHaveTitle(
			'ONMARKET - Platform Jual Beli Online Terpercaya',
		);

		await signUpPage.signUp(
			email,
			phoneNumber,
			username,
			firstName,
			lastName,
			password,
		);

		await expect(page).toHaveURL('https://test.onmarket.id/signup/otp');

		await page.waitForTimeout(5000);
		await signUpPage.setOtp(otp);

		const successModal = page.getByLabel('Success');
		const okButton = page.getByRole('button', { name: 'OK' });

		await expect(successModal).toBeVisible();
		await expect(okButton).toBeVisible();

		await okButton.click();

		await expect(page).toHaveURL('https://test.onmarket.id/');
	});

	test('Verify user cannot [Sign Up] with [Invalid Data Value] [empty_email, phone_number, username, first_name, last_name, password] successfully', async ({
		page,
	}) => {
		const signUpPage = new SignUp(page);

		const email = '';
		const phoneNumber = '082310575660';
		const username = 'tzkymjhd';
		const firstName = 'Tazkiya';
		const lastName = 'Mujahid';
		const password = 'tzkymjhd';

		await expect(page).toHaveTitle(
			'ONMARKET - Platform Jual Beli Online Terpercaya',
		);

		await signUpPage.signUpWithEmptyValue(
			email,
			phoneNumber,
			username,
			firstName,
			lastName,
			password,
		);

		await expect(page.getByText('Email is required.')).toBeVisible();
		await expect(signUpPage.signUpButton).toBeDisabled();
	});

	test('Verify user cannot [Sign Up] with [Invalid Data Value] email, empty_phone_number, username, first_name, last_name, password] successfully', async ({
		page,
	}) => {
		const signUpPage = new SignUp(page);

		const email = 'tazkiyadigitalarchive@gmail.com';
		const phoneNumber = '';
		const username = 'tzkymjhd';
		const firstName = 'Tazkiya';
		const lastName = 'Mujahid';
		const password = 'tzkymjhd';

		await expect(page).toHaveTitle(
			'ONMARKET - Platform Jual Beli Online Terpercaya',
		);

		await signUpPage.signUpWithEmptyValue(
			email,
			phoneNumber,
			username,
			firstName,
			lastName,
			password,
		);

		await expect(signUpPage.signUpButton).toBeDisabled();
	});

	test('Verify user cannot [Sign Up] with [Invalid Data Value] email, phone_number, empty_username, first_name, last_name, password] successfully', async ({
		page,
	}) => {
		const signUpPage = new SignUp(page);

		const email = 'tazkiyadigitalarchive@gmail.com';
		const phoneNumber = '081381977551';
		const username = '';
		const firstName = 'Tazkiya';
		const lastName = 'Mujahid';
		const password = 'tzkymjhd';

		await expect(page).toHaveTitle(
			'ONMARKET - Platform Jual Beli Online Terpercaya',
		);

		await signUpPage.signUpWithEmptyValue(
			email,
			phoneNumber,
			username,
			firstName,
			lastName,
			password,
		);

		await expect(signUpPage.signUpButton).toBeDisabled();
	});

	test('Verify user cannot [Sign Up] with [Invalid Data Value] email, phone_number, username, empty_first_name, last_name, password] successfully', async ({
		page,
	}) => {
		const signUpPage = new SignUp(page);

		const email = 'tazkiyadigitalarchive@gmail.com';
		const phoneNumber = '081381977551';
		const username = 'tzkymjhd';
		const firstName = '';
		const lastName = 'Mujahid';
		const password = 'tzkymjhd';

		await expect(page).toHaveTitle(
			'ONMARKET - Platform Jual Beli Online Terpercaya',
		);

		await signUpPage.signUpWithEmptyValue(
			email,
			phoneNumber,
			username,
			firstName,
			lastName,
			password,
		);

		await expect(signUpPage.signUpButton).toBeDisabled();
	});

	test('Verify user cannot [Sign Up] with [Invalid Data Value] email, phone_number, username, first_name, empty_last_name, password] successfully', async ({
		page,
	}) => {
		const signUpPage = new SignUp(page);

		const email = 'tazkiyadigitalarchive@gmail.com';
		const phoneNumber = '081381977551';
		const username = 'tzkymjhd';
		const firstName = 'Tazkiya';
		const lastName = '';
		const password = 'tzkymjhd';

		await expect(page).toHaveTitle(
			'ONMARKET - Platform Jual Beli Online Terpercaya',
		);

		await signUpPage.signUp(
			email,
			phoneNumber,
			username,
			firstName,
			lastName,
			password,
		);

		await expect(signUpPage.signUpButton).toBeDisabled();
	});

	test('Verify user cannot [Sign Up] with [Invalid Data Value] email, phone_number, username, first_name, last_name, empty_password] successfully', async ({
		page,
	}) => {
		const signUpPage = new SignUp(page);

		const email = 'tazkiyadigitalarchive@gmail.com';
		const phoneNumber = '081381977551';
		const username = 'tzkymjhd';
		const firstName = 'Tazkiya';
		const lastName = 'Mujahid';
		const password = '';

		await expect(page).toHaveTitle(
			'ONMARKET - Platform Jual Beli Online Terpercaya',
		);

		await signUpPage.signUp(
			email,
			phoneNumber,
			username,
			firstName,
			lastName,
			password,
		);

		await expect(signUpPage.signUpButton).toBeDisabled();
	});
});
