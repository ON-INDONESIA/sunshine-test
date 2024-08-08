import { Locator, Page } from '@playwright/test';

export class Order {
	readonly page: Page;
	readonly productCard: Locator;
	readonly shipmentCity: Locator;
	readonly shipmentPrice: Locator;
	readonly minQty: Locator;
	readonly addQty: Locator;
	readonly beliSekarangButton: Locator;
	readonly masukkanKeKeranjangButton: Locator;
	readonly tambahAlamatButton: Locator;
	readonly namaPenerima: Locator;
	readonly noTelpon: Locator;
	readonly kategoriAlamat: Locator;
	readonly kotaAtauKecamatan: Locator;
	readonly Alamat: Locator;
	readonly pilihServiceButton: Locator;
	readonly pesanUntukPenjual: Locator;
	readonly pilihMetode: Locator;
	readonly buatPesananButton: Locator;
	readonly shipmentCityInput: Locator;

	constructor(page: Page) {
		this.page = page;

		this.productCard = page.getByRole('link', {
			name: 'product image POP UP Rp 10.000 JAKARTA TIMUR',
		});

		this.shipmentCity = page.getByText('arrow_drop_down').nth(0);

		this.shipmentCityInput = page.getByPlaceholder('Ketik Kota atau Kecamatan');

		this.shipmentPrice = page.getByText('arrow_drop_down').nth(1);

		this.addQty = page.locator('#container path').nth(1);

		this.minQty = page.locator('#container path').nth(0);

		this.beliSekarangButton = page.getByText('local_shippingBeli Sekarang');

		this.masukkanKeKeranjangButton = page.getByText(
			'add_shopping_cartMasukkan ke Keranjang',
		);

		this.tambahAlamatButton = page.getByText('Tambah Alamat', { exact: true });

		this.namaPenerima = page.getByPlaceholder('Nama Penerima');

		this.noTelpon = page.getByPlaceholder('Nomor yang dapat dihubungi');

		this.kategoriAlamat = page.locator('#category');

		this.kotaAtauKecamatan = page.getByPlaceholder('Ketik Kota atau Kecamatan');

		this.Alamat = page.getByPlaceholder(
			'Ketik nama jalan / gedung / nomor rumah',
		);

		this.tambahAlamatButton = page.getByRole('button', { name: 'Tambah' });

		this.pilihServiceButton = page.getByText('Pilih Service');

		this.pesanUntukPenjual = page.locator('#mat-input-1');

		this.pilihServiceButton = page
			.getByRole('button', { name: 'Pilih Service' })
			.first();

		this.pilihMetode = page.locator('select');

		this.buatPesananButton = page.getByRole('button', {
			name: 'Buat Pesanan',
		});
	}

	async goto() {
		await this.page.goto(
			'https://test.onmarket.id/store/store-product?store_name=KINDER%20GARDEN%20SEDAYU%20CITY',
		);
	}

	async chooseProduct(productName: string) {
		await this.page.getByText(productName, { exact: true }).click();
	}

	async chooseShipmentCity(city: string) {
		await this.shipmentCity.click();

		await this.shipmentCityInput.fill(city);
		await this.page.getByText(city).click();
	}

	async addQtyProduct(count: number) {
		await this.addQty.click({ clickCount: count });
	}

	async minQtyProduct(count: number) {
		await this.minQty.click({ clickCount: count });
	}

	async beliSekarang() {
		await this.beliSekarangButton.click();
	}

	async masukkanKeKeranjang() {
		await this.masukkanKeKeranjangButton.click();
	}

	async tambahAlamat(
		namaPenerima: string,
		noTelpon: string,
		kategoriAlamat: 'Rumah' | 'Kantor' | 'Lainnya',
		kotaAtauKecamatan: string,
		Alamat: string,
		AlamatUtama: boolean,
		Service: 'Reguler' | 'Kargo' | 'Ambil ditempat',
	) {
		await this.tambahAlamatButton.click();

		await this.namaPenerima.fill(namaPenerima);

		await this.noTelpon.fill(noTelpon);

		await this.kategoriAlamat.selectOption({ label: kategoriAlamat });

		await this.kotaAtauKecamatan.fill(kotaAtauKecamatan);

		await this.page.getByText(kotaAtauKecamatan).click();

		await this.Alamat.fill(Alamat);

		if (AlamatUtama) {
			await this.page.locator('#primary_address-input').check();
		}

		await this.tambahAlamatButton.click();

		await this.page.getByText('OK', { exact: true }).click();

		await this.pilihServiceButton.click();

		switch (Service) {
			case 'Reguler':
				await this.page
					.getByRole('button', { name: 'Pilih Service' })
					.first()
					.click();
				break;
			case 'Kargo':
				await this.page
					.getByRole('button', { name: 'Pilih Service' })
					.nth(1)
					.click();
				break;
			case 'Ambil ditempat':
				await this.page
					.getByRole('button', { name: 'Pilih Service' })
					.nth(2)
					.click();
				break;
		}

		await this.pilihMetode.selectOption({ label: 'COD' });

		await this.buatPesananButton.click();
	}
}
