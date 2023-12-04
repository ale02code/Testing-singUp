// @ts-check
import { test, expect } from '@playwright/test';

// Definir constantes
const loginPageUrl = 'http://localhost:5173/';

test.describe('Login Tests', () => {
  test('has title', async ({ page }) => {
    await page.goto(loginPageUrl);
    await expect(page.title()).resolves.toMatch(/Testing/);
  });

  test('complete form', async ({ page }) => {
    await page.goto(loginPageUrl);

    const inputEmail = page.getByPlaceholder('Example@gmail.com');
    const inputPassword = page.getByPlaceholder('1a2b3c45');
    const checkBox = page.getByRole('checkbox');
    const buttonSend = page.getByRole('button', { name: 'Enviar' });

    await inputEmail.fill('chchacon02@gmail.com');
    await inputPassword.fill('12345');
    await checkBox.check();
    await buttonSend.click();
  });

  test('validations on', async ({ page }) => {
    await page.goto(loginPageUrl);

    const inputEmail = page.getByPlaceholder('Example@gmail.com');
    const inputPassword = page.getByPlaceholder('1a2b3c45');
    const checkBox = page.getByRole('checkbox');
    const buttonSend = page.getByRole('button', { name: 'Enviar' });

    await inputEmail.fill('chchacon 02@gmail.com');
    await inputPassword.fill(' ');
    await checkBox.check();
    await buttonSend.click();
    await page.getByText("Tu correo no debe contener espacios").isEnabled();
    await page.getByText("Tu contraseña no debe estar vacia").isEnabled();

    await inputEmail.fill('chchacon02');
    await inputPassword.fill('1234');
    await checkBox.check();
    await buttonSend.click();
    await page.getByText("Este no es un correo valido").isEnabled();
    await page.getByText("Tu contraseña debe tener un minimo de 5 caracteres").isEnabled();

    await inputPassword.fill('12 3455');
    await checkBox.check();
    await buttonSend.click();
    await page.getByText("Tu contraseña no debe contener espacios").isEnabled();
  });

  test('forgot password', async ({ page }) => {
    await page.goto(loginPageUrl);
    await page.getByRole('link', { name: '¿ha olvidado su contraseña?' }).click();
    await page.waitForURL("https://www.google.com/");
    await expect(page).toHaveURL("https://www.google.com/");
  });
});
