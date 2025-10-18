import { test, expect } from "@playwright/test";
import * as products from "./pages/Products";
import * as cart from "./pages/Cart";
import * as checkout from "./pages/Checkout";
import * as contact from "./pages/Contact";

test("Item is added to the shopping cart", async ({ page }) => {
  await page.goto("https://valentinos-magic-beans.click/products");

  const addedProduct = await products.addProductToCart(page, 1);

  await page
    .locator('[data-test-id="header-cart-button"]')
    .getByRole("button")
    .click();

  await cart.assertProduct(page, addedProduct.name!);

  const subtotal = await cart.getSubtotal(page);

  expect(subtotal).toBe(addedProduct.price);
});

test("Complete workflow for product order", async ({ page }) => {
  await page.goto("https://valentinos-magic-beans.click/products");

  const addedProduct = await products.addProductToCart(page, 0);

  await page
    .locator('[data-test-id="header-cart-button"]')
    .getByRole("button")
    .click();

  await page.getByRole("button", { name: "Proceed To Checkout" }).click();

  await checkout.addContactInfo(page);
  await checkout.addPaymentInfo(page);
  await checkout.addShippingAddress(page);
  await checkout.placeOrder(page);

  //get order ID:
  const orderWrapper = page.getByText("Your Order ID is:").locator("..");
  const orderId = await orderWrapper
    .getByRole("paragraph")
    .nth(1)
    .textContent();

  //open the product page:
  await page.getByRole("button", { name: "Track Your Order" }).click();
  await contact.fillOrderIdAndEmail(page, orderId!, checkout.testValues.email);
  await contact.clickTrackOrder(page);

  //check if order item is returned:
  const firstOrder = page.getByText(addedProduct.name!);
  await expect(firstOrder).toBeVisible();
});

test("Complete workflow for product order - with steps", async ({ page }) => {
  await page.goto("https://valentinos-magic-beans.click/products");

  let addedProduct: Awaited<ReturnType<typeof products.addProductToCart>> =
    {} as any;

  await test.step("add product to cart", async () => {
    addedProduct = await products.addProductToCart(page, 0);
  });

  await test.step("go to checkout page", async () => {
    await page
      .locator('[data-test-id="header-cart-button"]')
      .getByRole("button")
      .click();
    await page.getByRole("button", { name: "Proceed to Checkout" }).click();
  });

  await test.step("complete checkout information", async () => {
    await checkout.addContactInfo(page);
    await checkout.addPaymentInfo(page);
    await checkout.addShippingAddress(page);
    await checkout.placeOrder(page);
  });

  let orderId: string | null;

  await test.step("get the orderID", async () => {
    const orderWrapper = page.getByText("Your Order ID is:").locator("..");
    orderId = await orderWrapper.getByRole("paragraph").nth(1).textContent();
  });

  await test.step("open the contact page", async () => {
    await page.getByRole("button", { name: "Track Your Order" }).click();
    await contact.fillOrderIdAndEmail(
      page,
      orderId!,
      checkout.testValues.email
    );
    await contact.clickTrackOrder(page);
  });

  await test.step("check if ordered item is returned", async () => {
    const firstOrder = page.getByText(addedProduct.name!);
    await expect(firstOrder).toBeVisible();
  });
});
