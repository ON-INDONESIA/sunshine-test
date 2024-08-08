import { test, expect } from '@playwright/test';
import { Login } from '../../../pages/login';

test.describe('[ONMARKET] Regression Test - Login user baru', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://test.onmarket.id/');
	});

	test('Verify user can [Sign In] with [Valid Data Value] [username, password] successfully', async ({
		page,
	}) => {
		const LoginPage = new Login(page);

		const username = 'tzkymjhd';
		const password = 'tzkymjhd';

		await expect(page).toHaveTitle(
			'ONMARKET - Platform Jual Beli Online Terpercaya',
		);

		await LoginPage.signIn(username, password);

		const profilButton = page.getByRole('button', {
			name: `person Welcome ${username}`,
		});

		await expect(profilButton).toBeVisible();

		await profilButton.click();

		const myProfilButton = page.getByRole('menuitem', {
			name: 'contact_page My Profile',
		});

		await expect(myProfilButton).toBeVisible();

		await myProfilButton.click();

		await expect(page).toHaveURL(
			'https://test.onmarket.id/user/profile/detail-profile',
		);

		await profilButton.click();

		const logoutButton = page.getByRole('menuitem', { name: 'logout Logout' });

		await expect(logoutButton).toBeVisible();

		await logoutButton.click();
	});
});
