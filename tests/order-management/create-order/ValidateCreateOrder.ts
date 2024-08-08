import { test, expect } from '@playwright/test';
import { Order } from '../../../pages/order';

test.describe('[ONMARKET] Regression Test - Create New Order', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(
			'https://test.onmarket.id/store/store-product?store_name=KINDER%20GARDEN%20SEDAYU%20CITY',
		);
	});

	test('Verify user can [Create Order] with [Valid Data Value] successfully', async ({
		page,
	}) => {
		const OrderPage = new Order(page);

		const productName = 'INI TEST ONE PRODUCT';
		const shipmentCity =
			'CAKUNG TIMUR, CAKUNG, JAKARTA TIMUR, Prov. DKI JAKARTA, 13910';

		const qtyBarang = 12324;

		const namaPenerima = 'Tazkiya Mujahid';
		const noTelpon = '081381977551';

		const kategoriAlamat = 'Rumah';

		const kotaAtauKecamatan =
			'CAKUNG TIMUR, CAKUNG, JAKARTA TIMUR, Prov. DKI JAKARTA, 13910';

		const alamat = 'Jl. Raya Cakung Cilincing No. 1';
		const alamatUtama = true;

		const pesanUntukPenjual = 'ini pesan untuk penjual';
		1;
		const servicePilihan = 'Reguler';

		const metodePembayaran = 'COD';

		await OrderPage.chooseProduct(productName);
	});
});
