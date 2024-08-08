import { Locator, Page } from '@playwright/test';

export class Login {
	readonly page: Page;
	readonly signUporSignInButton: Locator;
	readonly usernameField: Locator;
	readonly passwordField: Locator;
	readonly SignIn: Locator;

	constructor(page: Page) {
		this.page = page;

		this.signUporSignInButton = page.getByRole('button', {
			name: 'person Masuk/Daftar',
		});

		this.usernameField = page.getByRole('textbox', { name: 'Username' });

		this.passwordField = page.getByPlaceholder('Password');

		this.SignIn = page.getByRole('button', {
			name: 'Sign In',
		});
	}

	async goto() {
		await this.page.goto('/');
	}

	async signIn(username: string, password: string) {
		await this.signUporSignInButton.click();

		await this.usernameField.fill(username);

		await this.passwordField.fill(password);

		await this.SignIn.click();
	}
}
