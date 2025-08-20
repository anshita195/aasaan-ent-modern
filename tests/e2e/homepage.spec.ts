import { test, expect } from '@playwright/test';

test.describe('Homepage E2E Tests', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    await expect(page).toHaveTitle(/AASAAN ENT Clinic/);
    await expect(page.locator('h1')).toContainText('Dr. Anil Kumar Jain');
  });

  test('should have working phone links', async ({ page }) => {
    await page.goto('/');
    
    const phoneLink = page.locator('a[href="tel:+917240868002"]').first();
    await expect(phoneLink).toBeVisible();
    await expect(phoneLink).toHaveAttribute('href', 'tel:+917240868002');
  });

  test('should display all main sections', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.locator('text=Our Services')).toBeVisible();
    await expect(page.locator('text=About Dr. Anil Kumar Jain')).toBeVisible();
    await expect(page.locator('text=Patient Testimonials')).toBeVisible();
    await expect(page.locator('text=Educational Videos')).toBeVisible();
    await expect(page.locator('text=Our Locations')).toBeVisible();
  });

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/');
    
    // Test keyboard navigation
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toBeVisible();
    
    // Test navigation menu
    const navLinks = page.locator('nav a');
    await expect(navLinks).toHaveCount(4); // Home, About, Services, Contact
  });

  test('should load images properly', async ({ page }) => {
    await page.goto('/');
    
    const doctorImage = page.locator('img[alt*="Dr. Anil Kumar Jain"]');
    await expect(doctorImage).toBeVisible();
    
    // Check if image loaded successfully
    await expect(doctorImage).toHaveAttribute('src');
  });

  test('should track analytics events', async ({ page }) => {
    // Mock analytics functions
    await page.addInitScript(() => {
      window.gtag = () => {};
      window.umami = { track: () => {} };
    });
    
    await page.goto('/');
    
    // Test phone click tracking
    const phoneButton = page.locator('a[href="tel:+917240868002"]').first();
    await phoneButton.click();
    
    // Verify page doesn't crash after analytics calls
    await expect(page.locator('h1')).toBeVisible();
  });
});
