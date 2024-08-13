import { test, expect } from '@playwright/test';
import { Login } from '../../../pages/login';

test.describe('[SUNSHINE] Regression Test - Login user', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://demosunshine.onindonesia.id/');
	});

	test('Verify user can [Sign In] with [Valid Data Value] [username, password] successfully', async ({
		page,
	}) => {
		const LoginPage = new Login(page);

		const username = 'WILLIAM';
		const password = 'tzkymjhd';

		await LoginPage.signIn(username, password);
	});
});
