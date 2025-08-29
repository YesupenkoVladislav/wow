import { test, expect } from '@playwright/test';

test('Проверка элементов навигации хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect.soft(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'API' })).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  await page.getByRole('button', { name: 'Switch between dark and light' }).click();
  await expect(page.getByRole('button', { name: 'Search (Ctrl+K)' })).toBeVisible();
});

test('Проверка названий елементов хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toContainText(
    'Playwright',
  );
  await expect.soft(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
  await expect.soft(page.getByRole('link', { name: 'API' })).toContainText('API');
  await expect.soft(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
  await expect.soft(page.getByRole('link', { name: 'Community' })).toContainText('Community');
});
test('Проверка правильный атрибутов ахреэ', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute(
    'href',
    '/',
  );
  await expect
    .soft(page.getByRole('link', { name: 'Docs' }))
    .toHaveAttribute('href', '/docs/intro');
  await expect
    .soft(page.getByRole('link', { name: 'API' }))
    .toHaveAttribute('href', '/docs/api/class-playwright');
  await expect(page.getByRole('link', { name: 'Community' })).toHaveAttribute(
    'href',
    '/community/welcome',
  );
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toHaveAttribute(
    'href',
    'https://github.com/microsoft/playwright',
  );
  await expect(page.getByRole('link', { name: 'Discord server' })).toHaveAttribute(
    'href',
    'https://aka.ms/playwright/discord',
  );
});
test('Проверка dark mode', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Switch between dark and light').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('Проверка гет стартед', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
  await expect
    .soft(page.getByRole('link', { name: 'Get started' }))
    .toHaveAttribute('href', '/docs/intro');
});
