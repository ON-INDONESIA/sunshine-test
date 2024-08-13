//employeeData.ts

import { faker } from '@faker-js/faker';

export const getEmployeeData = () => {
	const contractStart = faker.date.past({ years: 2 }); // Generate contract start date

	// Calculate contract end date as 2 years from contractStart
	const contractEnd = new Date(contractStart);
	contractEnd.setFullYear(contractEnd.getFullYear() + 2); // Add 2 years to contractStart

	// Generate join date as the same as contract start date
	const joinDate = contractStart.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'

	// Generate resign date, assuming it's 1 year after join date
	const resignDate = new Date(joinDate);
	resignDate.setFullYear(resignDate.getFullYear() + 1); // Add 1 year to join date
	const resignDateFormatted = resignDate.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'

	return {
		username: faker.internet
			.userName()
			.replace(/[^a-z]/g, '') // Keep only lowercase letters
			.slice(0, 10), // Limit to 10 characters if needed
		email: faker.internet.email(),
		shift: faker.helpers.arrayElement([
			'SHIFT HO',
			'SHIFT OPS',
			'OPERATION OTI',
			'OPERATION OTB',
			'SHIFT P',
		]),
		role: 'User',
		company: 'ONDEL',
		employeeCode: `ON-DEL/${faker.number.int({
			min: 10000000,
			max: 99999999,
		})}`,

		fullname: faker.person.fullName(),
		gender: faker.helpers.arrayElement(['Male', 'Female']),
		citizenNumber: faker.string.numeric(16),
		dob: faker.date.birthdate({ min: 18, max: 60, mode: 'age' }),
		pob: faker.location.city(),
		driverLicensesType: faker.helpers.arrayElement([
			'SIM A',
			'SIM B1',
			'SIM B2',
			'SIM C',
			'None',
		]),
		phoneNumber: `08${faker.string.numeric(10)}`,
		whatsappNumber: `08${faker.string.numeric(10)}`,
		registeredAdress: faker.location.city(),
		currentAdress: faker.location.city(),
		maritalStatus: faker.helpers.arrayElement(['Single', 'Maried']),
		numberofchild: faker.number.int({ min: 0, max: 5 }).toString(),

		position: 'SPV Admin',
		placement: 'OPERATION DC JAKARTA UTARA',
		contractNumber: `CON-${faker.string
			.alpha(3)
			.toUpperCase()}-${faker.string.numeric(4)}-${new Date().getFullYear()}`,
		contractStart, // Use previously generated contract start date
		contractEnd, // Use the manually calculated contract end date
		joinDate, // Dynamically generated join date
		resignDate: resignDateFormatted, // Dynamically generated resign date
		resignReason: 'looking for new opportunity',
		employementStatus: 'Contract Employee',

		roleOsas: faker.helpers.arrayElement([
			'admin',
			'dc',
			'driver',
			'finance',
			'kurir delivery',
			'kurir pickup',
			'mitra kurir',
			'moderator',
			'om',
			'qc',
			'sa',
			'spv',
			'vip',
			'vip+',
		]),
		agentLocation: 'Jakarta',
		agentLocationValue: 'DC Jakarta Utara',

		bankName: 'BCA',
		accountName: faker.person.fullName(),
		accountNumber: faker.string.numeric(10),
	};
};
