import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppUrl,
  generateProductWhatsAppMessage,
  generateGeneralWhatsAppMessage,
  generateCustomFurnitureWhatsAppMessage,
  filterProducts,
  validateCustomFurnitureForm,
  validateContactForm,
} from './catalogueLogic';
import { PRODUCTS } from '../data/products';
import { BRAND_CONFIG } from '../config/brand';

test('brand configuration preserves official identity and contact numbers', () => {
  assert.equal(BRAND_CONFIG.businessName, 'AANGAN FURNITURE');
  assert.equal(BRAND_CONFIG.hindiName, 'आँगन फर्नीचर');
  assert.equal(BRAND_CONFIG.tagline, 'रिश्तों का अपना आँगन।');
  assert.equal(BRAND_CONFIG.primaryWhatsappNumber, '918690380190');
  assert.equal(BRAND_CONFIG.founder.name, 'Pankaj Jangir');
  assert.equal(BRAND_CONFIG.director.name, 'Prem Chand Jangid');
});

test('generateProductWhatsAppMessage builds exact product inquiry text', () => {
  const msg = generateProductWhatsAppMessage('Aangan Heritage 3-Seater Wooden Sofa Set');
  assert.equal(
    msg,
    'Hello AANGAN FURNITURE, I am interested in Aangan Heritage 3-Seater Wooden Sofa Set. Please share its price, dimensions, available finishes and customisation options.'
  );
  const url = buildWhatsAppUrl(msg);
  assert.ok(url.startsWith('https://wa.me/918690380190?text='));
  assert.ok(url.includes(encodeURIComponent('Aangan Heritage 3-Seater Wooden Sofa Set')));
});

test('generateGeneralWhatsAppMessage and custom message match specifications', () => {
  assert.equal(
    generateGeneralWhatsAppMessage(),
    'Hello AANGAN FURNITURE, I would like to know more about your furniture collection.'
  );
  assert.equal(
    generateCustomFurnitureWhatsAppMessage(),
    'Hello AANGAN FURNITURE, I want to discuss a customised furniture requirement.'
  );

  const detailedCustom = generateCustomFurnitureWhatsAppMessage({
    customerName: 'Rajesh Sharma',
    customerPhone: '9876543210',
    category: 'Dining',
    preferredDesign: '6-Seater Teak Dining Set with Cane Chairs',
    width: '72',
    height: '30',
    depth: '36',
    dimensionUnit: 'inches',
    materialPreference: 'Seasoned Teak Wood',
    finishPreference: 'Primary Walnut Brown',
    quantity: 1,
  });
  assert.ok(detailedCustom.includes('Hello AANGAN FURNITURE, I want to discuss a customised furniture requirement.'));
  assert.ok(detailedCustom.includes('Dimensions (inches): W: 72 × H: 30 × D: 36'));
  assert.ok(detailedCustom.includes('Material Preference: Seasoned Teak Wood'));
});

test('filterProducts filters by category, subCategory, and searchQuery', () => {
  const allActive = filterProducts(PRODUCTS, {});
  assert.equal(allActive.length, PRODUCTS.length);

  const livingRoom = filterProducts(PRODUCTS, { category: 'living-room' });
  assert.equal(livingRoom.length, 4);

  const krishnaCarvings = filterProducts(PRODUCTS, {
    searchQuery: 'Krishna',
  });
  assert.equal(krishnaCarvings.length, 1);
  assert.equal(krishnaCarvings[0].subCategory, 'Krishna and Cow Wooden Carvings');

  const buddhaCarvings = filterProducts(PRODUCTS, {
    subCategory: 'Buddha and Bodhi Tree Wooden Carvings',
  });
  assert.equal(buddhaCarvings.length, 1);
  assert.equal(buddhaCarvings[0].id, 'AF-SC-604');
});

test('validateCustomFurnitureForm and validateContactForm enforce required fields', () => {
  const invalidCustom = validateCustomFurnitureForm({
    customerName: '',
    customerPhone: '123',
    category: '',
    preferredDesign: '',
    width: '',
    height: '',
    depth: '',
    dimensionUnit: 'inches',
    materialPreference: '',
    finishPreference: '',
    quantity: 0,
  });
  assert.equal(invalidCustom.valid, false);
  assert.ok(invalidCustom.errors.customerName);
  assert.ok(invalidCustom.errors.customerPhone);
  assert.ok(invalidCustom.errors.category);
  assert.ok(invalidCustom.errors.preferredDesign);

  const validCustom = validateCustomFurnitureForm({
    customerName: 'Anita Verma',
    customerPhone: '+91 98290 12345',
    category: 'Living Room',
    preferredDesign: 'Arch Console Table for Foyer',
    width: '48',
    height: '32',
    depth: '15',
    dimensionUnit: 'inches',
    materialPreference: 'Solid Wood',
    finishPreference: 'Walnut Brown',
    quantity: 1,
  });
  assert.equal(validCustom.valid, true);

  const invalidContact = validateContactForm({
    fullName: 'A',
    phone: '999',
    subject: 'General',
    message: 'Hi',
  });
  assert.equal(invalidContact.valid, false);
});
