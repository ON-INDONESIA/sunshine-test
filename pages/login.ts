import { SimpleDateModule } from '@faker-js/faker';
import { expect, Locator, Page } from '@playwright/test';

export class Login {
	readonly page: Page;
	readonly usernameField: Locator;
	readonly passwordField: Locator;
	readonly logIn: Locator;
	readonly successfullyLoggedInAlert: Locator;
	readonly closeAlertButton: Locator;

	constructor(page: Page) {
		this.page = page;

		this.usernameField = page.getByRole('textbox', { name: 'Username' });

		this.passwordField = page.getByPlaceholder('Password');

		this.logIn = page.getByRole('button', { name: 'Log In' });

		this.successfullyLoggedInAlert = page
			.locator('div')
			.filter({ hasText: /^Logged InYou have successfully logged in!$/ })
			.first();

		this.closeAlertButton = page
			.locator('nz-notification')
			.filter({ hasText: /^Logged InYou have successfully logged in!$/ })
			.locator('a');
	}

	async goto() {
		await this.page.goto('/');
	}

	async signIn(username: string, password: string) {
		expect(await this.page.title()).toBe('Sunshine | Login');

		expect(await this.usernameField).toBeVisible();
		await this.usernameField.fill(username);

		expect(await this.passwordField).toBeVisible();
		await this.passwordField.fill(password);

		expect(await this.logIn).toBeVisible();
		await this.logIn.click();

		// expect(await this.successfullyLoggedInAlert).toBeVisible();

		// expect(await this.closeAlertButton).toBeVisible();
		await this.closeAlertButton.click();
	}
}
